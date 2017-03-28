/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://framing.io/license
*/

import { NgZone, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/concatMap';
import { WebWorkerClient } from 'app/shared/web-worker';

export interface SearchResults {
  query: string;
  results: SearchResult[];
}

export interface SearchResult {
  path: string;
  title: string;
  type: string;
  titleWords: string;
  keywords: string;
}


@Injectable()
export class SearchService {
  private worker: WebWorkerClient;
  private ready: Observable<boolean>;
  private resultsSubject: Subject<SearchResults> = new Subject<SearchResults>();
  get searchResults(): Observable<SearchResults> { return this.resultsSubject.asObservable(); }

  constructor(private zone: NgZone) {}

  initWorker(workerUrl: string): void {
    this.worker = new WebWorkerClient(new Worker(workerUrl), this.zone);
  }

  loadIndex(): void {
    const ready = this.ready = this.worker.sendMessage<boolean>('load-index').publishLast();
    // trigger the index to be loaded immediately
    ready.connect();
  }

  search(query: string): void {
    this.ready.concatMap((ready) => {
      return this.worker.sendMessage('query-index', query) as Observable<SearchResults>;
    }).subscribe((results) => this.resultsSubject.next(results));
  }
}
