import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { MaterialSecurityController as C } from './material-security.controller';
import { MaterialSecurityModel as M } from './material-security.model';
import { MaterialSecurityView as V } from './material-security.view';

@AngularComponent({})
export class MaterialSecurityComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
