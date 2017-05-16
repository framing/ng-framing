import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      title: 'Refactor an app',
      subTitle: '',
      sections: [
        {
          id: 'concepts',
          title: 'Refactor an app',
          rows: [
            {
              cells: [
                {
                  content: 'TBD',
                },
              ],
            },
          ],
        },
      ],
    },

  })),
))
export class ApplicationsRefactorModule {}
