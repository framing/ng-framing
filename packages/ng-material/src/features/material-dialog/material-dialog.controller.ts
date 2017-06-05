import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Controller } from '@framing/ng-core';
import { Subscription } from 'rxjs/Subscription';

import { MaterialDialogModel as M } from './material-dialog.model';
import { MaterialDialogView as V } from './material-dialog.view';

@Injectable()
export class MaterialDialogController extends Controller<M, V> {
  protected mdDialogRef: MdDialogRef<any>;

  protected afterClosedSubscription: Subscription;

  constructor(
    protected mdDialog: MdDialog,
  ) {
    super();
  }

  public openDialog(): void {
    this.mdDialogRef = this.mdDialog.open(this.view.dialogComponent, this.model.dialogConfig);

    this.afterClosedSubscription = this.mdDialogRef.afterClosed().subscribe((result) => {
      this.afterClosedSubscription.unsubscribe();
      this.afterClosedSubscription = null;

      if (!result) {
        window.history.go(-1);
      }
    });
  }

  public closeDialog(): void {
    if (this.afterClosedSubscription) {
      this.afterClosedSubscription.unsubscribe();
      this.afterClosedSubscription = null;
    }

    if (this.mdDialogRef) {
      this.mdDialogRef.close();
    }
  }
}
