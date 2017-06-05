import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MaterialDialogController as C } from './material-dialog.controller';
import { MaterialDialogModel as M } from './material-dialog.model';
import { MaterialDialogView as V } from './material-dialog.view';

import { DialogHostComponent } from './view/dialog-host/dialog-host.component';
import { MaterialDialogViewModule } from './view/view.module';

export class MaterialDialogFeature extends Framer<M, V> {

  public get framerName(): string { return 'Dialog'; }

  public get defaultModel(): M {
    return {
      dialogConfig: {},
    };
  }

  public get defaultView(): V {
    return {
      dialogComponent: null,
      dialogHost: DialogHostComponent,
    };
  }

  public get defaultController(): Type<C> { return C; }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    framing
      .route()
      .imports([
        MaterialDialogViewModule,
      ])
      .component(this.theView.dialogHost);
  }
}
