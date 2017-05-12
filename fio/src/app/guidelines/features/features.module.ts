import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      title: 'Features',
      subTitle: '',
      sections: [
        {
          id: 'anatomy-of-a-feature',
          title: 'Anatomy of a feature',
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
        {
          id: 'directory-structure',
          title: 'Directory structure',
          rows: [
            {
              cells: [
                {
                  content: '<p><b>src/features</b> TBD</p><p><b>src/features/example</b> TBD</p><p><b>src/features/example/view</b> TBD</p>',
                },
                {
                  content: '<img src="/imgs/guidelines/features/directory-structure.png">',
                },
              ],
            },
          ],
        },
        {
          id: 'model',
          title: 'Model',
          rows: [
            {
              cells: [
                {
                  content: '<p><b>src/features/example/example.model.ts</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
          ],
        },
        {
          id: 'controller',
          title: 'Controller',
          rows: [
            {
              cells: [
                {
                  content: '<p><b>src/features/example/example.controller.ts</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
          ],
        },
        {
          id: 'view-module-and-components',
          title: 'View module and components',
          rows: [
            {
              cells: [
                {
                  content: '<p><b>src/features/example/view/example-view.module.ts</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
            {
              cells: [
                {
                  content: '<p><b>src/features/example/view/example.component.ts</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
            {
              cells: [
                {
                  content: '<p><b>src/features/example/view/example.component.html</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
          ],
        },
        {
          id: 'view',
          title: 'View',
          rows: [
            {
              cells: [
                {
                  content: '<p><b>src/features/example/example.view.ts</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
          ],
        },
        {
          id: 'framing',
          title: 'Framing',
          rows: [
            {
              cells: [
                {
                  content: '<p><b>src/features/example/example.feature.ts</b> TBD</p>',
                },
                {
                  content: 'TBD',
                },
              ],
            },
          ],
        },
        {
          id: 'best-practices',
          title: 'Best practices',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <ul>\
                      <li>All business logic goes in feature controller class</li>\
                      <li>Only view logic specific to component goes in component class</li>\
                    </ul>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'fequently-asked-questions',
          title: 'Fequently asked questions',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <ul>\
                      <li>Do regular Angular components work with Framing?</li>\
                    </ul>\
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
export class FeaturesModule {}
