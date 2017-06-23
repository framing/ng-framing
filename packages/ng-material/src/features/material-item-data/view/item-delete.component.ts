import { Component } from '@angular/core';

import { MaterialItemDataComponent } from '../material-item-data.component';

@Component({
  selector: 'item-delete',
  template: `
    <div>
        <div>Are you sure?</div>

        <div>
            <button
              md-button
              class="mat-primary"
              (click)="controller.deleteItem()">
              Delete
            </button>

            <button
              md-button
              (click)="controller.cancel()">
              Cancel
            </button>
        </div>
    </div>
  `,
})
export class ItemDeleteComponent extends MaterialItemDataComponent { }
