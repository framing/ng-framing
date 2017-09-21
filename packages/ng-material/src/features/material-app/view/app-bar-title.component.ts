import { Component, ChangeDetectionStrategy } from '@angular/core';

import { MaterialAppComponent } from '../material-app.component';

@Component({
  selector: 'app-bar-title',
  template: `
    <h2 class="title">
      {{model.appBarTitle}}
    </h2>
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .title {
      margin-left: 20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBarTitleComponent extends MaterialAppComponent {}
