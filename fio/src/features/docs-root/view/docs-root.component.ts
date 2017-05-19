import { Component, ViewEncapsulation } from '@angular/core';

import { DocsRootController } from '../docs-root.controller';

@Component({
  selector: 'docs-root',
  templateUrl: './docs-root.component.html',
  styleUrls: [ './docs-root.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class DocsRootComponent {
  constructor(
    public docsRootController: DocsRootController,
  ) {}
}
