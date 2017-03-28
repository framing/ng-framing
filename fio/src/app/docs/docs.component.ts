import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GaService } from 'app/shared/ga.service';
import { LocationService } from 'app/shared/location.service';
import { AutoScrollService } from 'app/shared/auto-scroll.service';

import { DocumentService, DocumentContents } from './documents/document.service';
import { DocViewerComponent } from './layout/doc-viewer/doc-viewer.component';
import { NavigationService, NavigationViews, NavigationNode, VersionInfo } from './navigation/navigation.service';
import { SearchService } from './search/search.service';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@Component({
  selector: 'docs',
  templateUrl: './docs.component.html',
  styleUrls: [ './docs.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class DocsComponent implements OnInit {
  readonly sideBySideWidth: number = 600;
  readonly homeImageUrl: string = 'imgs/logos/standard/logo-nav.png';

  isHamburgerVisible: boolean = true; // always ... for now
  isSideBySide: boolean = false;

  currentDocument: Observable<DocumentContents>;
  navigationViews: Observable<NavigationViews>;
  selectedNodes: Observable<NavigationNode[]>;
  versionInfo: Observable<VersionInfo>;

  @ViewChildren('searchBox, searchResults', { read: ElementRef })
  searchElements: QueryList<ElementRef>;

  @ViewChild(SearchResultsComponent)
  searchResults: SearchResultsComponent;

  // We need the doc-viewer element for scrolling the contents
  @ViewChild(DocViewerComponent, { read: ElementRef })
  docViewer: ElementRef;

  constructor(documentService: DocumentService,
              gaService: GaService,
              navigationService: NavigationService,
              private autoScroll: AutoScrollService,
              private locationService: LocationService,
              private searchService: SearchService) {
    this.currentDocument = documentService.currentDocument;
    locationService.currentUrl.subscribe((url) => gaService.locationChanged(url));
    this.navigationViews = navigationService.navigationViews;
    this.selectedNodes = navigationService.selectedNodes;
    this.versionInfo = navigationService.versionInfo;
  }

  ngOnInit(): void {
    this.searchService.initWorker('./search/search-worker.js');
    this.searchService.loadIndex();

    this.onResize(window.innerWidth);

    // The url changed, so scroll to the anchor in the hash fragment.
    // This subscription is needed when navigating between anchors within a document
    // and the document itself has not changed
    this.locationService.currentUrl.subscribe((url) => this.autoScroll.scroll(this.docViewer.nativeElement.offsetParent));
  }

  onDocRendered(doc: DocumentContents): void {
    // A new document has been rendered, so scroll to the anchor in the hash fragment.
    // This handler is needed because the subscription to the `currentUrl` in `ngOnInit`
    // gets triggered too early before the doc-viewer has finished rendering the doc
    this.autoScroll.scroll(this.docViewer.nativeElement.offsetParent);
  }

  @HostListener('window:resize', [ '$event.target.innerWidth' ])
  onResize(width: number): void {
    this.isSideBySide = width > this.sideBySideWidth;
  }

  @HostListener('click', [ '$event.target', '$event.button', '$event.ctrlKey', '$event.metaKey' ])
  onClick(eventTarget: HTMLElement, button: number, ctrlKey: boolean, metaKey: boolean): boolean {

    // Hide the search results if we clicked outside both the search box and the search results
    if (this.searchResults) {
      const hits = this.searchElements.filter((element) => element.nativeElement.contains(eventTarget));
      if (hits.length === 0) {
        this.searchResults.hideResults();
      }
    }

    // Deal with anchor clicks
    if (eventTarget instanceof HTMLAnchorElement) {
      return this.locationService.handleAnchorClick(eventTarget, button, ctrlKey, metaKey);
    }
    return true;
  }
}
