import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsRootFeature } from 'features/docs-root/docs-root.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsRootFeature({
    materialApp: {
      sideNavTitle: 'Framing Guidelines',
      sideNavItems: [
        {
          label: 'Introduction',
          routerLink: '/guidelines/introduction',
        },
        {
          label: 'Why Framing?',
          routerLink: '/guidelines/introduction',
        },
        {
          label: 'Prerequisities',
          routerLink: '/guidelines/getting-started',
        },
        {
          label: 'Concepts',
          routerLink: '/guidelines/getting-started',
        },
        {
          label: 'Getting started',
          routerLink: '/guidelines/getting-started',
        },
        //
        {
          label: 'Applications',
          isSubheader: true,
        },
        {
          label: 'Build a new app',
          routerLink: '/guidelines/features',
        },
        {
          label: 'Refactoring an app',
          routerLink: '/guidelines/features',
        },
        //
        {
          label: 'Features',
          isSubheader: true,
        },
        {
          label: 'Feature overview',
          routerLink: '/guidelines/features',
        },
        {
          label: 'Develop a feature',
          routerLink: '/guidelines/features',
        },
        {
          label: 'Use a feature',
          routerLink: '/guidelines/features',
        },
        {
          label: 'Existing features',
          routerLink: '/guidelines/features',
        },
        //
        {
          label: 'Process',
          isSubheader: true,
        },
        {
          label: 'Process overview',
          routerLink: '/guidelines/process',
        },
      ],
    },
  }))
  .children([
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedModule' },
    { path: 'introduction', loadChildren: './introduction/introduction.module#IntroductionModule' },
    { path: 'process', loadChildren: './process/process.module#ProcessModule' },
  ]),
))
export class GuidelinesModule {}
