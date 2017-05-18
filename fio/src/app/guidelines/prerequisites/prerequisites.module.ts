import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'prerequisites',
      title: 'Prerequisites',
      subTitle: '',
      sections: [
        {
          id: 'prerequisites',
          title: 'Prerequisites',
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
export class PrerequisitesModule {}
