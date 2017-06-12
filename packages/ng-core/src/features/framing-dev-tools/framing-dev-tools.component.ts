import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '../../component';

import { FramingDevToolsController as C } from './framing-dev-tools.controller';
import { FramingDevToolsModel as M } from './framing-dev-tools.model';
import { FramingDevToolsView as V } from './framing-dev-tools.view';

@AngularComponent({})
export class FramingDevToolsComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
