import { Component } from '@angular/core';

import { MaterialAppController } from './material-app.controller';

@Component({})
export abstract class MaterialAppComponent {
  constructor(
    public appController: MaterialAppController,
  ) {}
}
