import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';
import { ListItemDirective } from './list-item.directive';

@NgModule(Framing((framing) => framing
  .declarationsAndExports([
    ListItemDirective,
  ]),
))
export class SharedModule {}
