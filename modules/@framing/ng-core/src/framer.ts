import { Injector, Type } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';

import { Controller } from './controller';
import { Frame } from './frame';
import { FramingNgModule } from './framing-ng-module';

import * as _ from 'lodash';

export abstract class Framer<Model, View> {
  private static _nextId: number = 1;

  // ========================================
  // public properties
  // ========================================

  /**
   * The name of this framer.
   */
  public abstract get framerName(): string;

  /**
   * Model accessor.
   */
  public get theModel(): Model { return this._model; }

  /**
   * View accessor.
   */
  public get theView(): View { return this._view; }

  /**
   * Controller accessor.
   */
  public get theController(): Type<Controller<Model, View>> { return this._controller; }

  /**
   * When true, framing will create a frame for this framer.
   */
  public get createFrame(): boolean { return true; }

  /**
   * When true, framing will setup the controller as a provider by its type.
   */
  public get provideControllerByType(): boolean { return true; }

  /**
   * When true, framing will add the model to the route data.
   */
  public get addModelToRouteData(): boolean { return false; }

  /**
   * When true, framing will add the view to the route data.
   */
  public get addViewToRouteData(): boolean { return false; }

  /**
   * When true, framing will add the frame to the route data.
   */
  public get addFrameToRouteData(): boolean { return false; }

  /**
   * The default model.
   */
  public get defaultModel(): Model { return undefined; }

  /**
   * The default view.
   */
  public get defaultView(): View { return undefined; }

  /**
   * The default controller.
   */
  public get defaultController(): Type<Controller<Model, View>> { return undefined; }

  /**
   * 'require': framing will attach the default route, creating it if it doesn't yet exist, if not route is attached to this framer (default behavior)
   * 'auto': framing will attach the default route if available if not route is attached to this framer
   * 'none': framing will not attach a route to this framer
   */
  public get routeRule(): ('require' | 'auto' | 'none') { return 'require'; }

  /**
   * A unique framer id for this framer.
   */
  public get framerId(): number { return this._framerId; }

  /**
   * A unique identifier string for this framer instance.
   */
  public get framerIdent(): string { return `${this.framerName}Framer-${this._framerId}`; }

  /**
   * True if framing() has been called.
   */
  public get framed(): boolean { return this._framed; }

  /**
   * The injector (available on and after framerOnResolveRoute)
   */
  public get injector(): Injector { return this._injector; }

  /**
   * The framer's route, if attached to a route, otherwise undefined
   * Valid ONLY during the runFraming() and framing() functions
   */
  public get route(): Route { return this._route; }

  // ========================================
  // private properties
  // ========================================

  /**
   * A unique framer id for this framer.
   */
  private _framerId: number;

  /**
   * True if framing() has been called.
   */
  private _framed: boolean = false;

  /**
   * The model.
   */
  private _model: Model;

  /**
   * The view.
   */
  private _view: View;

  /**
   * The controller.
   */
  private _controller: Type<Controller<Model, View>>;

  /**
   * The frame.
   */
  private _frame: Frame;

  /**
   * The framer's injector.
   */
  private _injector: Injector;

  /**
   * The framer's route, if attached to a route, otherwise undefined
   * Valid ONLY during the runFraming() and framing() functions
   */
  private _route: Route;

  /**
   * Reference to the framer's FramingNgModule.
   * Valid ONLY during the framing() function
   */
  private _framing: FramingNgModule;

  // ========================================
  // public static methods
  // ========================================

  /**
   * Helper function to build the URL of an ActivatedRouteSnapshot
   */
  public static buildUrlLink(route: ActivatedRouteSnapshot): string {
    if (!route) { return '/'; }
    let urls: UrlSegment[] = [];
    /* tslint:disable:no-param-reassign */
    for (; route.parent; route = route.parent) {
    /* tslint:enable:no-param-reassign */
      urls = urls.concat(route.url.reverse());
    }
    urls = urls.reverse();
    return '/' + urls.join('/');
  }

  // ========================================
  // public methods
  // ========================================

  /**
   * Model chaining function.
   */
  public model(model?: Model): Framer<Model, View> {
    _.merge(this._model, model);
    return this;
  }

