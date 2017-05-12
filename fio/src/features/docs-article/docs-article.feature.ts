import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { DocsArticleController } from './docs-article.controller';
import { DocsArticleModel } from './docs-article.model';
import { DocsArticleView } from './docs-article.view';

import { DocsArticleViewModule } from './view/docs-article-view.module';
import { DocsArticleComponent } from './view/docs-article.component';

export class DocsArticleFeature extends Framer<DocsArticleModel, DocsArticleView> {
  public get framerName(): string { return 'DocsArticle'; }

  public get defaultModel(): DocsArticleModel {
    return {

    };
  }

  public get defaultView(): DocsArticleView {
    return {
      docsArticle: DocsArticleComponent,
    };
  }

  public get defaultController(): Type<DocsArticleController> {
    return DocsArticleController;
  }

  public frame(framing: FramingNgModule): void {
    framing
      .import(DocsArticleViewModule)
      .component(this.theView.docsArticle);
  }
}
