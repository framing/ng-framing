import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { FeatureDetailFeature } from 'features/feature-detail/feature-detail.feature';

@NgModule(Framing((framing) => framing
  .frame(new FeatureDetailFeature()
    .model({
      feature: {
        id: 'app',
        title: 'App',
        description: '\
          <p>Adds a left side nav, app bar, right nav based on \
            <a href="https://material.io/guidelines/layout/structure.html">Google Material Layout Structure</a></p>\
        ',
        installation: '\
          <p>git clone https://github.com/biznas/ng-app my-app</p>\
          <p>cd my-app</p>\
          <p>yarn</p>\
          <p>yarn add @framing/ng-material --save</p>\
        ',
        usage: '\
          <p>Simply import MaterialAppFeature and create an instance of it in a Framing .frame() method call</p>\
          <p><b>src/app/app.module.ts</b></p>\
          <pre>\
import { NgModule } from \'@angular/core\';<br>\
import { Framing } from \'@framing/ng-core\';<br>\
<b>import { MaterialAppFeature } from \'@framing/ng-material\';</b><br>\
<br>\
@NgModule(Framing((framing) => framing<br>\
  <b>.frame(new MaterialAppFeature()),</b><br>\
))<br>\
export class AppModule {}<br>\
          <p>To run it, execute \'yarn start\'.</p>\
        ',
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
