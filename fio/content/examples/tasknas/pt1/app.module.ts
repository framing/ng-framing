import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { AppFramer } from '@framing/ng-tasknas-framers';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule(Framing((framing) => framing
  .frame(new AppFramer().model({
    title: 'Tasknas',
    sideNavItems: [
      { label: 'Dashboard', routerLink: '/dashboard' },
    ],
  }))
  .route({}, {
    forRoot: true,
    extraRootRouterOptions: {
      enableTracing: true,
      useHash: true,
    },
  })
  .children([
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
  ])))
export class AppModule {}
