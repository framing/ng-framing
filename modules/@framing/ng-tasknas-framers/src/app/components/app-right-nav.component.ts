import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-right-nav',
  templateUrl: './app-right-nav.component.html',
})
export class AppRightNavComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
