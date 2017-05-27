import { ChangeDetectorRef, Injector } from '@angular/core';

import { Controller } from './controller';

export class Component<M, V, C extends Controller<M, V>> {

  public model: M;

  public view: V;

  public controller: C;

  private changeDetectorRef: ChangeDetectorRef;

  public constructor(
    controller: C,
    injector: Injector,
  ) {
    this.controller = controller;
    this.changeDetectorRef = injector.get(ChangeDetectorRef);

    controller.model$.subscribe((model) => this.updateModel(model));
    controller.view$.subscribe((view) => this.updateView(view));
    controller.markForCheck$.subscribe(() => this.changeDetectorRef.markForCheck());
  }

  private updateModel(model: M): void {
    this.model = model;
    this.changeDetectorRef.markForCheck();
  }

  private updateView(view: V): void {
    this.view = view;
    this.changeDetectorRef.markForCheck();
  }
}
