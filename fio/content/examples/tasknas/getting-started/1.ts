import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { AppComponent } from './app.component';

@NgModule(Framing((framing) => framing
  .root()
  .componentAndDeclare(AppComponent)))
export class AppModule {}
