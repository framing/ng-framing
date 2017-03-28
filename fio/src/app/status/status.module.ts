import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { ForbiddenComponent } from './forbidden/forbidden.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

@NgModule(Framing((framing) => framing
  .declarationsAndExports([
    ForbiddenComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
  ]),
))
export class StatusModule {}
