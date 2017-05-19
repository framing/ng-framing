// declare var Prism: any;
import 'prismjs/prism';

import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({ selector: 'code' })
export class PrismHighlightDirective implements AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {
    console.error('test');
  }

  public ngAfterViewInit(): void {
    console.error('test');
    let elementList = this.elementRef.nativeElement.querySelectorAll('pre');
    elementList.forEach((element) => {
      console.log(element.querySelector('code'));
      this.renderer.addClass(element.querySelector('code'), 'language-javascript');
      // this.renderer.addClass(element, 'language-javascript');
    });
  }
}
