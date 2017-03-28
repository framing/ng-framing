import { Component, ChangeDetectionStrategy, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

import { SearchResult, SearchResults, SearchService } from '../search.service';

export interface SearchArea {
  name: string;
  pages: SearchResult[];
}

/**
 * A component to display the search results
 */
@Component({
  selector: 'fio-search-results',
  templateUrl: './search-results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultsComponent implements OnInit {

  readonly defaultArea: string = 'Other';

  showResults: boolean = false;

  @Output()
  resultSelected: EventEmitter<SearchResult> = new EventEmitter<SearchResult>();

  /**
   * A mapping of the search results grouped into areas
   */
  searchAreas: Subject<SearchArea[]> = new ReplaySubject<SearchArea[]>(1);

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchService.searchResults.subscribe((search) => this.searchAreas.next(this.processSearchResults(search)));
  }

  onResultSelected(result: SearchResult): void {
    this.resultSelected.emit(result);
    this.hideResults();
  }

  @HostListener('document:keyup', [ '$event.which' ])
  onKeyUp(keyCode: number): void {
    if (keyCode === 27) {
      this.hideResults();
    }
  }

  hideResults(): void {
    this.searchAreas.next([]);
  }

  // Map the search results into groups by area
  private processSearchResults(search: SearchResults): SearchArea[] {
    this.showResults = true;
    const searchAreaMap: any = {};
    search.results.forEach((result) => {
      const areaName = this.computeAreaName(result) || this.defaultArea;
      const area = searchAreaMap[areaName] = searchAreaMap[areaName] || [];
      area.push(result);
    });
    return Object.keys(searchAreaMap).map((name) => ({ name, pages: searchAreaMap[name] }));
  }

  // Split the search result path and use the top level folder, if there is one, as the area name.
  private computeAreaName(result: SearchResult): string {
    const [ areaName, rest ] = result.path.split('/', 2);
    return rest && areaName;
  }
}
