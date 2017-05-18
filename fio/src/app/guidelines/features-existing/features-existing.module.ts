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
        {
          id: 'what-next',
          title: 'What Next?',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>If you still have questions, please <a href="mailto:ryan@biznas.io">email Biznas CEO Ryan Campbell</a> or \
                      <a href="http://framing.herokuapp.com/">join the Framing slack team</a>.\
                    </p>\
                    <p>Please let us know in the comments below what features you would find useful.</p>\
                    <p>Try out the <a href="http://framing.io/tasknas">Tasknas tutorial</a>.</p>\
                    <p>Review the <a href="http://github.com/framing/ng-framing">@framing/ng-framing git repo</a>.</p>\
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
export class FeaturesExistingModule {}
