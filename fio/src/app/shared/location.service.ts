import { Injectable } from '@angular/core';
import { Location, PlatformLocation } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocationService {

  currentUrl: Observable<string>;

  private readonly urlParser: any = document.createElement('a');
  private urlSubject: Subject<string> = new ReplaySubject<string>(1);

  constructor(
    private location: Location,
    private platformLocation: PlatformLocation) {

    this.currentUrl = this.urlSubject.asObservable();

    const initialUrl = this.apiUrl(this.stripLeadingSlashes(location.path(true)));
    this.urlSubject.next(initialUrl);

    this.location.subscribe((state) => {
      const url = this.apiUrl(this.stripLeadingSlashes(state.url));
      return this.urlSubject.next(url);
    });
  }

  apiUrl(url: string): string {
    return url.replace(/^(docs)/, '');
  }

  // TODO?: ignore if url-without-hash-or-search matches current location?
  go(url: string): void {
    this.location.go(url);
    this.urlSubject.next(url);
  }

  search(): { [index: string]: string; } {
    const search: any = {};
    const path = this.location.path();
    const q = path.indexOf('?');
    if (q > -1) {
      try {
        const params: string[] = path.substr(q + 1).split('&');
        params.forEach((p) => {
          const pair = p.split('=');
          if (pair[0]) {
            search[decodeURIComponent(pair[0])] = pair[1] && decodeURIComponent(pair[1]);
          }
        });
      } catch (e) { /* don't care */ }
    }
    return search;
  }

  setSearch(label: string, params: {}): void {
    const search = Object.keys(params).reduce((acc, key) => {
      const value = (params as any)[key];
      // tslint:disable-next-line:triple-equals
      /* tslint:disable:no-param-reassign */
      return value == undefined ? acc :
        acc += (acc ? '&' : '?') + `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      /* tslint:enable:no-param-reassign */
    }, '');

    this.platformLocation.replaceState({}, label, this.platformLocation.pathname + search);
  }

  /**
   * Since we are using `LocationService` to navigate between docs, without the browser
   * reloading the page, we must intercept clicks on links.
   * If the link is to a document that we will render, then we navigate using `Location.go()`
   * and tell the browser not to handle the event.
   *
   * In most apps you might do this in a `LinkDirective` attached to anchors but in this app
   * we have a special situation where the `DocViewerComponent` is displaying semi-static
   * content that cannot contain directives. So all the links in that content would not be
   * able to use such a `LinkDirective`. Instead we are adding a click handler to the
   * `AppComponent`, whose element contains all the of the application and so captures all
   * link clicks both inside and outside the `DocViewerComponent`.
   */
  handleAnchorClick(anchor: HTMLAnchorElement, button: number, ctrlKey: boolean, metaKey: boolean): boolean {

    // Check for modifier keys, which indicate the user wants to control navigation
    if (button !== 0 || ctrlKey || metaKey) {
      return true;
    }

    // If there is a target and it is not `_self` then we take this
    // as a signal that it doesn't want to be intercepted.
    // TODO: should we also allow an explicit `_self` target to opt-out?
    const anchorTarget = anchor.target;
    if (anchorTarget && anchorTarget !== '_self') {
      return true;
    }

    // check for external link
    const { pathname, search, hash } = anchor;
    const relativeUrl = pathname + search + hash;
    this.urlParser.href = relativeUrl;
    if (anchor.href !== this.urlParser.href) {
      return true;
    }

    this.go(this.stripLeadingSlashes(relativeUrl));
    return false;
  }

  private stripLeadingSlashes(url: string): string {
    return url.replace(/^\/+/, '');
  }
}
