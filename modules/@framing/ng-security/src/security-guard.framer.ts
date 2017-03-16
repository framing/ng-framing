import { Framer, FramingNgModule } from '@framing/ng-core';

import { SecurityGuardModel } from './security-guard.model';
import { SecurityGuardService } from './security-guard.service';

export class SecurityGuardFramer extends Framer<SecurityGuardModel, void> {

  public get framerName(): string { return 'securityGuard'; }

  public get defaultModel(): SecurityGuardModel {
    return {
      authorization: undefined,
      canActive: true,
      canLoad: false,
      canActivateChild: false,
    };
  }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    if (this.theModel.canActive) {
      this.route.canActivate = [ SecurityGuardService ];
    }

    if (this.theModel.canActivateChild) {
      this.route.canActivateChild = [ SecurityGuardService ];
    }

    if (this.theModel.canLoad) {
      this.route.canLoad = [ SecurityGuardService ];
    }
  }
}
