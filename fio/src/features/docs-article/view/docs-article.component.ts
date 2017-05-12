import { Component } from '@angular/core';

import { DocsArticleController } from '../docs-article.controller';
import { DocsRootController } from '../../docs-root/docs-root.controller';

@Component({
  selector: 'docs-article',
  templateUrl: './docs-article.component.html',
})
export class DocsArticleComponent {
  constructor(
    public docsArticleController: DocsArticleController,
    public docsRootController: DocsRootController,
  ) {}
}
