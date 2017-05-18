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
          id: 'directory-structure',
          title: 'Directory structure',
          rows: [
            {
              cells: [
                {
                  flex: '40%',
                  content: '\
                    <p>Create the nessessary folders</p>\
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
                    <p>Create the model interface.</p>\
                    <p>Create each property for the model.</p>\
                    <p>Be sure to document each property.</p>\
                    <p>Mark optional properties as optional using the question mark.</p>\
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
                    <p>Create the controller class.</p>\
                    <p>Extend Controller from @framing/ng-core.</p>\
                    <p>Pass your model and view interfaces as generics</p>\
                    <p>Create a method containing logic for each feature action</p>\
                    <p>Be sure to document each method</p>\
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
                    <p>Create the view module.</p>\
                    <p>Declare each component</p>\
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
                    <p>Create the component class</p>\
                    <p>Inject the controller</p>\
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
                    <p>Create the component template</p>\
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
                    <p>Create the view interface.</p>\
                    <p>Create a property for each component in the feature.</p>\
                    <p>Mark any properties as optional if a default component is available.</p>\
                    <p>Be sure to document each property</p>\
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
                    <p>Create the feature framing.</p>\
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
                    <p>Set the feature name same as the class name.</p>\
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
                    <p>Set the default model.</p>\
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
                    <p>Set the default view.</p>\
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
                    <p>Set the default controller.</p>\
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
                    <p>Configure the @NgModule, configure the router, and/or depend on other features within the frame method.</p>\
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
      ],
    },

  })),
))
export class FeaturesDevelopModule {}
