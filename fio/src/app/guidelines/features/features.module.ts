import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'features',
      title: 'Features overview',
      subTitle: '',
      sections: [
        {
          id: 'example-code',
          title: 'Example Code',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>The code referenced in this document is available at <a href="https://github.com/framing/ng-example" target="_blank">github.com/framing/ng-example</a>.</p>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'anatomy-of-a-feature',
          title: 'Anatomy of a feature',
          rows: [
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>A feature is made up of:</p>\
                    <ul>\
                      <li>Components</li>\
                      <li>Views</li>\
                      <li>Controllers</li>\
                      <li>Models</li>\
                      <li>Framing</li>\
                      <li>Routes</li>\
                      <li>Guards</li>\
                      <li>Resolves</li>\
                      <li>Services</li>\
                      <li>Modules</li>\
                    </ul>',
                },
                {
                  flex: '60%',
                  content: 'TBD (Graph of a feature)',
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
                  flex: '40%',
                  content: '\
                    <p><b>src/features</b><br>Root folder of all features in project.</p>\
                    <p><b>src/features/example</b><br>Root folder of individual feature.</p>\
                    <p><b>src/features/example/view</b><br>Folder containing all components used by feature.</p>\
                  ',
                },
                {
                  flex: '60%',
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
                  flex: '40%',
                  content: '\
                    <p>Model\'s are TypeScript interfaces with optional or required properties.</p>\
                    <p>Model\'s contain properties to configure the feature.</p>\
                    <p>Configuration properties allow developers using your feature to easily customize it\'s behavior</p>\
                    <p>Model\'s are also responsibile for containing the current runtime state of your feature.</p>\
                    <p>A default model object and feature configuration make up the initial runtime state of the feature.</p>\
                  ',
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/example.model.ts`,
                    content: `export interface ExampleModel {
  /**
   * Number of times 'Press Me' button has been clicked.
   * Default is 0
   */
  count?: number;

  /**
   * Amount to increase count each time 'Press Me' button is clicked.
   * Default is 1.
   */
  increment?: number;
}`,
                    language: 'typescript',
                  },
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
                  flex: '40%',
                  content: `
                    <p>Controllers are TypeScript classes with methods containing feature logic.</p>
                    <p>Controllers are injectable services and injected by the features components to handle all user interaction.</p>
                    <p>Unlike traditional Angular, all feature/business logic is in the injectable controller.</p>
                    <p>Controllers can be extended by the developer using your feature to override any feature logic.</p>
                    <p>Controllers are well documented so that it is clear to the developer which method to override.</p>
                  `,
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/example.controller.ts`,
                    content: `import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { ExampleModel as M } from './example.model';
import { ExampleView as V } from './example.view';

@Injectable()
export class ExampleController extends Controller<M, V>; {

  /**
   * Increases count property by the increment property.
   */
  public submit(): void {
    this.model.count += this.model.increment;
  }

}`,
                    language: 'typescript',
                  },
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
                  flex: '40%',
                  content: '\
                    <p>A feature\'s view is made up of components.</p>\
                    <p>Components are declared in a view module.</p>\
                    <p>The view module is shared between all modules that use the feature.</p>\
                  ',
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/view/view.module.ts`,
                    content: `import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleSubComponent } from './example-sub.component';
import { ExampleComponent } from './example.component';

@NgModule(Framing((framing) => framing
  .declarationsAndEntryComponents([
    ExampleComponent,
    ExampleSubComponent,
  ]),
))
export class ExampleViewModule {}`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>Framing components are just regular Angular components.</p>\
                    <p>All components for a feature inject the feature\'s controller.</p>\
                    <p>A component contains not feature/business logic. Only view logic if needed</p>\
                    <p>A developer using a feature can override any of its components</p>\
                  ',
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/view/example.component.ts`,
                    content: `import { Injectable } from '@angular/core';
import { Action, Controller } from '@framing/ng-core';

import { ExampleModel as M } from './example.model';
import { ExampleView as V } from './example.view';

@Injectable()
export class ExampleController extends Controller<M, V> {
  @Action() public submit(): void {
    this.model.count += this.model.increment;
  }
}
`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>Framing component templates are just regular Angular templates.</p>\
                    <p>Templates bind to the feature\'s model.</p>\
                    <p>Templates event listeners call methods on the feature\'s controller.</p>\
                  ',
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/view/example.component.html`,
                    content: `<h1>Example Component</h1>

<ng-container
  [ngComponentOutlet]="view.exampleSubComponent">
</ng-container>

<div>
  <button
    (click)="controller.submit()">
    Press Me
  </button>
</div>

<h3>Count {{ model.count }}</h3>
`,
                    language: 'markup',
                  },
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
                  flex: '40%',
                  content: '\
                    <p>View\'s are TypeScript interfaces with optional or required properties.</p>\
                    <p>View\'s contain properties for each component used by the feature.</p>\
                    <p>Configuration properties allow developers using your feature to easily override components with their own.</p>\
                  ',
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/example.view.ts`,
                    content: `import { Type } from '@angular/core';

export interface ExampleView {
  exampleComponent?: Type<any>;

  exampleSubComponent?: Type<any>;
}`,
                    language: 'typescript',
                  },
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
                  flex: '40%',
                  content: '\
                    <p>Framing contain\'s the @NgModule and router configuration for the feature.</p>\
                  ',
                },
                {
                  flex: '60%',
                  code: {
                    filePath: `src/features/example/example.feature.ts`,
                    content: `import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { ExampleController as C } from './example.controller';
import { ExampleModel as M } from './example.model';
import { ExampleView as V } from './example.view';

import { ExampleSubComponent } from './view/example-sub.component';
import { ExampleViewModule } from './view/example-view.module';
import { ExampleComponent } from './view/example.component';

export class ExampleFeature extends Framer<ExampleModel, ExampleView> {`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>A feature has a framer name.</p>\
                  ',
                },
                {
                  flex: '60%',
                  content: ``,
                  code: {
                    content: `public get framerName(): string { return 'Example'; }`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>A feature has a default model.</p>\
                  ',
                },
                {
                  flex: '60%',
                  content: ``,
                  code: {
                    content: `public get defaultModel(): M {
    return {
      count: 0,
      increment: 1,
    };
  }`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>A feature has a default view.</p>\
                  ',
                },
                {
                  flex: '60%',
                  content: ``,
                  code: {
                    content: `public get defaultView(): V {
    return {
      example: ExampleComponent,
      exampleSub: ExampleSubComponent,
    };
  }`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>A feature has a default controller.</p>\
                  ',
                },
                {
                  flex: '60%',
                  content: ``,
                  code: {
                    content: `public get defaultController(): Type<C> {
    return C;
  }`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>A feature configures the @NgModule and router in a frame method.</p>\
                  ',
                },
                {
                  flex: '60%',
                  content: ``,
                  code: {
                    content: `public frame(framing: FramingNgModule): void {
    framing
      .import(ExampleViewModule)
      .component(this.theView.example);
  }
}`,
                    language: 'typescript',
                  },
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
                    <p>If you still have questions, please <a href="mailto:ryan@safaricreative.com">email Ryan Campbell</a> or \
                      <a href="http://framing.herokuapp.com/">join the Framing slack team</a>.\
                    </p>\
                    <p>Read the <a href="/guidelines/features-develop">Develop a feature</a> guide.</p>\
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
export class FeaturesModule {}
