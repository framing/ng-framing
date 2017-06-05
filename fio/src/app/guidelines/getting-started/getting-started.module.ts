import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'getting-started',
      title: 'Getting Started',
      subTitle: '',
      sections: [
        {
          id: 'first-step',
          title: 'First Step',
          rows: [
            {
              cells: [
                {
                  content: `
                    <p>Welcome to the Framing project. To get started, install the Framing CLI tool named <b>biz. </p>
                  `,
                },
                {
                  content: `<p><b>Terminal command</b></p>`,
                  code: {
                    content: 'npm i -g biz',
                    language: 'bash',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'next-steps',
          title: 'Next Steps',
          rows: [
            {
              cells: [
                {
                  content: `
                    <p>Next, there are primarily 4 things you would do with Framing: </p>
                    <ul>
                      <li><a href="/tasknas">build our example app</a></li>
                      <li><a href="/guidelines/applications-develop">build a new app</a></li>
                      <li><a href="/guidelines/applications-refactor">refactor an exisiting app</a></li>
                      <li><a href="/guidelines/features-develop">build a new feature</a></li>
                    </ul>
                    <p>Please click one of the links above to get started.</p>
                  `,
                },
              ],
            },
          ],
        },
      ],
    },

  })),
))
export class GettingStartedModule {}
