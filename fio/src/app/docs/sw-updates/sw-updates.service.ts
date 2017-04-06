import { Injectable, OnDestroy } from '@angular/core';
import { NgServiceWorker } from '@angular/service-worker';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';

/**
 * SwUpdatesService
 *
 * @description
 * 1. Checks for available ServiceWorker updates once instantiated.
 * 2. As long as there is no update available, re-checks every 6 hours.
 * 3. As soon as an update is detected, it waits until the update is activated, then starts checking
 *    again (every 6 hours).
 *
 * @property
 * `isUpdateAvailable` {Observable<boolean>} - Emit `true`/`false` to indicate updates being
 * available or not. Remembers the last emitted value. Will only emit a new value if it is different
 * than the last one.
 *
 * @method
 * `activateUpdate()` {() => Promise<boolean>} - Activate the latest available update. The returned
 * promise resolves to `true` if an update was activated successfully and `false` if the activation
 * failed (e.g. if there was no update to activate).
 */
@Injectable()
export class SwUpdatesService implements OnDestroy {
  isUpdateAvailable: Observable<boolean>;

  private checkInterval: number = 1000 * 60 * 60 * 6;   // 6 hours
  private onDestroy: Subject<any> = new Subject<any>();
  private checkForUpdateSubj: Subject<any> = new Subject<any>();
  private isUpdateAvailableSubj: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private sw: NgServiceWorker) {
    this.isUpdateAvailable = this.isUpdateAvailableSubj.distinctUntilChanged();

    this.checkForUpdateSubj
        .debounceTime(this.checkInterval)
        .takeUntil(this.onDestroy)
        .startWith(null)
        .subscribe(() => this.checkForUpdate());

    this.isUpdateAvailableSubj
        .filter((v) => !v)
        .takeUntil(this.onDestroy)
        .subscribe(() => this.checkForUpdateSubj.next());
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

  activateUpdate(): Promise<boolean> {
    return new Promise((resolve) => {
      this.sw.activateUpdate(null)
          // Temp workaround for https://github.com/angular/mobile-toolkit/pull/137.
          // TODO (gkalpak): Remove once #137 is fixed.
          .concat(Observable.of(false)).take(1)
          .do(() => this.isUpdateAvailableSubj.next(false))
          .subscribe(resolve);
    });
  }

  private checkForUpdate(): void {
    this.sw.checkForUpdate()
        // Temp workaround for https://github.com/angular/mobile-toolkit/pull/137.
        // TODO (gkalpak): Remove once #137 is fixed.
        .concat(Observable.of(false)).take(1)
        .subscribe((v: any) => this.isUpdateAvailableSubj.next(v));
  }
}
