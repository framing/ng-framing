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

  private _injector: Injector;

  // ========================================
  // public methods
  // ========================================

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
  public initController(model: Model, view: View, frame: Frame, injector: Injector): void {
    this._model = model;
    this._view = view;
    this._frame = frame;
    this._injector = injector;
    if (this._frame) {
      this._frame.resolveStart$.subscribe(() => { this.onResolveStart(); });
      this._frame.resolveEnd$.subscribe(() => { this.onResolveEnd(); });
      this._frame.resolveCancel$.subscribe(() => { this.onResolveCancel(); });
    }
    this.onControllerInit();
  }
}
