import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';
import { DialogComponent } from './dialog.component';

@NgModule(Framing((framing) => framing.declareAndEntryComponent(DialogComponent)))
export class DialogComponentsModule {}
