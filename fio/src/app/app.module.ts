import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { LandingModule } from './landing/landing.module';
import { StatusModule } from './status/status.module';
import { NotFoundComponent } from './status/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@NgModule(Framing((framing) => framing
  .root()
  .imports([
    StatusModule,
    BrowserModule,
    HttpModule,
  ])
  .routes([
    { path: '', pathMatch: 'full', loadChildren: () => LandingModule },
    { path: 'docs', loadChildren: './docs/docs.module#DocsModule' },
    { path: 'guidelines', loadChildren: './guidelines/guidelines.module#GuidelinesModule' },
    { path: 'api', loadChildren: './docs/docs.module#DocsModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: 'quickstart', loadChildren: './docs/docs.module#DocsModule' },
    { path: 'framing', loadChildren: './docs/docs.module#DocsModule' },
    { path: 'tasknas', loadChildren: './docs/docs.module#DocsModule' },
    { path: 'guide', loadChildren: './docs/docs.module#DocsModule' },
    { path: '**', component: NotFoundComponent },
  ],
  {
    forRoot: true,
    extraRootRouterOptions: {
      enableTracing: true,
    },
  }),
))
export class AppModule {}
