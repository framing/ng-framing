import * as _ from 'lodash';

import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Frame } from './frame';

@Injectable()
export abstract class Controller<M, V> {

  // ========================================
  // private properties
  // ========================================

  private _modelSubject: BehaviorSubject<M>;

  private _model$: Observable<M>;

  private _model: M;

  private _viewSubject: BehaviorSubject<V>;

  private _view$: Observable<V>;

  private _view: V;

  private _markForCheckSubject: Subject<void>;

  private _markForCheck$: Observable<void>;

  private _frame: Frame;

  private _framerName: string;

  private _injector: Injector;

  private _refCount: number = 0;

  // ========================================
  // public methods
  // ========================================

  /**
   * Model observable accessor.
   */
  public get model$(): Observable<M> { return this._model$; }

  /**
   * Model accessor.
   */
  public get model(): M { return this._model; }

  /**
   * View observable accessor.
   */
  public get view$(): Observable<V> { return this._view$; }

  /**
   * View accessor.
   */
  public get view(): V { return this._view; }

  /**
   * Mark for check observable accessor.
   */
  public get markForCheck$(): Observable<void> { return this._markForCheck$; }

  /**
   * Frame accessor.
   */
  public get frame(): Frame { return this._frame; }

  /**
   * Model accessor.
   */
  public get injector(): Injector { return this._injector; }

  /**
   * Called after controller is initialized with model, view & frame from framing.
   */
  public onControllerInit(): void {}

  /**
   * Called when the controller's route starts resolving.
   */
  public onResolveStart(): void {}

  /**
   * Called when the controller's route end resolving.
   */
  public onResolveEnd(): void {}

  /**
   * Called when the controller's route resolve is cancelled.
   */
  public onResolveCancel(): void {}

  /**
   * Called by framing after construction to link the model, view & frame for this controller.
   */
  public initController(model: M, view: V, frame: Frame, framerName: string, injector: Injector): void {
    this._modelSubject = new BehaviorSubject<M>(model);
    this._viewSubject = new BehaviorSubject<V>(view);
    this._model$ = this._modelSubject.asObservable();
    this._view$ = this._viewSubject.asObservable();
    this._model = model;
    this._view = view;
    this._markForCheckSubject = new Subject<void>();
    this._markForCheck$ = this._markForCheckSubject.asObservable();
    this._frame = frame;
    this._injector = injector;
    this._framerName = framerName;

    if (this._frame) {
      this._frame.resolveStart$.subscribe(() => { this.onResolveStart(); });
      this._frame.resolveEnd$.subscribe(() => { this.onResolveEnd(); });
      this._frame.resolveCancel$.subscribe(() => { this.onResolveCancel(); });
    }

    this.onControllerInit();

    console.log('initController');
    console.log(this);
  }

  public updateModel(model: M, replace: boolean = false): void {
    if (replace) {
      this._model = _.clone(model);
    } else {
      this._model = _.assign({}, this._model, model);
    }

    this._modelSubject.next(this._model);
  }

  public updateView(view: V, replace: boolean = false): void {
    if (replace) {
      this._view = _.clone(view);
    } else {
      this._view = _.assign({}, this._view, view);
    }

    this._viewSubject.next(this._view);
  }

  public markForCheck(): void {
    this._markForCheckSubject.next();
  }

  public attach(): void {
    this._refCount++;

    if (this._refCount === 1) {
      this.onAttached();
    }
  }

  public detach(): void {
    this._refCount--;

    if (this._refCount === 0) {
      this.onDetached();
    }
  }

  public onAttached(): void { }

  public onDetached(): void { }
}
