import { Component } from '@angular/core';

import { MaterialItemDataComponent } from '../material-item-data.component';

@Component({
  selector: 'item-list',
  template: `
    <md-list>
      <md-list-item
        *ngFor="let item of model.items"
        [listItem]="item"
        [routerLink]="[ '../', item.$key ]">
        <h1>{{ item.label }}</h1>
      </md-list-item>
    </md-list>

    <div>
      <button
        md-button
        type="button"
        [routerLink]="[ '../new' ]">
        New
      </button>
    </div>
  `,
})
export class ItemListComponent extends MaterialItemDataComponent {
  public ngOnInit(): void {
    super.ngOnInit();

    this.controller.listItems();
  }
}
