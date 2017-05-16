import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      title: 'Why Framing',
      subTitle: '',
      sections: [
        {
          id: 'why-framing',
          title: 'Why Framing',
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
export class WhyFramingModule {}
