import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'process',
      title: 'Process',
      subTitle: '',
      sections: [
        {
          id: 'process',
          title: 'Process',
          rows: [
            {
              cells: [
                {
                  flex: '33%',
                  content: 'TBD',
                },
                {
                  flex: '66%',
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
export class ProcessModule {}
