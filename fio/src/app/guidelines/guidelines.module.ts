import { NgModule } from '@angular/core';
import { Framing, FramingDevToolsFeature } from '@framing/ng-core';

import { DocsRootFeature } from 'features/docs-root/docs-root.feature';

@NgModule(Framing((framing) => framing
  .use(new FramingDevToolsFeature({}))
  .use(new DocsRootFeature({
    materialApp: {
      sideNavTitle: 'Framing Guidelines',
      sideNavItems: [
        {
          label: 'Introduction',
          routerLink: '/introduction',
        },
        {
          label: 'Why Framing?',
          routerLink: '/why-framing',
        },
        {
          label: 'Prerequisites',
          routerLink: '/prerequisites',
        },
        {
          label: 'Concepts',
          routerLink: '/concepts',
        },
        {
          label: 'Getting started',
          routerLink: '/getting-started',
        },
        //
        {
          label: 'Applications',
          isSubheader: true,
        },
        {
          label: 'Build a new app',
          routerLink: '/applications-develop',
        },
        {
          label: 'Refactoring an app',
          routerLink: '/applications-refactor',
        },
        //
        {
          label: 'Features',
          isSubheader: true,
        },
        {
          label: 'Features overview',
          routerLink: '/features',
        },
        {
          label: 'Develop a feature',
          routerLink: '/features-develop',
        },
        {
          label: 'Use a feature',
          routerLink: '/features-usage',
        },
        {
          label: 'Existing features',
          routerLink: '/features-existing',
        },
        //
        {
          label: 'Process',
          isSubheader: true,
        },
        {
          label: 'Process overview',
          routerLink: '/process',
        },
      ],
    },
  }))
  .children([
    { path: '', redirectTo: 'introduction' },
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
