import { Component, ViewEncapsulation } from '@angular/core';

import { AppController } from '../app.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: [ './app-root.component.css', './app-root.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class AppRootComponent {
  public constructor(
    public appController: AppController,
  ) {}
}