  /**
   * View chaining function.
   */
  public view(view?: View): Framer<Model, View> {
    _.merge(this._view, view);
    return this;
  }

  /**
   * Controller chaining function.
   */
  public controller(controller?: Type<Controller<Model, View>>): Framer<Model, View> {
    if (controller) { this._controller = controller; }
    return this;
  }

  /**
   * The frame function.
   */
  public abstract frame(framing: FramingNgModule): void;

  /**
   * Framer on resolve route function called when framer's route is resolved.
   * Injector is set before during this call.
   * Not called if framer is not attached to a route.
   * To be overwritten if needed.
   */
  public framerOnResolveRoute(): void {}

  /**
   * Calls derived framing()
   */
  public runFraming(framing: FramingNgModule, routeParam?: Route): void {
    if (this._framed) {
      console.warn(`runFraming() called multiple times on framer '${this.framerIdent}'`);
      return;
    }

    this._framed = true; // mark this framer to framed

    if (this.routeRule === 'auto') {
      // set the framer's attached route (if any)
      this._route = routeParam;
    } else if (this.routeRule === 'require') {
      // set the framer's attached route to the supplied route or create one if it doesn not exist
      if (routeParam) {
        this._route = routeParam;
      } else {
        /* tslint:disable:no-param-reassign */
        this._route = routeParam = framing.getOrAddRoute();
        /* tslint:enable:no-param-reassign */
      }
    }

    this._framing = framing; // set _framing to framing ONLY for the duration of the controller() function
    this.frame(framing);
    this._framing = undefined;

    if (this.routeRule === 'auto') { // check this again incase the framer created a route
      this._route = routeParam;
    }

    const self = this;

    if (this._controller) {
      this.provideTypeByName(framing, this.framerName + 'Controller', this._controller);

      if (this.provideControllerByType) {
        let controllerInstance: Controller<Model, View>;

        framing
          .provide({
            provide: this.framerIdent + '-Controller',
            useClass: this._controller,
          })
          .provide({
            provide: this._controller,
            useFactory: (injector: Injector) => {
              if (controllerInstance) {
                return controllerInstance;
              }
              controllerInstance = injector.get(this.framerIdent + '-Controller');
              controllerInstance.initController(this._model, this._view, this._frame);
              return controllerInstance;
            },
            deps: [ Injector ],
          });

        /* tslint:disable:no-console */
        console.info(`Providing controller for framer ${this.framerIdent} by type`);
        /* tslint:enable:no-console */

        if (this.defaultController && this._controller !== this.defaultController) {
          framing.provide({
            provide: this.defaultController,
            useExisting: this._controller,
          });
          /* tslint:disable:no-console */
          console.info(`Providing controller overload for framer ${this.framerIdent} by default controller type`);
          /* tslint:enable:no-console */
        }
      }
    }

    // FUTURE: frame, model & view provided by name
    // this.provideValueByName(framing, this.framerName + 'Frame', this._frame);
    // this.provideValueByName(framing, this.framerName + 'Model', this._model);
    // this.provideValueByName(framing, this.framerName + 'View', this._view);

    // FUTURE: model & view provided by type
    // this.provideInstanceByType(framing, this._model);
    // this.provideInstanceByType(framing, this._view);

    if (this.route) {
      if (this.addFrameToRouteData) {
        this.addRouteData(framing, this.framerName + 'Frame', this._frame);
      }
      if (this.addModelToRouteData) {
        this.addRouteData(framing, this.framerName + 'Model', this._model);
      }
      if (this.addViewToRouteData) {
        this.addRouteData(framing, this.framerName + 'View', this._view);
      }

      if (this._frame) {
        class FrameResolver {
          constructor(
            private injector: Injector,
            private router: Router,
            private route: ActivatedRoute) {
            self._injector = this.injector;
          }

          resolve(routeSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot): any {
            self._frame.resolveStartSubject.next();

            const routeUrl = Framer.buildUrlLink(routeSnapshot);
            const sub = this.router.events.subscribe((event) => {
              if (event instanceof NavigationStart) {
                console.error('Unexpected NavigationStart');
              } else if (event instanceof NavigationEnd) {
                /* tslint:disable:no-console */
                console.info(`Route url for framer ${self.framerIdent} changed to ${routeUrl}`);
                /* tslint:enable:no-console */
                self._frame.routeSnapshot = self.findActivateRouteSnapshot(this.route);
                self._frame.routeUrl = routeUrl;
                self._frame.routeUrlSubject.next(routeUrl);
                self.framerOnResolveRoute();
                self._frame.resolveEndSubject.next();
              } else if (event instanceof NavigationError) {
                self._frame.resolveCancelSubject.next();
              } else if (event instanceof NavigationCancel) {
                self._frame.resolveCancelSubject.next();
              }
              sub.unsubscribe();
            });
            return self._frame;
          }
        }

        framing
          .resolve(this.framerIdent, FrameResolver, this.route)
          .provide({
            provide: FrameResolver,
            useFactory: (i: Injector, r: Router, a: ActivatedRoute) => new FrameResolver(i, r, a),
            deps: [ Injector, Router, ActivatedRoute ] });
      }
    }

    this._route = undefined; // clear the route so we're not holding any references to its properties
  }

