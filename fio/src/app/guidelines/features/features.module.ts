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
                  content: '\
                    <p><b>src/features/example/example.model.ts</b> TBD</p>\
                    <pre>\
export interface ExampleModel {<br>\
  /**<br>\
   * Number of times \'Press Me\' button has been clicked.<br>\
   * Default is 0<br>\
   */<br>\
  count?: number;<br>\
<br>\
  /**<br>\
   * Amount to increase count each time \'Press Me\' button is clicked.<br>\
   * Default is 1.<br>\
   */<br>\
  increment?: number;<br>\
}<br>\
                    </pre>\
                    ',
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
                  content: '\
                    <p>Controllers are TypeScript classes with methods containing feature logic.</p>\
                    <p>Controllers are injectable services and injected by the features components to handle all user interaction.</p>\
                    <p>Unlike traditional Angular, all feature/business logic is in the injectable controller.</p>\
                    <p>Controllers can be extended by the developer using your feature to override any feature logic.</p>\
                    <p>Controllers are well documented so that it is clear to the developer which method to override.</p>\
                  ',
                },
                {
                  flex: '60%',
                  content: '\
                    <p><b>src/features/example/example.controller.ts</b> TBD</p>\
                    <pre>\
import { Injectable } from \'@angular/core\';<br>\
import { Controller } from \'@framing/ng-core\';<br>\
<br>\
import { ExampleModel as M } from \'./example.model\';<br>\
import { ExampleView as V } from \'./example.view\';<br>\
<br>\
@Injectable()<br>\
export class ExampleController extends Controller&lt;M, V&gt; {<br>\
  <br>\
  /**<br>\
   * Increases count property by the increment property.<br>\
   */<br>\
  public submit(): void {<br>\
    this.model.count += this.model.increment;<br>\
  }<br>\
  <br>\
}<br>\
                    </pre>\
                  ',
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
                  content: '<p><b>src/features/example/view/example-view.module.ts</b></p>\
                    <pre>\
import { NgModule } from \'@angular/core\';<br>\
import { Framing } from \'@framing/ng-core\';<br>\
<br>\
import { ExampleSubComponent } from \'./example-sub.component\';<br>\
import { ExampleComponent } from \'./example.component\';<br>\
<br>\
@NgModule(Framing((framing) => framing<br>\
  .declarationsAndEntryComponents([<br>\
    ExampleComponent,<br>\
    ExampleSubComponent,<br>\
  ]),<br>\
))<br>\
export class ExampleViewModule {}<br>\
                    </pre>\
                  ',
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
                  content: '<p><b>src/features/example/view/example.component.ts</b></p>\
                    <pre>\
import { Component } from \'@angular/core\';<br>\
<br>\
import { ExampleController } from \'../example.controller\';<br>\
<br>\
@Component({<br>\
  selector: \'example-component\',<br>\
  templateUrl: \'./example.component.html\',<br>\
})<br>\
export class ExampleComponent {<br>\
  constructor(<br>\
    public exampleController: ExampleController,<br>\
  ) {}<br>\
}\
                    </pre>\
                  ',
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
                  content: '<p><b>src/features/example/view/example.component.html</b></p>\
                    <pre>\
&lt;h1&gt;Example Component&lt;/h1&gt;<br>\
<br>\
&lt;ng-template<br>\
  [ngComponentOutlet]="exampleController.view.exampleSubComponent"&gt;<br>\
&lt;/ng-template&gt;<br>\
<br>\
&lt;div&gt;<br>\
  &lt;button<br>\
    (click)="exampleController.submit()"&gt;<br>\
    Press Me<br>\
  &lt;/button&gt;<br>\
&lt;/div&gt;<br>\
<br>\
&lt;h3&gt;Count {{ exampleController.model.count }}&lt;/h3&gt;\
                    </pre>\
                  ',
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
                  content: '<p><b>src/features/example/example.view.ts</b></p>\
                    <pre>\
import { Type } from \'@angular/core\';<br>\
<br>\
export interface ExampleView {<br>\
  exampleComponent?: Type<any>;<br>\
<br>\
  exampleSubComponent?: Type<any>;<br>\
}<br>\
                    </pre>\
                  ',
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
                  content: '<p><b>src/features/example/example.feature.ts</b></p>\
                    <pre>\
import { Type } from \'@angular/core\';<br>\
import { Framer, FramingNgModule } from \'@framing/ng-core\';<br>\
<br>\
import { ExampleController } from \'./example.controller\';<br>\
import { ExampleModel } from \'./example.model\';<br>\
import { ExampleView } from \'./example.view\';<br>\
<br>\
import { ExampleSubComponent } from \'./view/example-sub.component\';<br>\
import { ExampleViewModule } from \'./view/example-view.module\';<br>\
import { ExampleComponent } from \'./view/example.component\';<br>\
<br>\
export class ExampleFeature extends Framer<ExampleModel, ExampleView> {<br>\
<br>\
                    </pre>',
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
                  content: '\
                    <pre>\
  public get framerName(): string { return \'ExampleFeature\'; }<br>\
<br>\
                    </pre>',
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
                  content: '\
                    <pre>\
  public get defaultModel(): ExampleModel {<br>\
    return {<br>\
      count: 0,<br>\
      increment: 1,<br>\
    };<br>\
  }<br>\
<br>\
                    </pre>',
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
                  content: '\
                    <pre>\
  public get defaultView(): ExampleView {<br>\
    return {<br>\
      exampleComponent: ExampleComponent,<br>\
      exampleSubComponent: ExampleSubComponent,<br>\
    };<br>\
  }<br>\
<br>\
                    </pre>',
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
                  content: '\
                    <pre>\
  public get defaultController(): Type<ExampleController> {<br>\
    return ExampleController;<br>\
  }<br>\
<br>\
                    </pre>',
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
                  content: '\
                    <pre>\
  public frame(framing: FramingNgModule): void {<br>\
    framing<br>\
      .import(ExampleViewModule)<br>\
      .component(this.theView.exampleComponent);<br>\
  }<br>\
}\
                    </pre>\
                  ',
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
                      <li>Why not just use components?</li>\
                      <li>How do I customize the style of a feature?</li>\
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
