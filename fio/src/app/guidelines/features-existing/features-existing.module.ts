import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'features-existing',
      title: 'Existing Features',
      subTitle: '',
      sections: [
        {
          id: 'anatomy-of-a-feature',
          title: 'List of available features',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <ul>\
                      <li><a href="/features/material/app">Material App</a></li>\
                    </ul>',
                },
              ],
            },
          ],
        },
      ],
    },

  })),
))
export class FeaturesExistingModule {}
