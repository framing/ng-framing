import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { MaterialSecurityGuardService } from './material-security-guard.service';

@NgModule(Framing((framing) => framing
  .provider(MaterialSecurityGuardService),
))
export class MaterialSecurityGuardSharedModule {}
