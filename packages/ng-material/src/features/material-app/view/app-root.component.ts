import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" style="height: 100%">
      <md-toolbar fxLayout="row" color="primary">
        <ng-container [ngComponentOutlet]="view.appBar"></ng-container>
      </md-toolbar>

      <md-sidenav-container fxFlex="100%" fxLayout="row">
        <md-sidenav class="framing-sidenav" mode="side" [opened]="model.sideNavOpened" style="min-width: 200px">
          <ng-container [ngComponentOutlet]="view.sideNav"></ng-container>
        </md-sidenav>

        <div style="overflow: auto; margin: 0; width: 100%; height: 100%;">
          <router-outlet></router-outlet>
        </div>

        <md-sidenav mode="over" align="end" [opened]="model.rightNavOpened">
          <ng-container [ngComponentOutlet]="view.rightNav"></ng-container>
        </md-sidenav>
      </md-sidenav-container>
    </div>
  `,
  styles: [ `
    .mat-sidenav-content { flex: 1 }
    html { height: 100%; }
    body { height: 100%; }
    app-root { height: 100%; }
    .framing-sidenav { box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }
` ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppRootComponent extends MaterialAppComponent {}
