import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './app-side-nav-content.component.html',
})
export class AppSideNavContentComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
