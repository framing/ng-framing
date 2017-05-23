import { Component, AfterViewInit, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { DocsArticleController } from '../docs-article.controller';
import { DocsRootController } from '../../docs-root/docs-root.controller';

@Component({
  selector: 'docs-article',
  templateUrl: './docs-article.component.html',
})
export class DocsArticleComponent implements OnInit, AfterViewInit {
  public trustedContent: any;

  constructor(
    public docsArticleController: DocsArticleController,
    public docsRootController: DocsRootController,
    private sanitizer: DomSanitizer,
  ) {}

  public ngAfterViewInit(): void {}

  public ngOnInit(): void {}

  public trustHTML(html: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
