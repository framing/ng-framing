import { Component, Renderer2, ElementRef, AfterViewInit, ViewEncapsulation, OnInit } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { DocsArticleController } from '../docs-article.controller';
import { DocsRootController } from '../../docs-root/docs-root.controller';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup';
declare var Prism: any;

@Component({
  selector: 'docs-article',
  templateUrl: './docs-article.component.html',
  styleUrls: [ './docs-article.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class DocsArticleComponent implements OnInit, AfterViewInit {
  public trustedContent: any;

  constructor(
    public docsArticleController: DocsArticleController,
    public docsRootController: DocsRootController,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
  ) {}

  public ngAfterViewInit(): void {
    console.warn('hello');
    const elementList = this.elementRef.nativeElement.querySelectorAll('pre');
    elementList.forEach((element) => {
      let code = element.querySelector('code');
      console.log(code, element);
      // default Language
      let languageType: string = 'typescript';
      if (code && code.classList) {
        code.classList.forEach((c) => {
          const index = c.indexOf('language-');
          if (index > 0) {
            languageType = c.splice(index, c.length);
          }
        });
      } else {
        console.warn(code, element);
      }
      if (code) {
        this.renderer.addClass(element, 'language-' + languageType);
        /*tslint:disable*/
        const tokenizedCode = Prism.highlight(code.innerHTML, Prism.languages[languageType]);
        /*tslint:enable*/
        this.trustedContent = this.sanitizer.bypassSecurityTrustHtml(tokenizedCode);
      }
    });
  }

  public ngOnInit(): void {}

  public trustHTML(html: any): any {
    console.log(html);
    // return html;
    let parser: any = new DOMParser();
    let htmlDoc: HTMLDocument = parser.parseFromString(html, 'text/html');

    const elementList = htmlDoc.getElementsByTagName('pre');
    if (elementList.length <= 0) {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    console.log(htmlDoc);

    /*tslint:disable*/
    for (let i = 0; i < elementList.length; i++) {
      /*tslint:enable*/
      let element = elementList[i];
      let code = element.querySelector('code');
      console.log(code.innerHTML, element);
      // default Language
      let languageType: string = 'typescript';
      if (code && code.classList) {
        /*tslint:disable*/
        for (let j = 0; j < code.classList.length; j++) {
          /*tslint:enable*/
          let c = code.classList[j];
          const index = c.indexOf('language-');
          if (index > 0) {
            languageType = c.slice(index, c.length);
          }
        }
      }

      if (code) {
        this.renderer.addClass(element, 'language-' + languageType);
        this.renderer.addClass(code, 'language-' + languageType);
        /*tslint:disable*/
        const tokenizedCode = Prism.highlight(code.innerHTML, Prism.languages[languageType]);
        console.log(code.innerHTML, tokenizedCode);
        /*tslint:enable*/
        code.innerHTML = tokenizedCode;
      }
    }

    return this.sanitizer.bypassSecurityTrustHtml(htmlDoc.documentElement.innerHTML);
  }
}
