import { ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule } from '@angular/core';

import { FramingComponentOutletDirective } from './component-outlet.directive';

@NgModule({
  declarations: [ FramingComponentOutletDirective ],
  exports: [ FramingComponentOutletDirective ],
})
export class FramingComponentOutletModule {
  static withEntryComponents(...components: any[]): ModuleWithProviders {
    return {
      ngModule: FramingComponentOutletModule,
      providers: [
        { provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true },
      ],
    };
  }
}
