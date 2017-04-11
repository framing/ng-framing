import { Component, ElementRef, HostListener, OnInit,
         QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { AutoScrollService } from 'app/shared/auto-scroll.service';
import { LocationService } from 'app/shared/location.service';

import { CurrentNode, NavigationService, NavigationNode, VersionInfo } from './navigation/navigation.service';
import { DocumentService, DocumentContents } from './documents/document.service';
import { DocViewerComponent } from './layout/doc-viewer/doc-viewer.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

const sideNavView = 'SideNav';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrls: [ './docs.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class DocsComponent implements OnInit {

  currentNode: CurrentNode;
  dtOn: boolean = false;
  pageId: string;
  currentDocument: DocumentContents;
  footerNodes: NavigationNode[];
  isSideBySide: boolean = false;

  sideNavNodes: NavigationNode[];
  topMenuNodes: NavigationNode[];
  versionInfo: VersionInfo;

  get homeImageUrl(): string {
    return this.isSideBySide ?
      '/imgs/light.logo.framing.png' :
      '/imgs/light.logo.framing.small.png';
  }

  get isOpened(): boolean { return this.isSideBySide && this.isSideNavDoc; }
  get mode(): string { return this.isSideBySide ? 'side' : 'over'; }

  // Need the doc-viewer element for scrolling the contents
  @ViewChild(DocViewerComponent, { read: ElementRef })
  docViewer: ElementRef;

  @ViewChildren('searchBox, searchResults', { read: ElementRef })
  searchElements: QueryList<ElementRef>;

  @ViewChild(SearchResultsComponent)
  searchResults: SearchResultsComponent;

  @ViewChild(MdSidenav)
  sidenav: MdSidenav;

  private isSideNavDoc: boolean = false;
  private previousNavView: string;
  // Set to 1032 to account for computed html window size
  private readonly sideBySideWidth: number = 1032;

  constructor(
    private autoScrollService: AutoScrollService,
    private documentService: DocumentService,
    private locationService: LocationService,
    private navigationService: NavigationService,
  ) { }

  ngOnInit(): void {
    /* No need to unsubscribe because this root component never dies */

    this.documentService.currentDocument.subscribe((doc) => this.currentDocument = doc);

    // scroll even if only the hash fragment changed
    this.locationService.currentUrl.subscribe((url) => this.autoScroll());

    this.navigationService.currentNode.subscribe((currentNode) => {
      this.currentNode = currentNode;
      this.pageId = this.currentNode.url.replace('/', '-') || 'home';

      // Toggle the sidenav if the kind of view changed
      if (this.previousNavView === currentNode.view) { return; }
      this.previousNavView = currentNode.view;
      this.isSideNavDoc = currentNode.view === sideNavView;
      this.sideNavToggle(this.isSideNavDoc);
    });

    this.navigationService.navigationViews.subscribe((views) => {
      this.footerNodes = views.Footer || [];
      this.sideNavNodes = views.SideNav || [];
      this.topMenuNodes = views.TopBar || [];
    });

    this.navigationService.versionInfo.subscribe( (vi) => this.versionInfo = vi );

    this.onResize(window.innerWidth);
  }

  // Scroll to the anchor in the hash fragment.
  autoScroll(): void {
    this.autoScrollService.scroll(this.docViewer.nativeElement.offsetParent);
  }

  onDocRendered(): void {
    // This handler is needed because the subscription to the `currentUrl` in `ngOnInit`
    // gets triggered too early before the doc-viewer has finished rendering the doc
    this.autoScroll();
  }

  @HostListener('window:resize', [ '$event.target.innerWidth' ])
  onResize(width: number): void {
    this.isSideBySide = width > this.sideBySideWidth;
  }

  @HostListener('click', [ '$event.target', '$event.button', '$event.ctrlKey', '$event.metaKey', '$event.altKey' ])
  onClick(eventTarget: HTMLElement, button: number, ctrlKey: boolean, metaKey: boolean, altKey: boolean): boolean {

    // Hide the search results if we clicked outside both the search box and the search results
    if (this.searchResults) {
      const hits = this.searchElements.filter((element) => element.nativeElement.contains(eventTarget));
      if (hits.length === 0) {
        this.searchResults.hideResults();
      }
    }

    if (eventTarget.tagName === 'FOOTER' && metaKey && altKey) {
      this.dtOn = !this.dtOn;
    }

    // Deal with anchor clicks
    if (eventTarget instanceof HTMLImageElement) {
      /* tslint:disable:no-param-reassign */
      eventTarget = eventTarget.parentElement; // assume image wrapped in Anchor
      /* tslint:disable:no-param-reassign */
    }
    if (eventTarget instanceof HTMLAnchorElement) {
      return this.locationService.handleAnchorClick(eventTarget, button, ctrlKey, metaKey);
    }
    return true;
  }

  sideNavToggle(value?: boolean): void {
    this.sidenav.toggle(value);
  }
}
