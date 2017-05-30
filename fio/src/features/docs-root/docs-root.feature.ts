import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';
import { MaterialAppFeature } from '@framing/ng-material';

import { DocsRootController } from './docs-root.controller';
import { DocsRootModel } from './docs-root.model';
import { DocsRootView } from './docs-root.view';

export class DocsRootFeature extends Framer<DocsRootModel, DocsRootView> {
  public get framerName(): string { return 'DocsRoot'; }

  public get defaultModel(): DocsRootModel {
    return {

    };
  }

  public get defaultView(): DocsRootView {
    return {
    };
  }

  public get defaultController(): Type<DocsRootController> {
    return DocsRootController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .frame(new MaterialAppFeature(this.theModel.materialApp));
  }
}
