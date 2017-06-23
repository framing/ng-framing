import { Component } from '@angular/core';

import { MaterialItemDataComponent } from '../material-item-data.component';

@Component({
  selector: 'item-new',
  template: `
    <form (submit)="controller.createItem()">
      <div>
        New {{ model.name }}
      </div>

      <ng-container
        [ngComponentOutlet]="view.itemNewForm || view.itemForm">
      </ng-container>

      <div>
        <button
          md-button
          class="md-primary"
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
export class ItemNewComponent extends MaterialItemDataComponent {
  public ngOnInit(): void {
    super.ngOnInit();

    this.controller.newItem();
  }
}
