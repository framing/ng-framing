import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { MaterialItemDataController as C } from './material-item-data.controller';
import { MaterialItemDataModel as M } from './material-item-data.model';
import { MaterialItemDataView as V } from './material-item-data.view';

@AngularComponent({})
export class MaterialItemDataComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
  }
}
