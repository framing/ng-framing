import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      title: 'Prerequisities',
      subTitle: '',
      sections: [
        {
          id: 'prerequisities',
          title: 'Prerequisities',
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
export class PrerequisitiesModule {}
