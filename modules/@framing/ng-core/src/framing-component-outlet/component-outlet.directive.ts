import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Injector,
  Input,
  NgModuleFactory,
  NgModuleRef,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';

import { FramingComponentOutlet } from './component-outlet';

@Directive({
  selector: '[framingComponentOutlet]',
})
export class FramingComponentOutletDirective implements OnChanges, OnDestroy, FramingComponentOutlet {
  @Input() framingComponentOutlet: Type<any>;
  @Input() injector: Injector;
  @Input() content: any[][];
  @Input() ngModuleFactory: NgModuleFactory<any>;

  @Output() onComponent: EventEmitter<ComponentRef<any>> = new EventEmitter<ComponentRef<any>>();

  private _componentRef: ComponentRef<any>;
  private _moduleRef: NgModuleRef<any>;

  constructor(
    private _view: ViewContainerRef,
  ) {}

  isActivated(): boolean { return !!this._componentRef; }

  ngOnChanges(changes: SimpleChanges): void {
    let activate = false;
    if ((changes as any).ngModuleFactory) {
      if (this._moduleRef) { this._moduleRef.destroy(); }
      if (this.ngModuleFactory) {
        const injector = this.injector || this._view.parentInjector;
        this._moduleRef = this.ngModuleFactory.create(injector);
      } else {
        this._moduleRef = undefined;
      }
      activate = true;
    }

    if ((changes as any).framingComponentOutlet.currentValue !== (changes as any).framingComponentOutlet.previousValue) {
      activate = true;
    }

    if (activate) {
      this.activate(this.framingComponentOutlet);
    }
  }

  ngOnDestroy(): void {
    this.deactivate();
    if (this._moduleRef) { this._moduleRef.destroy(); }
  }

  private activate(component: Type<any>): void {
    this.deactivate();

    if (!component) {
      return;
    }

    try {
      const injector = this.injector || this._view.parentInjector;
      const factory = injector.get(ComponentFactoryResolver).resolveComponentFactory(component);
      this._componentRef = this._view.createComponent(factory, this._view.length, injector, this.content);
      this.onComponent.emit(this._componentRef);
      try {
        this._componentRef.changeDetectorRef.detectChanges();
      } catch (e) {
        console.error(`detectChanges failed on activated component in FramingComponentOutlet`, { e, component });
        return;
      }
    } catch (e) {
      console.error(`Failed to activate component in FramingComponentOutlet`, { e, component });
      return;
    }
  }

  private deactivate(): void {
    if (this._componentRef) {
      this._view.remove(this._view.indexOf(this._componentRef.hostView));
      this._componentRef.destroy();
    }
    this._view.clear();
    this._componentRef = undefined;
  }
}
