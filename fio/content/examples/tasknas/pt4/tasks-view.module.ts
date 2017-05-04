import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Framing } from '@framing/ng-core';

import { TaskFormComponent } from './task-form.component';

@NgModule(Framing((framing) => framing
 .imports([
   FormsModule,
   MaterialModule,
 ])
 .declarationsAndEntryComponents([
   TaskFormComponent,
 ])))
export class TasksViewModule {}
