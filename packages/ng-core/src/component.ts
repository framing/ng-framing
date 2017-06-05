import { ChangeDetectorRef, Injector, OnDestroy, OnInit } from '@angular/core';
import { AnonymousSubscription } from 'rxjs/Subscription';

import { Controller } from './controller';

export class Component<M, V, C extends Controller<M, V>> implements OnDestroy, OnInit {

  public model: M;

  public view: V;

  public controller: C;

  private changeDetectorRef: ChangeDetectorRef;

  private subscriptions: AnonymousSubscription[];

  public constructor(
    controller: C,
    injector: Injector,
  ) {
    this.controller = controller;
    this.changeDetectorRef = injector.get(ChangeDetectorRef);

    this.subscriptions = [];
    this.subscriptions.push(
      controller.model$.subscribe((model) => this.updateModel(model)),
      controller.view$.subscribe((view) => this.updateView(view)),
      controller.markForCheck$.subscribe(() => this.changeDetectorRef.markForCheck()),
    );
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
    this.subscriptions = null;

    this.changeDetectorRef = null;
    this.controller = null;

    this.model = null;
    this.view = null;
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
