import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'features-usage',
      title: 'Use a Feature',
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
          id: 'anatomy-of-a-feature',
          title: 'Basic usage',
          rows: [
            {
              cells: [
                {
                  flex: '40%',
                  content: `
                    <p>Create an Angular module.</p>
                    <p>Use Framing to configure your module</p>
                    <p>Create an instance of the feature you want a use and pass it to the Framing .frame() method</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/default/default.module.ts</b></p>`,
                  code: {
                    content: `import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

@NgModule(Framing((framing) => framing
  .frame(new ExampleFeature()),
))
export class DefaultModule {}`,
                    language: 'typescript',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'directory-structure',
          title: 'Override the default model',
          rows: [
            {
              cells: [
                {
                  flex: '40%',
                  content: `
                    <p>Create an Angular module.</p>
                    <p>Use Framing to configure your module</p>
                    <p>Create an instance of the feature you want a use and pass it to the Framing .frame() method</p>
                    <p>Called .model() on the feature and pass the default state to override.</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-model/custom-model.module.ts</b></p>`,
                  code: {
                    content: `import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

@NgModule(Framing((framing) => framing
  .frame(new ExampleFeature()
    .model({
      count: 5,
      increment: 10,
    }),
  ),
))
export class CustomModelModule {}`,
                    language: 'typescript',
                  },
                },
              ],
            },
          ],
        },
        {
          id: 'model',
          title: 'Override a default view component',
          rows: [
            {
              cells: [
                {
                  flex: '40%',
                  content: `
                    <p>Create an Angular module.</p>
                    <p>Use Framing to configure your module</p>
                    <p>Create an instance of the feature you want a use and pass it to the Framing .frame() method</p>
                    <p>Import your custom view module.</p>
                    <p>Called .view() on the feature to override any components</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-example-component/custom-example-component.module.ts</b></p>`,
                  code: {
                    content: `import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { CustomExampleComponentViewModule } from './view/custom-example-component-view.module';
import { CustomExampleComponent } from './view/custom-example.component';

@NgModule(Framing((framing) => framing
  .import(CustomExampleComponentViewModule)
  .frame(new ExampleFeature()
    .view({
      exampleComponent: CustomExampleComponent,
    }),
  ),
))
export class CustomExampleComponentModule {}`,
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
                    <p>Create the view module.</p>
                    <p>Declare any custom components</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-example-component/view/custom-example-component-view.module.ts</b></p>`,
                  code: {
                    content: `import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { CustomExampleComponent } from './custom-example.component';

@NgModule(Framing((framing) => framing
  .declareAndEntryComponent(CustomExampleComponent),
))
export class CustomExampleComponentViewModule {}`,
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
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-example-component/custom-example.component.html</b></p>`,
                  code: {
                    content: `<h1>Custom Example Component</h1>`,
                    language: 'markup',
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
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-example-component/view/custom-example.component.ts</b></p>`,
                  code: {
                    content: `import { Component } from '@angular/core';

import { ExampleController } from 'features/example/example.controller';

@Component({
  selector: 'custom-example-component',
  templateUrl: './custom-example.component.html',
})
export class CustomExampleComponent {
  constructor(
    public exampleController: ExampleController,
  ) {}
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
          title: 'Override the default controller',
          rows: [
            {
              cells: [
                {
                  flex: '40%',
                  content: `
                    <p>Create an Angular module.</p>
                    <p>Use Framing to configure your module</p>
                    <p>Create an instance of the feature you want a use and pass it to the Framing .frame() method</p>
                    <p>Import your custom view module.</p>
                    <p>Called .controller() on the feature and pass in your custom controller class.</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-submit-handler/custom-submit-handler.module.ts</b></p>`,
                  code: {
                    content: `import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ExampleFeature } from 'features/example/example.feature';

import { CustomSubmitHandlerController } from './custom-submit-handler.controller';

@NgModule(Framing((framing) => framing
  .frame(new ExampleFeature()
    .controller(CustomSubmitHandlerController),
  ),
))
export class CustomSubmitHandlerModule {}`,
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
                    <p>Create the controller class.</p>
                    <p>Mark it as @Injectable().</p>
                    <p>Extend the feature's default controller class.</p>
                    <p>Override any methods you wouldlike to use alternate logic for.</p>
                  `,
                },
                {
                  flex: '60%',
                  content: `<p><b>src/app/custom-submit-handler/customer-submit-handler.controller.ts</b></p>`,
                  code: {
                    content: `import { Injectable } from '@angular/core';

import { ExampleController } from 'features/example/example.controller';

@Injectable()
export class CustomSubmitHandlerController extends ExampleController {
  public submit(): void {
    window.alert('Custom alert!');
  }
}
                    `,
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
                    <p>Check out the <a href="/guidelines/features-existing">Existing features</a> open sourced by the community.</p>
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
export class FeaturesUsageModule {}
