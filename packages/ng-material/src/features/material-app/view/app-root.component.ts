import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" style="height: 100%">
      <md-toolbar fxLayout="row">
        <ng-container [ngComponentOutlet]="view.appBar"></ng-container>
      </md-toolbar>

      <md-sidenav-container fxFlex="100%" fxLayout="row">
        <md-sidenav mode="side" [opened]="model.sideNavOpened" class="sidenav">
          <ng-container [ngComponentOutlet]="view.sideNav"></ng-container>
        </md-sidenav>

        <div fxFlex="100%">
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
` ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppRootComponent extends MaterialAppComponent {}
