import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { DocsArticleController } from '../docs-article.controller';
import { DocsRootController } from '../../docs-root/docs-root.controller';

@Component({
  selector: 'docs-article',
  templateUrl: './docs-article.component.html',
})
export class DocsArticleComponent{
  public trustedContent: any;

  constructor(
    public docsArticleController: DocsArticleController,
    public docsRootController: DocsRootController,
    private sanitizer: DomSanitizer,
  ) {}
  
  public trustHTML(html: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
