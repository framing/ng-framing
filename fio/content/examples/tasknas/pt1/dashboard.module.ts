import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DashboardComponent } from './dashboard.component';

@NgModule(Framing((framing) => framing
  .componentAndDeclare(DashboardComponent),
))
export class DashboardModule {}
