import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-side-nav',
  templateUrl: './app-side-nav.component.html',
  styleUrls: [ './app-side-nav.component.scss' ],
})
export class AppSideNavComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
