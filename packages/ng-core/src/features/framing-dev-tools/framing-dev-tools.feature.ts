import { Type } from '@angular/core';

import { FramingDevToolsController as C } from './framing-dev-tools.controller';
import { FramingDevToolsModel as M } from './framing-dev-tools.model';
import { FramingDevToolsView as V } from './framing-dev-tools.view';
import { Framer } from '../../framer';
import { FramingNgModule } from '../../framing-ng-module';

export class FramingDevToolsFeature extends Framer<M, V> {
  public get defaultModel(): M {
    return {};
  }

  public get defaultView(): V {
    return {};
  }

  public frame(framing: FramingNgModule): void {}

  public framerOnResolveRoute(): void {
    let framingDevToolsController: C;
    framingDevToolsController = this.injector.get(C);
  }

  // ========================================
  // internal framing methods (don't touch!)
  // ========================================

  public get framerName(): string { return 'FramingDevTools'; }

  public get defaultController(): Type<C> { return C; }
}
