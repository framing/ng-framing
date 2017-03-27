import * as _ from 'lodash';

import { CommonModule } from '@angular/common';
import { Injector, ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { FramingContainerOutletContent } from './framing-container-outlet/container-outlet-content';
import { FramingContainerOutletResolver } from './framing-container-outlet/container-outlet.resolver';

import { Framer } from './framer';
import { FramingComponentsModule, FramingEmptyParentComponent, FramingRootComponent } from './framing-components/index';
import { FramingRootComponentConfig } from './framing-root-component-config';
import { FramingRouteConfig } from './framing-route-config';

/**
 *
 */
export class FramingNgModule {

  private static _nextId: number = 1;

  // ========================================
  // private properties
  // ========================================

  private _ngModule: NgModule = {
    imports: [],
    declarations: [],
    exports: [],
    providers: [],
    bootstrap: [],
    entryComponents: [],
  };

  private _root: boolean = false;

  private _rootComponent: Type<any>;

  private _rootComponentConfig: FramingRootComponentConfig;

  private _routes: Route[] = [];

  private _routeConfig: FramingRouteConfig;

  static get defaultPathMatch(): string { return 'prefix'; }

  // ========================================
  // public methods
  // ========================================

  public ngModule(ngModule?: NgModule): FramingNgModule {
    if (ngModule) {
      _.defaults(this._ngModule, ngModule);
      _.each(_.filter(_.keys(ngModule), (key: string) => { return _.isArray((ngModule as any)[key]); }), (key) => {
        (this._ngModule as any)[key] = _.uniqWith((this._ngModule as any)[key].concat(_.reject((ngModule as any)[key], _.isNil)), _.isEqual);
      });
    }

    return this;
  }

  /**
   * Add a child route. Adds to '' route by default
   */
  public child(child: Route): FramingNgModule;
  public child(child: Route, parent: Route): FramingNgModule;
  public child(child: Route, parent: Route[]): FramingNgModule;
  public child(child: Route, parent?: Route | Route[]): FramingNgModule {
    let parentRoute = this.getOrAddRouteOverload(parent);

    if (!parentRoute.children) { parentRoute.children = []; }

    if (!parentRoute.component) {
      parentRoute.component = FramingEmptyParentComponent;
    }

    this.getOrAddRoute(child, parentRoute.children);

    return this;
  }

  /**
   * Adds to imports
   * Adds to route
   */
  public children(children: Route[]): FramingNgModule;
  public children(children: Route[], parent: Route): FramingNgModule;
  public children(children: Route[], parent: Route[]): FramingNgModule;
  public children(children: Route[], parent?: Route | Route[]): FramingNgModule {
    _.each(children, (child) => {
      this.child(child, parent);
    });

    return this;
  }

  /**
   * Adds as component on route
   */
  public component(component: Type<any>): FramingNgModule;
  public component(component: Type<any>, route: Route): FramingNgModule;
  public component(component: Type<any>, route: Route[]): FramingNgModule;
  public component(component: Type<any>, route?: Route | Route[]): FramingNgModule {
    if (component) {
      let routeConfig = this.getOrAddRouteOverload(route);
      routeConfig.component = component;
    }

    return this;
  }

  /**
   * Adds as component on route
   * Adds component to declarations
   */
  public componentAndDeclare(component: Type<any>): FramingNgModule;
  public componentAndDeclare(component: Type<any>, route: Route): FramingNgModule;
  public componentAndDeclare(component: Type<any>, route: Route[]): FramingNgModule;
  public componentAndDeclare(component: Type<any>, route?: Route | Route[]): FramingNgModule {
    return this.componentAndDeclaration(component, route);
  }

  /**
   * Adds as component on route
   * Adds component to declarations
   */
  public componentAndDeclaration(component: Type<any>): FramingNgModule;
  public componentAndDeclaration(component: Type<any>, route: Route): FramingNgModule;
  public componentAndDeclaration(component: Type<any>, route: Route[]): FramingNgModule;
  public componentAndDeclaration(component: Type<any>, route?: Route | Route[]): FramingNgModule {
    this.component(component, route);
    if (component) {
      this.declare(component);
    }

    return this;
  }

  /**
   * Adds containers to route data
   * Adds container components to exports and declarations
   */
  public container(container: string, components: Type<any> | Type<any>[]): FramingNgModule;
  public container(container: string, components: Type<any> | Type<any>[], route: Route): FramingNgModule;
  public container(container: string, components: Type<any> | Type<any>[], route: Route[]): FramingNgModule;
  public container(container: string, components: Type<any> | Type<any>[], route?: Route | Route[]): FramingNgModule {
    let containers: { [key: string]: Type<any> | Type<any>[]} = {};
    containers[container] = components;
    this.containers(containers, route);

    return this;
  }

  /**
   * Adds containers to route data
   * Adds container components to exports and declarations
   */
  public containers(containers: { [key: string]: Type<any> | Type<any>[] }): FramingNgModule;
  public containers(containers: { [key: string]: Type<any> | Type<any>[] }, route: Route): FramingNgModule;
  public containers(containers: { [key: string]: Type<any> | Type<any>[] }, route: Route[]): FramingNgModule;
  public containers(containers: { [key: string]: Type<any> | Type<any>[] }, route?: Route | Route[]): FramingNgModule {
    for (let key in containers) {
      if (containers.hasOwnProperty(key)) {
        if (_.isNil(containers[key])) {
          delete containers[key];
        }
      }
    }

    const routeConfig = this.getOrAddRoute(route);
    if (!routeConfig.resolve) {
      routeConfig.resolve = {};
    }
    if (!routeConfig.resolve.containers) {
      routeConfig.resolve.containers = [];
    }

    for (let key in containers) {
      if (containers.hasOwnProperty(key)) {
        const components: Type<any> | Type<any>[] = containers[key];
        if (_.isArray(components)) {
          for (const component of components) {
            routeConfig.resolve.containers.push({ container: key, component });
          }
        } else {
          routeConfig.resolve.containers.push({ container: key, component: components });
        }
      }
    }

    return this;
  }

  /**
   * Method for appending data to route
   */
  public datum(key: string, datum: any): FramingNgModule;
  public datum(key: string, datum: any, route: Route): FramingNgModule;
  public datum(key: string, datum: any, route: Route[]): FramingNgModule;
  public datum(key: string, datum: any, route?: Route | Route[]): FramingNgModule {
    let data: { [key: string]: Type<any> } = {};
    data[key] = datum;
    this.data(data, route);

    return this;
  }

  /**
   * Methods for appending data to route
   */
  public data(data: { [key: string]: any }): FramingNgModule;
  public data(data: { [key: string]: any }, route: Route): FramingNgModule;
  public data(data: { [key: string]: any }, route: Route[]): FramingNgModule;
  public data(data: { [key: string]: any }, route?: Route | Route[]): FramingNgModule {
    let routeConfig = this.getOrAddRouteOverload(route);

    if (!routeConfig.data) {
      routeConfig.data = {};
    }
    _.merge(routeConfig.data, data);

    return this;
  }

  /**
   * Method for appending data resolve to route
   */
  public resolve(key: string, resolve: string | Type<any>): FramingNgModule;
  public resolve(key: string, resolve: string | Type<any>, route: Route): FramingNgModule;
  public resolve(key: string, resolve: string | Type<any>, route: Route[]): FramingNgModule;
  public resolve(key: string, resolve: string | Type<any>, route?: Route | Route[]): FramingNgModule {
    let resolves: { [key: string]: string | Type<any> } = {};
    resolves[key] = resolve;
    this.resolves(resolves, route);

    return this;
  }

  /**
   * Method for appending data resolve to route
   */
  public resolves(resolves: { [key: string]: string | Type<any> }): FramingNgModule;
  public resolves(resolves: { [key: string]: string | Type<any> }, route: Route): FramingNgModule;
  public resolves(resolves: { [key: string]: string | Type<any> }, route: Route[]): FramingNgModule;
  public resolves(resolves: { [key: string]: string | Type<any> }, route?: Route | Route[]): FramingNgModule {
    let routeConfig = this.getOrAddRouteOverload(route);

    if (!routeConfig.resolve) {
      routeConfig.resolve = {};
    }
    _.merge(routeConfig.resolve, resolves);

    return this;
  }

  public declare(declaration: Type<any> | Type<any>[]): FramingNgModule {
    return this.declaration(declaration);
  }

  public declaration(declaration: Type<any> | Type<any>[]): FramingNgModule {
    return this.declarations(_.isArray(declaration) ? declaration : [ declaration ]);
  }

  public declarations(declarations: Type<any>[]): FramingNgModule {
    const flattened = [].concat.apply([], declarations);
    this._ngModule.declarations = _.uniqWith(this._ngModule.declarations.concat(_.reject(flattened, _.isNil)), _.isEqual);

    return this;
  }

  public declareAndExport(declaration: Type<any> | Type<any>[]): FramingNgModule {
    return this.declarationAndExport(declaration);
  }

  public declarationAndExport(declaration: Type<any> | Type<any>[]): FramingNgModule {
    return this.declarationsAndExports(_.isArray(declaration) ? declaration : [ declaration ]);
  }

  public declarationsAndExports(declarations: Type<any>[]): FramingNgModule {
    this.declarations(declarations);
    this.exports(declarations);

    return this;
  }

  public declareAndEntryComponent(declaration: Type<any> | Type<any>[]): FramingNgModule {
    return this.declarationAndEntryComponent(declaration);
  }

  public declarationAndEntryComponent(declaration: Type<any> | Type<any>[]): FramingNgModule {
    return this.declarationsAndEntryComponents(_.isArray(declaration) ? declaration : [ declaration ]);
  }

  public declarationsAndEntryComponents(declarations: Type<any>[]): FramingNgModule {
    this.declarations(declarations);
    this.entryComponents(declarations);

    return this;
  }

  public entryComponent(entryComponent: Type<any> | Type<any>[]): FramingNgModule {
    return this.entryComponents(_.isArray(entryComponent) ? entryComponent : [ entryComponent ]);
  }

  public entryComponents(entryComponents: Type<any>[]): FramingNgModule {
    const flattened = [].concat.apply([], entryComponents);
    this._ngModule.entryComponents = _.uniqWith(this._ngModule.entryComponents.concat(_.reject(flattened, _.isNil)), _.isEqual);

    return this;
  }

  public export(e: Type<any> | Type<any>[]): FramingNgModule {
    return this.exports(_.isArray(e) ? e : [ e ]);
  }

  public exports(exports: Type<any>[]): FramingNgModule {
    const flattened = [].concat.apply([], exports);
    this._ngModule.exports = _.uniqWith(this._ngModule.exports.concat(_.reject(flattened, _.isNil)), _.isEqual);

    return this;
  }

  public import(i: Type<any> | Type<any>[] | ModuleWithProviders | ModuleWithProviders): FramingNgModule {
    return this.imports(_.isArray(i) ? i : [ i ]);
  }

  public imports(imports: (Type<any> | ModuleWithProviders)[]): FramingNgModule {
    const flattened = [].concat.apply([], imports);
    this._ngModule.imports = _.uniqWith(this._ngModule.imports.concat(_.reject(flattened, _.isNil)), _.isEqual);

    return this;
  }

  public importAndExport(m: Type<any> | Type<any>[]): FramingNgModule {
    return this.importsAndExports(_.isArray(m) ? m : [ m ]);
  }

  public importsAndExports(modules: Type<any>[]): FramingNgModule {
    this.imports(modules);
    this.exports(modules);

    return this;
  }

  public provide(provider: Provider | Provider[] | Type<any> | Type<any>[]): FramingNgModule {
    return this.provider(provider);
  }

  public provider(provider: Provider | Provider[] | Type<any> | Type<any>[]): FramingNgModule {
    return this.providers(_.isArray(provider) ? provider : [ provider ]);
  }

  public providers(providers: Provider[] | Type<any>[]): FramingNgModule {
    const flattened = [].concat.apply([], providers);
    this._ngModule.providers = _.uniqWith(this._ngModule.providers.concat(_.reject(flattened, _.isNil)), _.isEqual);

    return this;
  }

  /**
   * Adds component to bootstrap
   * Defaults route to path '', pathMatch: 'full'
   */
  public root(rootComponent?: Type<any>, config?: FramingRootComponentConfig): FramingNgModule {
    this._root = true;
    this._rootComponentConfig = config || {};
    _.defaults(this._rootComponentConfig, { hybrid: false });
    this._rootComponent = rootComponent || FramingRootComponent;

    return this;
  }

  /**
   * Creates Routes array with single route
   * Adds RouterModule.forRoot(routes) or RouterModule.forChild(routes) to imports
   * Adds all resolve services as providers
   */
  public route(route?: Route, config?: FramingRouteConfig): FramingNgModule {
    this.getOrAddRoute(route);

    if (this._routeConfig) {
      if (config) {
        _.merge(this._routeConfig, config);
      }
    } else {
      this._routeConfig = config || {};
      _.defaults(this._routeConfig, { forRoot: false });
    }

    return this;
  }

  public routes(routes: Route[], config?: FramingRouteConfig): FramingNgModule {
    _.each(routes, (route) => {
      this.route(route, config);
    });

    return this;
  }

  public frameRoute(route: Route, ...framers: Framer<any, any>[]): FramingNgModule;
  public frameRoute(route: Route[], ...framers: Framer<any, any>[]): FramingNgModule;
  public frameRoute(route: Route | Route[], ...framers: Framer<any, any>[]): FramingNgModule {
    this.buildFramers(framers, this.getOrAddRouteOverload(route));

    return this;
  }

  /**
   * Returns the route if it exists.
   */
  public getRoute(route: Route = {}, array?: Route[]): Route {
    /* tslint:disable:no-param-reassign */
    if (!array) { array = this._routes; }
    /* tslint:enable:no-param-reassign */

    _.defaults(route, { path: '', pathMatch: FramingNgModule.defaultPathMatch });

    return _.find(array, (m) => { return m.path === route.path && m.pathMatch === route.pathMatch; });
  }

  /**
   * Returns the route. Creates it if it does not exist.
   */
  public getOrAddRoute(route: Route = {}, array?: Route[]): Route {
    /* tslint:disable:no-param-reassign */
    if (!array) { array = this._routes; }
    /* tslint:enable:no-param-reassign */

    _.defaults(route, { path: '', pathMatch: FramingNgModule.defaultPathMatch });

    let r = _.find(array, (m) => { return m.path === route.path && m.pathMatch === route.pathMatch; });

    if (r) {
      _.merge(r, route);
      return r;
    } else {
      array.push(route);

      return route;
    }
  }

  /**
   * Run framers.
   */
  public frame(...framers: Framer<any, any>[]): FramingNgModule {
    this.buildFramers(framers);

    return this;
  }

  /**
   * Builds @NgModule() config in the following order:
   * - Route framers
   * - Root
   * - Route
   */
  public build(): NgModule {
    this.buildRouteFramers(this._routes);
    this.buildRoot();
    this.buildContainers(this._routes);
    this.buildRoute();
    this.inspectModule();

    return this._ngModule;
  }

  // ========================================
  // private methods
  // ========================================

  private inspectModule(): void {
    this._routes.forEach((r) => this.inspectRoute(r));
  }

  private inspectRoute(route: Route): void {
    if (route.component === undefined && route.redirectTo === undefined && _.isEmpty(route.children) && route.loadChildren === undefined) {
      console.error(
        `Looks like you have a badly configured route in a framed module.
        One of the following must be provided: component, redirectTo, children or loadChildren`,
        { route, self: this });
    }

    if (route.children) {
      route.children.forEach((c) => this.inspectRoute(c));
    }
  }

  private buildRoot(): void {
    let m: NgModule = this._ngModule;

    if (this._root) {
      m.imports = _.uniqWith(m.imports.concat([
        BrowserModule,
        FormsModule,
      ]), _.isEqual);

      m.declarations = _.uniqWith(m.declarations.concat([ this._rootComponent ]), _.isEqual);
      if (this._rootComponentConfig.hybrid) {
        m.entryComponents = _.uniqWith(m.entryComponents.concat([ this._rootComponent ]), _.isEqual);
      } else {
        m.bootstrap = _.uniqWith(m.bootstrap.concat([ this._rootComponent ]), _.isEqual);
      }
    } else {
      m.imports = _.uniqWith(m.imports.concat([
        CommonModule,
      ]), _.isEqual);
    }

    m.imports = _.uniqWith(m.imports.concat([ FramingComponentsModule ]), _.isEqual);
  }

  private buildFramers(framers: Framer<any, any>[], route?: Route): void {
    for (let framer of framers) {
      this.buildFramer(framer, route);
    }
  }

  private buildFramer(framer: Framer<any, any>, route: Route): void {
    if (!framer.framed) {
      framer.runFraming(this, route || this.getRoute());
    }
  }

  /**
   * Builds framers that were manually added to route data.
   */
  private buildRouteFramers(routes: Route[]): void {
    for (let route of routes) {
      if (route.data) {
        for (let key in route.data) {
          if (route.data.hasOwnProperty(key)) { // tslint: forin
            let prop = route.data[key];
            if (prop && prop._frame !== undefined) {
              // this is a framer attached to route data
              this.buildFramer(prop as Framer<any, any>, route);
            }
          }
        }
      }
      if (route.children) {
        this.buildRouteFramers(route.children);
      }
    }
  }

  private buildContainers(routes: Route[]): void {
    for (let route of routes) {
      if (route.resolve && route.resolve.containers) {
        const containers: FramingContainerOutletContent[] = route.resolve.containers;
        for (const container of containers) {
          const containerId = FramingNgModule._nextId++;
          container.id = '' + containerId;
        }
        const resolveId = FramingNgModule._nextId++;
        this.provide({
          provide: 'containerResolver' + resolveId,
          useFactory: (i: Injector) => new FramingContainerOutletResolver(containers, i),
          deps: [ Injector ],
        });
        route.resolve.containers = 'containerResolver' + resolveId;
      }
      if (route.children) {
        this.buildContainers(route.children);
      }
    }
  }

  private buildRoute(): void {
    if (this._routes.length > 0) {
      // re-order routes so that full routes are first
      let fullRoutes: Route[] = [];
      let prefixRoutes: Route[] = [];
      this._routes.forEach((route) => {
        if (route.pathMatch && route.pathMatch === 'full') {
          fullRoutes.push(route);
        } else if (!route.pathMatch || route.pathMatch === 'prefix') {
          prefixRoutes.push(route);
        } else {
          console.warn('Unknown pathMatch on route', route);
        }
        this._routes = [];
        this._routes = this._routes.concat(fullRoutes);
        this._routes = this._routes.concat(prefixRoutes);
      });

      const routing: ModuleWithProviders = this._root || (this._routeConfig && this._routeConfig.forRoot) ?
        RouterModule.forRoot(this._routes, this._routeConfig ? this._routeConfig.extraRootRouterOptions : undefined) :
        RouterModule.forChild(this._routes);

      this.imports([ routing ]);

      if (this._routeConfig && this._routeConfig.forRoot && !this._root) {
        this.exports([ RouterModule ]); // export RouterModule from AppRoutingModule
      }
    }
  }

  private getOrAddRouteOverload(route: Route | Route[]): Route {
    if (_.isArray(route)) {
      if (route.length) {
        let result: Route;

        /* tslint:disable:prefer-for-of */
        result = this.getOrAddRoute(route[0]);
        for (let i = 1; i < route.length; i++) {
          if (!result.children) { result.children = []; }
          result = this.getOrAddRoute(route[i], result.children);
        }
        /* tslint:enable:prefer-for-of */

        return result;
      } else {
        return this.getOrAddRoute();
      }
    } else {
      return this.getOrAddRoute(route);
    }
  }
}
