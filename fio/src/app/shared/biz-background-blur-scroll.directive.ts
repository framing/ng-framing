import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bizNavbarBgBlurScroll]',
})
export class BizNavbarBgBlurScrollDirective implements OnInit {
  @Input() public bizNavbarBgBlurScrollContent: any;
  @Input() public bizNavbarBgBlurScrollNavbarTarget: any;
  private _contentElement: any;
  // private _navbarElement: any;

  constructor(private _element: ElementRef) { }

  public ngOnInit(): void {
    this.copyContent();
    // this.updateSizing();
    this.updatePosition();
  }

  @HostListener('window:scroll', [ '$event' ])
  public handleScrollEvent(): void {
    // this.updateSizing();
    this.updatePosition();
  }

  @HostListener('window:resize', [ '$event' ])
  public handleResizeEvent(): void {
    // this.updateSizing();
    this.updatePosition();
  }

  private copyContent(): void {
    this._contentElement = document.querySelector(`#${ this.bizNavbarBgBlurScrollContent }`);
    this._element.nativeElement.innerHTML = this._contentElement.innerHTML;
  }

  private updatePosition(): void {
    if (window) {
      this._element.nativeElement.scrollTop = window.scrollY;
    }
  }

  // private updateSizing(): void {
  //   if (window && this.bizNavbarBgBlurScrollNavbarTarget) {
  //     this._navbarElement = document.querySelector(`#${ this.bizNavbarBgBlurScrollNavbarTarget }`);
  //     this._element.nativeElement.style.height = `${ this._navbarElement.offsetHeight }`;
  //     console.log( this._element.nativeElement.style.height );
  //     console.log( this._navbarElement.offsetHeight );
  //   }
  // }
}
