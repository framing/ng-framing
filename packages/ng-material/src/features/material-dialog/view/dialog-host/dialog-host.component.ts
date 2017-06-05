import { ChangeDetectionStrategy, Component, Injector, OnDestroy, OnInit } from '@angular/core';

import { MaterialDialogComponent } from '../../material-dialog.component';
import { MaterialDialogController } from '../../material-dialog.controller';

@Component({
  template: '<div></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogHostComponent extends MaterialDialogComponent implements OnInit, OnDestroy {
  public ngOnInit(): void {
    super.ngOnInit();

    this.controller.openDialog();
  }

  public ngOnDestroy(): void {
    this.controller.closeDialog();

    super.ngOnDestroy();
  }


}
