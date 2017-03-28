import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { Subscription } from 'rxjs';

import { DialogController } from './dialog.controller';

@Component({
  template: '<div></div>',
})
export class DialogComponent implements OnInit, OnDestroy {

  public dialogRef: MdDialogRef<any>;

  private afterClosedSubscription: Subscription;

  constructor(
    public dialogController: DialogController,
    public dialog: MdDialog,
  ) {}

  public ngOnInit(): void {
    this.openDialog();
  }

  public ngOnDestroy(): void {
    this.closeDialog();
  }

  private openDialog(): void {
    this.dialogRef = this.dialog.open(
      this.dialogController.model.component,
      this.dialogController.model.dialogConfig,
    );

    this.afterClosedSubscription = this.dialogRef.afterClosed().subscribe((result) => {
      this.afterClosedSubscription.unsubscribe();
      this.afterClosedSubscription = null;

      if (!result) {
        window.history.go(-1);
      }
    });
  }

  private closeDialog(): void {
    if (this.afterClosedSubscription) {
      this.afterClosedSubscription.unsubscribe();
      this.afterClosedSubscription = null;
    }

    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
