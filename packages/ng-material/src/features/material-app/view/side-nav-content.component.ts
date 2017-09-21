import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'side-nav-content',
  templateUrl: 'side-nav-content.component.html',
  styleUrls: [ 'side-nav-content.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavContentComponent extends MaterialAppComponent {

  public selectItem(index: number): void {
    this.model.sideNavItems.forEach(i => i.isSelected = false);
    this.model.sideNavItems[index].isSelected = true;
  }
}
