import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DocArticleCodeBlock } from '../../types/doc-article';

import 'prismjs/prism';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup';
declare var Prism: any;

@Component({
  selector: 'docs-code-block',
  templateUrl: 'code-block.component.html',
  styleUrls: [ './code-block.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})

export class CodeBlockComponent implements OnInit, AfterViewInit {

  @Input() code: DocArticleCodeBlock;
  public codeBlock: any;
  @ViewChild('codeAnchor') codeAnchor: any;

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.codeBlock = Prism.highlight(this.code.content, Prism.languages[this.code.language]);
    this.codeAnchor.nativeElement.innerHTML = this.codeBlock;
  }
}
