import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-bar-title',
  templateUrl: './app-bar-title.component.html',
})
export class AppBarTitleComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
