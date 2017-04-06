import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeUntil';

import { Logger } from 'app/shared/logger.service';

export interface ApiItem {
  name: string;
  title: string;
  path: string;
  docType: string;
  stability: string;
  securityRisk: boolean;
  description: string;

  show?: boolean;
}

export interface ApiSection {
  name: string;
  title: string;
  items: ApiItem[];
}

@Injectable()
export class ApiService implements OnDestroy {

  private apiBase: string = 'content/docs/api/';
  private apiListJsonDefault: string = 'api-list.json';
  private firstTime: boolean = true;
  private onDestroy: Subject<{}> = new Subject();
  private sectionsSubject: Subject<ApiSection[]> = new ReplaySubject<ApiSection[]>(1);
  private _sections: Observable<ApiSection[]> = this.sectionsSubject.takeUntil(this.onDestroy);

  /**
  * Return a cached observable of API sections from a JSON file.
  * API sections is an array of Framing top modules and metadata about their API documents (items).
   */
  get sections(): Observable<ApiSection[]> {

    if (this.firstTime) {
      this.firstTime = false;
      this.fetchSections(); // TODO: get URL for fetchSections by configuration?

      // makes sectionsSubject hot; subscribe ensures stays alive (always refCount > 0);
      this._sections.subscribe((sections: ApiSection[]) => this.logger.log('ApiService got API sections') );
    }

    return this._sections;
  }

  constructor(private http: Http, private logger: Logger) { }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

 /**
  * Fetch API sections from a JSON file.
  * API sections is an array of Angular top modules and metadata about their API documents (items).
  * Updates `sections` observable
  *
  * @param {string} [src] - Name of the api list JSON file
  */
  fetchSections(src?: string): void {
    // TODO: get URL by configuration?
    const url = this.apiBase + (src || this.apiListJsonDefault);
    this.http.get(url)
      .takeUntil(this.onDestroy)
      .map((response) => response.json())
      .do(() => this.logger.log(`Got API sections from ${url}`))
      .subscribe(
        (sections) => {
          this.sectionsSubject.next(sections);
        },
        (err) => {
          // Todo: handle error
          this.logger.error(err);
          throw err; // rethrow for now.
        },
      );
  }
}
