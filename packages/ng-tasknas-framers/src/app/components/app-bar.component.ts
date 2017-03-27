import { Component } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: [ './app-bar.component.scss' ],
})
export class AppBarComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
