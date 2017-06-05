import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { MaterialDialogController as C } from './material-dialog.controller';
import { MaterialDialogModel as M } from './material-dialog.model';
import { MaterialDialogView as V } from './material-dialog.view';

@AngularComponent({})
export class MaterialDialogComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
