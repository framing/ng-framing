import { MaterialModule } from '@angular/material';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { DialogComponentsModule } from './dialog-components.module';
import { DialogComponent } from './dialog.component';
import { DialogModel } from './dialog.model';

export class DialogFramer extends Framer<DialogModel, void> {

  public get framerName(): string { return 'dialog'; }

  public get defaultModel(): DialogModel {
    return {
      dialogConfig: {},
    };
  }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    framing
      .route()
      .imports([
        DialogComponentsModule,
        MaterialModule,
      ])
      .component(DialogComponent);
  }
}
