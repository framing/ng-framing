import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { SecurityGuardService } from './security-guard.service';

@NgModule(Framing((framing) => framing.provider(SecurityGuardService)))
export class SecurityGuardModule {}
