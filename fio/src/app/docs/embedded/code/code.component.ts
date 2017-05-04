import { Component, ElementRef, ViewChild, OnChanges, Input } from '@angular/core';
import { Logger } from 'app/shared/logger.service';
import { PrettyPrinter } from './pretty-printer.service';
import { CopierService } from 'app/shared/copier.service';

import * as _ from 'lodash';

const originalLabel: string = 'Copy Code';
const copiedLabel: string = 'Copied!';

/**
 * Formatted Code Block
 *
 * Pretty renders a code block, used in the docs and API reference by the code-example and
 * code-tabs embedded components.
 * It includes a "copy" button that will send the content to the clipboard when clicked
 *
 * Example usage:
 *
 * ```
 *   <fio-code [code]="variableContainingCode" [language]="ts" [linenums]="true"></fio-code>
 * ```
 *
 */
@Component({
  selector: 'fio-code',
  template: `

    <pre class="prettyprint lang-{{language}}">
      <button *ngIf="code" class="material-icons copy-button" (click)="doCopy()">content_copy</button>
      <code class="animated fadeIn" #codeContainer></code>
    </pre>
    `,
})
export class CodeComponent implements OnChanges {

  /**
   * The language of the code to render
   * (could be javascript, dart, typescript, etc)
   */
  @Input()
  language: string;

  /**
   * Whether to display line numbers:
   *  - false: don't display
   *  - true: do display
   *  - number: do display but start at the given number
   */
  @Input()
  linenums: boolean | number | string;

  /**
   * The code to be formatted, this should already be HTML encoded
   */
  @Input()
  code: string;

  /**
   * The label to show on the copy button
   */
  buttonLabel: string = originalLabel;

  /**
   * The element in the template that will display the formatted code
   */
  @ViewChild('codeContainer') codeContainer: ElementRef;

  constructor(
    private pretty: PrettyPrinter,
    private copier: CopierService,
    private logger: Logger) {}

  ngOnChanges(): void {
    this.code = this.code && leftAlign(this.code);

    if (!this.code) {
      this.setCodeHtml('<p class="code-missing">The code sample is missing.</p>');
      return;
    }

    const linenums = this.getLinenums();

    this.setCodeHtml(this.code); // start with unformatted code
    this.pretty.formatCode(this.code, this.language, linenums).subscribe(
      (formattedCode) => this.setCodeHtml(formattedCode),
      (err) => {
        if (err) {}
        /* ignore failure to format */
      },
    );
  }

  doCopy(): void {
    // We take the innerText because we don't want it to be HTML encoded
    const code = this.codeContainer.nativeElement.innerText;
    if (this.copier.copyText(code)) {
      this.logger.log('Copied code to clipboard:', code);
      // change the button label (for one second)
      this.buttonLabel = copiedLabel;
      setTimeout(() => this.buttonLabel = originalLabel, 1000);
    } else {
      this.logger.error('ERROR copying code to clipboard:', code);
    }
  }

  getLinenums(): number | boolean {
    const linenums =
      typeof this.linenums === 'boolean' ? this.linenums :
      this.linenums === 'true' ? true :
      this.linenums === 'false' ? false :
      typeof this.linenums === 'string' ? parseInt(this.linenums, 10) :
      this.linenums;

    // if no linenums, enable line numbers if more than one line
    return linenums === null || (!_.isBoolean(linenums) && isNaN(linenums)) ?
      (this.code.match(/\n/g) || []).length > 1 : linenums;
  }

  private setCodeHtml(formattedCode: string): void {
    // **Security:** `codeExampleContent` is provided by docs authors and as such its considered to
    // be safe for innerHTML purposes.
    this.codeContainer.nativeElement.innerHTML = formattedCode;
  }
}

function leftAlign(text: string): string {
  let indent = Number.MAX_VALUE;
  const lines = text.split('\n');
  lines.forEach((line) => {
    const lineIndent = line.search(/\S/);
    if (lineIndent !== -1) {
      indent = Math.min(lineIndent, indent);
    }
  });
  return lines.map((line) => line.substr(indent)).join('\n').trim();
}
