import { Component, ChangeDetectionStrategy, Injector, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MaterialAppComponent } from '../material-app.component';
import { MaterialAppController } from '../material-app.controller';

@Component({
  selector: 'side-nav-content',
  templateUrl: 'side-nav-content.component.html',
  styleUrls: [ 'side-nav-content.component.scss' ],
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
