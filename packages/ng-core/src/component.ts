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
    this.changeDetectorRef = injector.get(ChangeDetectorRef);

    controller.model$.subscribe((model) => {
      this.model = model;
      this.changeDetectorRef.markForCheck();
    });

    controller.view$.subscribe((view) => {
      this.view = view;
      this.changeDetectorRef.markForCheck();
    });
  }
}
