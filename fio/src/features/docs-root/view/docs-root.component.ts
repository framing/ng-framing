import { Component } from '@angular/core';

import { DocsRootController } from '../docs-root.controller';

@Component({
  selector: 'docs-root',
  templateUrl: './docs-root.component.html',
})
export class DocsRootComponent {
  constructor(
    public docsRootController: DocsRootController,
  ) {}
}
