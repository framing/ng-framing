import { Component, ChangeDetectionStrategy, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MaterialAppComponent } from '../material-app.component';
import { MaterialAppController } from '../material-app.controller';

@Component({
  selector: 'side-nav-content',
  template: `
<md-list>
  <span *ngFor="let item of model.sideNavItems; let i = index">
    <md-list-item
      *ngIf="!item.isSubheader; else elseBlock"
      [routerLink]="item.routerLink"
      [ngClass]="{'selected': item.isSelected }">
      <md-icon md-list-icon *ngIf="item.icon">{{item.icon}}</md-icon>
      <p md-line>{{item.label}}</p>
    </md-list-item>
    <ng-template #elseBlock>
      <h3 md-subheader>
        <md-icon md-list-icon *ngIf="item.icon">{{item.icon}}</md-icon>
        <p md-line>{{item.label}}</p>
      </h3>
    </ng-template>
  </span>
</md-list>
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavContentComponent extends MaterialAppComponent implements OnInit {

  constructor(
    public injector: Injector,
    public controller: MaterialAppController,
    private router: Router,
    private ref: ChangeDetectorRef,
  ) {
    super(controller, injector);
  }

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.model.sideNavItems.forEach((item) => {
          if (event.url.includes(item.routerLink)) {
            item.isSelected = true;
          } else {
            item.isSelected = false;
          }
        })
        this.ref.markForCheck();
      }
    })
  }
}
