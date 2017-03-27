import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { RibbonService } from './ribbon.service';

@NgModule(Framing((framing) => framing.provider(RibbonService)))
export class RibbonModule {}
