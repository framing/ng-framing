import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureDetailFeature } from 'features/feature-detail/feature-detail.feature';

@NgModule(Framing((framing) => framing
  .frame(new FeatureDetailFeature()
    .model({
      feature: {
        id: 'app',
        title: 'App',
        description: `
          <p>Adds a left side nav, app bar, right nav based on
            <a href="https://material.io/guidelines/layout/structure.html">Google Material Layout Structure</a></p>
        `,
        installation: `
          <p>npm i -g yarn</p>
          <p>npm i -g @framing/biz</p>
          <p>biz new my-app</p>
          <p>cd my-app</p>
          <p>yarn add @angular/flex-layout @angular/material @framing/ng-material</p>
        `,
        usage: `
          <p>Step 1: Import MaterialAppFeature and pass an instance of it to framing.use()</p>
          <p><b>src/app/app.module.ts</b></p>
          <pre>
import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';
<b>import { MaterialAppFeature } from '@framing/ng-material';</b>

@NgModule(Framing((framing) => framing
  <b>.use(new MaterialAppFeature())</b>
  // ...
))
export class AppModule {}
          </pre>
          <p>Step 2: Add css imports</p>
          <p><b>src/styles.css</p></p>
          <pre>
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
@import '~https://fonts.googleapis.com/icon?family=Material+Icons';
          </pre>
          <p>Run 'biz serve' to run a local server</p>
        `,
        modelProperties: [
          { name: 'appBarActions', description: 'AppNavItem[]' },
          { name: 'appBarTitle', description: 'string' },
          { name: 'rightNavItems', description: 'AppNavItem[]' },
          { name: 'rightNavOpened', description: 'boolean - default false' },

          { name: 'sideNavItems', description: 'AppNavItem[]' },
          { name: 'sideNavOpened', description: 'boolean - default false' },
          { name: 'sideNavTitle', description: 'string' },
        ],
        viewComponents: [
          { name: 'appBarActions', description: '' },
          { name: 'appBarTitle', description: '' },
          { name: 'appBar', description: '' },
          { name: 'appRoot', description: '' },
          { name: 'rightNav', description: '' },
          { name: 'sideNav', description: '' },
          { name: 'sideNavContent', description: '' },
          { name: 'sideNavSubTitle', description: '' },
          { name: 'sideNavTitle', description: '' },
        ],
        controllerMethods: [
          { name: 'toggleRightNav(opened: boolean): void', description: '' },
          { name: 'toggleSideNav(opened: boolean): void', description: '' },
        ],
      },
    })),
))
export class AppModule {}
