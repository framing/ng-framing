import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule } from '@angular/core';

import { FramingContainerOutletDirective } from './container-outlet.directive';
import { FramingContainerOutletService } from './container-outlet.service';

@NgModule({
  declarations: [ FramingContainerOutletDirective ],
  exports: [ FramingContainerOutletDirective ],
})
export class FramingContainerOutletModule {
  static withEntryComponents(...components: any[]): ModuleWithProviders {
    return {
      ngModule: FramingContainerOutletModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true },
      ],
    };
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FramingContainerOutletModule,
      providers: [ FramingContainerOutletService ],
    };
  }
}
