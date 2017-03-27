import { Type } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { DialogComponentsModule } from './dialog-components.module';
import { DialogComponent } from './dialog.component';
import { DialogController } from './dialog.controller';
import { DialogModel } from './dialog.model';

export class DialogFramer extends Framer<DialogModel, void> {

  public get framerName(): string { return 'Dialog'; }

  public get defaultModel(): DialogModel {
    return {
      dialogConfig: {},
    };
  }

  public get defaultController(): Type<DialogController> { return DialogController; }

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
