import { NgModule } from '@angular/core';
import { MdDialogModule } from '@angular/material';
import { Framing } from '@framing/ng-core';

import { DialogHostComponent } from './dialog-host/dialog-host.component';

@NgModule(Framing((framing) => framing
  .import(MdDialogModule)
  .declareAndEntryComponent(DialogHostComponent),
))
export class MaterialDialogViewModule {}
