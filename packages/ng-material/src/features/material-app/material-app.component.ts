import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { MaterialAppController as C } from './material-app.controller';
import { MaterialAppModel as M } from './material-app.model';
import { MaterialAppView as V } from './material-app.view';

@AngularComponent({})
export abstract class MaterialAppComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
