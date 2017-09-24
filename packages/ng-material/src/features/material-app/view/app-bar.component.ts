import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar',
  template: `
    <div fxLayout="row" class="mat-toolbar-tools">
      <button mat-icon-button fxFlex="none" class="mat-icon-button" aria-label="toggle Menu"
        (click)="controller.toggleSideNav(!model.sideNavOpened)"
        *ngIf="model.isRoot">
        <mat-icon>menu</mat-icon>
      </button>

      <button mat-button class="mat-icon-button" aria-label="Back"
        (click)="controller.goBack()"
        *ngIf="!model.isRoot">
        <mat-icon>arrow_back</mat-icon>
      </button>

      <span fxFlex="shrink" style="overflow: hidden">
        <ng-template [ngComponentOutlet]="view.appBarTitle"></ng-template>
      </span>

      <span fxFlex></span>

      <span fxFlex="none">
        <ng-template [ngComponentOutlet]="view.appBarActions"></ng-template>
      </span>

      <button mat-icon-button aria-label="More"
        (click)="controller.toggleRightNav(!model.rightNavOpened)">
        <mat-icon>more_vert</mat-icon>
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
