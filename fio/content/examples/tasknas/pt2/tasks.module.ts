import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { TasksComponent } from './tasks.component';

@NgModule(Framing((framing) => framing
  .componentAndDeclare(TasksComponent)))
export class TasksModule {}
