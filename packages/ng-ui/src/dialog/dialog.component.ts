import { Component, OnDestroy, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DialogController } from './dialog.controller';

@Component({
  template: '<div></div>',
})
export class DialogComponent implements OnInit, OnDestroy {

  public dialogRef: MdDialogRef<any>;

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
  }

  private closeDialog(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
