import { Component } from '@angular/core';

import { MaterialItemDataComponent } from '../material-item-data.component';

@Component({
  selector: 'item-form',
  template: `
    <div fxFlex>
      <md-input-container>
        <input mdInput name="label" [(ngModel)]="model.item.label" placeholder="Label">
      </md-input-container>
    </div>
  `,
})
export class ItemFormComponent extends MaterialItemDataComponent { }
