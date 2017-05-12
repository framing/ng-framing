import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { DocsRootModel } from './docs-root.model';
import { DocsRootView } from './docs-root.view';

@Injectable()
export class DocsRootController extends Controller<DocsRootModel, DocsRootView> {}
