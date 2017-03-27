import { Framer, FramingNgModule } from '@framing/ng-core';

import { RibbonModel } from './ribbon.model';
import { RibbonResolver } from './ribbon.resolver';

export class RibbonFramer extends Framer<RibbonModel, void> {

  public get framerName(): string { return 'Ribbon'; }

  public get defaultModel(): RibbonModel {
    return {
      hasSave: false,
      hasBack: false,
    };
  }

  /**
   * The frame function.
   */
  public frame(framing: FramingNgModule): void {
    if (this.theModel.contentComponent && this.theModel.contentComponentContainer) {
      framing.container(this.theModel.contentComponentContainer, this.theModel.contentComponent, this.route);
    }

    framing
      .resolves({ ribbon: RibbonResolver }, this.route)
      .provide(RibbonResolver.provider(this.theModel));
  }
}
