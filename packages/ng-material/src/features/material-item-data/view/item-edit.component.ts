import { Component } from '@angular/core';

import { MaterialItemDataComponent } from '../material-item-data.component';

@Component({
  selector: 'item-edit',
  template: `
    <form (submit)="controller.updateItem()">
      <div>Edit {{ model.name }}</div>

      <ng-container
        [ngComponentOutlet]="view.itemEditForm || view.itemForm">
      </ng-container>

      <div>
        <button
          md-button
          class="mat-primary"
          type="submit">
          Save
        </button>

        <button
          md-button
          (click)="controller.cancel()"
          type="button">
          Cancel
        </button>
      </div>
    </form>
  `,
})
export class ItemEditComponent extends MaterialItemDataComponent {
  public ngOnInit(): void {
    super.ngOnInit();

    this.controller.editItem();
  }
}
