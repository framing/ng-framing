import { Component } from '@angular/core';

import { ItemController } from '@framing/ng-tasknas-framers';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  public constructor(
    public itemController: ItemController,
  ) {}
}
