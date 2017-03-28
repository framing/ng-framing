import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { BizNavbarBgBlurScrollDirective } from 'app/shared/biz-background-blur-scroll.directive';
import { LandingComponent } from './landing.component';

@NgModule(Framing((framing) => framing
  .declarations([
    BizNavbarBgBlurScrollDirective,
  ])
  .componentAndDeclare(LandingComponent),
))
export class LandingModule {}
