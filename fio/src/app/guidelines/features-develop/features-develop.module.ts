import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'features-develop',
      title: 'Develop a feature',
      subTitle: '',
      sections: [
        {
          id: 'example-code',
          title: 'Example Code',
          rows: [
            {
              cells: [
                {
                  content: `
                    <p>The code referenced in this document is available at <a href="https://github.com/framing/ng-example" target="_blank">github.com/framing/ng-example</a>.</p>
                  `,
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
                  content: `
                    <p>Create the nessessary folders</p>
                    <p><b>src/features</b><br>Root folder of all features in project.</p>
                    <p><b>src/features/example</b><br>Root folder of individual feature.</p>
                    <p><b>src/features/example/view</b><br>Folder containing all components used by feature.</p>
                  `,
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
                  content: `
                    <p>Create the model interface.</p>
                    <p>Create each property for the model.</p>
                    <p>Be sure to document each property.</p>
                    <p>Mark optional properties as optional using the question mark.</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `
                    <p><b>src/features/example/example.model.ts</b> TBD</p>`,
                  code: {
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
                    language: `typescript`,
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
                    <p>Create the controller class.</p>
                    <p>Extend Controller from @framing/ng-core.</p>
                    <p>Pass your model and view interfaces as generics</p>
                    <p>Create a method containing logic for each feature action</p>
                    <p>Be sure to document each method</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/features/example/example.controller.ts</b> TBD</p>`,
                  code: {
                    content: `import { Injectable } from '@angular/core';
import { Action, Controller } from '@framing/ng-core';

import { ExampleModel as M } from './example.model';
import { ExampleView as V } from './example.view';

@Injectable()
export class ExampleController extends Controller<M, V> {

  /**
   * Increases count property by the increment property.
   */
  @Action() public submit(): void {
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
                  content: `
                    <p>Create the view module.</p>
                    <p>Declare each component</p>
                  `,
                },
                {
                  flex: '60%',
                  content: '<p><b>src/features/example/view/view.module.ts</b></p>',
                  code: {
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
                    language: `typescript`,
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: `
                    <p>Create the component class</p>
                    <p>Inject the controller</p>`,
                },
                {
                  flex: '60%',
                  content: '<p><b>src/features/example/view/example.component.ts</b></p>',
                  code: {
                    content: `import { Component as AngularComponent, Injector } from '@angular/core';
import { Component } from '@framing/ng-core';

import { ExampleController as C } from './example.controller';
import { ExampleModel as M } from './example.model';
import { ExampleView as V } from './example.view';

@AngularComponent({})
export class ExampleComponent extends Component<M, V, C> {
  constructor(controller: C, injector: Injector) {
    super(controller, injector);
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
                  content: `
                    <p>Create the component template</p>
                    <p>Templates bind to the feature's model.</p>
                    <p>Templates event listeners call methods on the feature's controller.</p>
                  `,
                },
                {
                  flex: '60%',
                  content: '<p><b>src/features/example/view/example.component.html</b></p>',
                  code: {
                    content: `<h1>Example Component</h1>;

<ng-template
  [ngComponentOutlet]="view.exampleSubComponent">
</ng-template>

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
                  content: `
                    <p>Create the view interface.</p>
                    <p>Create a property for each component in the feature.</p>
                    <p>Mark any properties as optional if a default component is available.</p>
                    <p>Be sure to document each property</p>
                  `,
                },
                {
                  flex: '60%',
                  content: '<p><b>src/features/example/example.view.ts</b></p>',
                  code: {
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
                  content: '<p>Create the feature framing.</p>',
                },
                {
                  flex: '60%',
                  content: '<p><b>src/features/example/example.feature.ts</b></p>',
                  code: {
                    content: `import { Type } from '@angular/core';
import { Framer, FramingNgModule } from '@framing/ng-core';

import { ExampleController as C } from './example.controller';
import { ExampleModel as M } from './example.model';
import { ExampleView as V } from './example.view';

import { ExampleSubComponent } from './view/example-sub.component';
import { ExampleViewModule } from './view/example-view.module';
import { ExampleComponent } from './view/example.component';

export class ExampleFeature extends Framer<M, V> {`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '<p>Set the feature name same as the class name.</p>',
                },
                {
                  flex: '60%',
                  content: '',
                  code: {
                    content: `public get framerName(): string { return 'Example'; }<br>`,
                    language: 'typescript',
                  },
                },
              ],
            },
            {
              cells: [
                {
                  flex: '40%',
                  content: '<p>Set the default model.</p>',
                },
                {
                  flex: '60%',
                  content: '',
                  code: {
                    content: `public get defaultModel(): M {
    return {
      count: 0,
      increment: 1,
    };
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
                  content: '<p>Set the default view.</p>',
                },
                {
                  flex: '60%',
                  content: '',
                  code: {
                    content: `  public get defaultView(): V {
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
                  content: '<p>Set the default controller.</p>',
                },
                {
                  flex: '60%',
                  content: '',
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
                  content: '<p>Configure the @NgModule, configure the router, and/or depend on other features within the frame method.</p>',
                },
                {
                  flex: '60%',
                  content: '',
                  code: {
                    content: `  public frame(framing: FramingNgModule): void {
    framing
      .import(ExampleViewModule)
      .component(this.theView.example);
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
                  content: `
                    <p>If you still have questions, please <a href="mailto:ryan@safaricreative.com">email Ryan Campbell</a> or
                      <a href="http://framing.herokuapp.com/">join the Framing slack team</a>.
                    </p>
                    <p>Read the <a href="/guidelines/features-usage">Use a feature</a> guide.</p>
                    <p>Try out the <a href="http://framing.io/tasknas">Tasknas tutorial</a>.</p>
                    <p>Review the <a href="http://github.com/framing/ng-framing">@framing/ng-framing git repo</a>.</p>
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
export class FeaturesDevelopModule {}
