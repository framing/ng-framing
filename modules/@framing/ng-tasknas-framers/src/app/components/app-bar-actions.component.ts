import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-bar-actions',
  templateUrl: './app-bar-actions.component.html',
})
export class AppBarActionsComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
