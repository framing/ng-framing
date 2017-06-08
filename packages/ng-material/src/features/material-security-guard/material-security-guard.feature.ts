import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { MaterialSecurityGuardController as C } from './material-security-guard.controller';
import { MaterialSecurityGuardModel as M } from './material-security-guard.model';

import { MaterialSecurityGuardService } from './shared/material-security-guard.service';
import { MaterialSecurityGuardSharedModule } from './shared/shared.module';

export class MaterialSecurityGuardFeature extends Framer<M, void> {
  public get defaultModel(): M {
    return {
    };
  }

  public frame(framing: FramingNgModule): void {
    this.route.canActivate = [ MaterialSecurityGuardService ];

    framing
      .import(MaterialSecurityGuardSharedModule);
  }

  // ========================================
  // internal framing methods (don't touch!)
  // ========================================

  public get framerName(): string { return 'MaterialSecurityGuard'; }

  public get defaultController(): Type<C> { return C; }
}
