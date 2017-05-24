import { ChangeDetectorRef } from '@angular/core';

import { Controller } from './controller';

export class Component<M, V, C extends Controller<M, V>> {
  public model: M;

  public view: V;

  public constructor(
    public controller: C,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
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
