import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FramingEmptyParentComponent } from './empty-parent.component';
import { FramingRootComponent } from './root.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    FramingEmptyParentComponent,
    FramingRootComponent,
  ],
  exports: [
    FramingEmptyParentComponent,
    FramingRootComponent,
  ],
})
export class FramingComponentsModule {}
