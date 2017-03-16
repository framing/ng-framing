import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-side-nav-sub-title',
  templateUrl: './app-side-nav-sub-title.component.html',
})
export class AppSideNavSubTitleComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
