import { Type } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Framer, FramingNgModule } from '@framing/ng-core';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdChipsModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule,
  RtlModule,
  StyleModule,
  A11yModule,
  PlatformModule,
  MdCommonModule,
  ObserveContentModule,
} from '@angular/material';

import { MaterialController as C } from './material.controller';
import { MaterialModel as M } from './material.model';
import { MaterialView as V } from './material.view';

export class MaterialFeature extends Framer<M, V> {
  public get framerName(): string { return 'Material'; }

  public get defaultModel(): M { return {}; }

  public get defaultView(): V { return {}; }

  public get defaultController(): Type<C> { return C; }

  public frame(framing: FramingNgModule): void {
    framing.importsAndExports([
      FlexLayoutModule,
      MdAutocompleteModule,
      MdButtonModule,
      MdButtonToggleModule,
      MdCardModule,
      MdChipsModule,
      MdCheckboxModule,
      MdDatepickerModule,
      MdDialogModule,
      MdGridListModule,
      MdIconModule,
      MdInputModule,
      MdListModule,
      MdMenuModule,
      MdProgressBarModule,
      MdProgressSpinnerModule,
      MdRadioModule,
      MdRippleModule,
      MdSelectModule,
      MdSidenavModule,
      MdSliderModule,
      MdSlideToggleModule,
      MdSnackBarModule,
      MdTabsModule,
      MdToolbarModule,
      MdTooltipModule,
      OverlayModule,
      PortalModule,
      RtlModule,
      StyleModule,
      A11yModule,
      PlatformModule,
      MdCommonModule,
      ObserveContentModule,
    ]);
  }
}
