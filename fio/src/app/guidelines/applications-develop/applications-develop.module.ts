import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      title: 'Build a new app',
      subTitle: '',
      sections: [
        {
          id: 'concepts',
          title: 'Build a new app',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>So you\'re building a new app? Cool! Here is how to use Framing to get started with your new app:</p>\
                    <p><img src="https://cloud.githubusercontent.com/assets/21727664/25635794/3c9ef5e2-2f34-11e7-9140-3548038f277a.jpg"></p>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'clone',
          title: 'Clone the repo',
          rows: [
            {
              cells: [
                {
                  content: '\
                    git clone https://github.com/biznas/ng-app-starter my-app\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'blah',
          title: 'Are you using new or exisiting features?',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>If you are planning to <a href="/guidelines/features-develop">build new features, check out this guide</a>.</p>\
                    <p>If you are planning to <a href="/guidelines/features-usage">use exisiting features, check out this guide</a>.</p>\
                  ',
                },
              ],
            },
          ],
        },
      ],
    },

  })),
))
export class ApplicationsDevelopModule {}
