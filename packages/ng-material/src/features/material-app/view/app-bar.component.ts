import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar',
  template: `
    <div fxLayout="row" class="md-toolbar-tools">
      <button md-button fxFlex="none" class="md-icon-button" aria-label="toggle Menu"
        (click)="controller.toggleSideNav(!model.sideNavOpened)"
        *ngIf="model.isRoot">
        <md-icon>menu</md-icon>
      </button>

      <button md-button class="md-icon-button" aria-label="Back"
        (click)="controller.goBack()"
        *ngIf="!model.isRoot">
        <md-icon>arrow_back</md-icon>
      </button>

      <span fxFlex="shrink" style="overflow: hidden">
        <ng-template [ngComponentOutlet]="view.appBarTitle"></ng-template>
      </span>

      <span fxFlex></span>

      <span fxFlex="none">
        <ng-template [ngComponentOutlet]="view.appBarActions"></ng-template>
      </span>

      <button md-icon-button aria-label="More"
        (click)="controller.toggleRightNav(!model.rightNavOpened)">
        <md-icon>more_vert</md-icon>
      </button>
    </div>
  `,
  styles: [ `
    :host {
      flex: 1;
    }

    /deep/ .mat-toolbar-layout {
      flex: 1;
    }
  ` ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarComponent extends MaterialAppComponent {}
