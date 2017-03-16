import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { BreadcrumbService } from './breadcrumb.service';

@NgModule(Framing((framing) => framing.provider(BreadcrumbService)))
export class BreadcrumbModule {}
