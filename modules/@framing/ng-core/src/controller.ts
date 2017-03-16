import { Injectable, Injector } from '@angular/core';
import { Frame } from './frame';

@Injectable()
export abstract class Controller<Model, View> {

  // ========================================
  // private properties
  // ========================================

  private _model: Model;

  private _view: View;

  private _frame: Frame;

  // ========================================
  // public methods
  // ========================================

  /**
   * The name of this framer.
   */
  public abstract get controllerName(): string;

  /**
   * Model accessor.
   */
  public get model(): Model { return this._model; }

  /**
   * View accessor.
   */
  public get view(): View { return this._view; }

  /**
   * Frame accessor.
   */
  public get frame(): Frame { return this._frame; }

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
   * Constructor.
   */
  constructor(injector: Injector) {
    this._model = injector.get(this.controllerName + 'Model');
    this._view = injector.get(this.controllerName + 'View');
    this._frame = injector.get(this.controllerName + 'Frame');
    if (this._frame) {
      this._frame.resolveStart$.subscribe(() => { this.onResolveStart(); });
      this._frame.resolveEnd$.subscribe(() => { this.onResolveEnd(); });
      this._frame.resolveCancel$.subscribe(() => { this.onResolveCancel(); });
    }
  }
}
