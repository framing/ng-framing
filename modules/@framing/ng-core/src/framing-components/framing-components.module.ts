import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FramingEmptyParentComponent } from './empty-parent.component';

@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    FramingEmptyParentComponent,
  ],
  exports: [
    FramingEmptyParentComponent,
  ],
})
export class FramingComponentsModule {}
