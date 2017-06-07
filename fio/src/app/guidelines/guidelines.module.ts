import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsRootFeature } from 'features/docs-root/docs-root.feature';

@NgModule(Framing((framing) => framing
  .use(new DocsRootFeature({
    materialApp: {
      sideNavTitle: 'Framing Guidelines',
      sideNavItems: [
        {
          label: 'Introduction',
          routerLink: '/guidelines/introduction',
        },
        {
          label: 'Why Framing?',
          routerLink: '/guidelines/why-framing',
        },
        {
          label: 'Prerequisites',
          routerLink: '/guidelines/prerequisites',
        },
        {
          label: 'Concepts',
          routerLink: '/guidelines/concepts',
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
          routerLink: '/guidelines/applications-develop',
        },
        {
          label: 'Refactoring an app',
          routerLink: '/guidelines/applications-refactor',
        },
        //
        {
          label: 'Features',
          isSubheader: true,
        },
        {
          label: 'Features overview',
          routerLink: '/guidelines/features',
        },
        {
          label: 'Develop a feature',
          routerLink: '/guidelines/features-develop',
        },
        {
          label: 'Use a feature',
          routerLink: '/guidelines/features-usage',
        },
        {
          label: 'Existing features',
          routerLink: '/guidelines/features-existing',
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
    { path: 'applications-develop', loadChildren: './applications-develop/applications-develop.module#ApplicationsDevelopModule' },
    { path: 'applications-refactor', loadChildren: './applications-refactor/applications-refactor.module#ApplicationsRefactorModule' },
    { path: 'concepts', loadChildren: './concepts/concepts.module#ConceptsModule' },
    { path: 'features', loadChildren: './features/features.module#FeaturesModule' },
    { path: 'features-develop', loadChildren: './features-develop/features-develop.module#FeaturesDevelopModule' },
    { path: 'features-existing', loadChildren: './features-existing/features-existing.module#FeaturesExistingModule' },
    { path: 'features-usage', loadChildren: './features-usage/features-usage.module#FeaturesUsageModule' },
    { path: 'getting-started', loadChildren: './getting-started/getting-started.module#GettingStartedModule' },
    { path: 'introduction', loadChildren: './introduction/introduction.module#IntroductionModule' },
    { path: 'prerequisites', loadChildren: './prerequisites/prerequisites.module#PrerequisitesModule' },
    { path: 'process', loadChildren: './process/process.module#ProcessModule' },
    { path: 'why-framing', loadChildren: './why-framing/why-framing.module#WhyFramingModule' },
  ]),
))
export class GuidelinesModule {}
