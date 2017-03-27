import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-side-nav-title',
  templateUrl: './app-side-nav-title.component.html',
})
export class AppSideNavTitleComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
