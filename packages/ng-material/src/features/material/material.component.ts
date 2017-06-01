import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { MaterialController as C } from './material.controller';
import { MaterialModel as M } from './material.model';
import { MaterialView as V } from './material.view';

@AngularComponent({})
export class MaterialComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