  // ========================================
  // constructor
  // ========================================

  /**
   * Contructor.
   */
  public constructor(model?: Model, view?: View, controller?: Type<Controller<Model, View>>) {
    this.construct(model, view, controller);
  }

  /**
   * Protected construct function for derived construction help.
   */
  protected construct(model?: Model, view?: View, controller?: Type<Controller<Model, View>>): void {
    this._framerId = Framer._nextId++;
    if (this.createFrame) {
      this._frame = new Frame();
    }
    const defaultModel = this.defaultModel;
    this._model = defaultModel ? _.merge(defaultModel, model) : model;
    const defaultView = this.defaultView;
    this._view = defaultView ? _.merge(defaultView, view) : view;
    this._controller = controller || this.defaultController;
  }

  /**
   * Protected construct function for derived construction help.
   */
  private findActivateRouteSnapshot(route: ActivatedRoute): ActivatedRouteSnapshot {
    if (!route) {
      console.error('Failed to find activated route snapshot');
      return undefined;
    }
    if (route.snapshot && route.snapshot.data && route.snapshot.data.hasOwnProperty(this.framerIdent)) {
      return route.snapshot;
    }
    return this.findActivateRouteSnapshot(route.firstChild);
  }

  /**
   *
   */
  private provideTypeByName(framing: FramingNgModule, name: string, type: any): void {
    if (type) {
      framing.provide({ provide: name, useClass: type });
      /* tslint:disable:no-console */
      console.info(`Providing ${name} for framer ${this.framerIdent} by name`);
      /* tslint:enable:no-console */
    }
  }

  /**
   * FUTURE
   */
  // private provideInstanceByType(framing: FramingNgModule, instance: any): void {
  //   if (instance &&
  //     (instance as any).__proto__ &&
  //     (instance as any).__proto__.constructor &&
  //     (instance as any).__proto__.constructor.name !== 'Object') {
  //     framing.provide({ provide: (instance as any).__proto__.constructor, useValue: instance });
  //     /* tslint:disable:no-console */
  //     console.info(`Providing ${(instance as any).__proto__.constructor.name} for framer ${this.framerIdent} by type`);
  //     /* tslint:enable:no-console */
  //   }
  // }

  /**
   * FUTURE
   */
  // private provideValueByName(framing: FramingNgModule, name: string, value: any): void {
  //   if (value) {
  //     framing.provide({ provide: name, useValue: value });
  //     /* tslint:disable:no-console */
  //     console.info(`Providing ${name} for framer ${this.framerIdent} by name`);
  //     /* tslint:enable:no-console */
  //   }
  // }

  private addRouteData(framing: FramingNgModule, name: string, value: any): void {
    if (value) {
      const routeConfig = framing.getRoute(this.route);
      if (routeConfig.data && routeConfig.data[name]) {
        console.warn(`Failed to add ${name} route data for framer ${this.framerIdent}. Data item already exists.`);
      } else {
        framing.datum(name, value, this.route);
        /* tslint:disable:no-console */
        console.info(`Adding ${name} route data for framer ${this.framerIdent}`);
        /* tslint:enable:no-console */
      }
    }
  }
}
