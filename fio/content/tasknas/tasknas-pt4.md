@title
Tasknas - Lastly

@intro
Lastly

@description

### **LASTLY**

tasks need more than a label 

so to do that create src/app/tasks/view folder and add this code into a task-form.component.ts file: 

```typescript 
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
```

and create a task-form.component.html with this code: 

```html 
<div>
  <md-input-container>
    <input mdInput [(ngModel)]="itemController.model.item.label" placeholder="Label">
  </md-input-container>
</div>

<div>
  <md-checkbox [(ngModel)]="itemController.model.item.done">Done</md-checkbox>
</div>

<div>
  <md-input-container>
    <input mdInput [(ngModel)]="itemController.model.item.dueDate" placeholder="Due Date" type="date">
  </md-input-container>
</div>
```

and create tasks-view.module.ts and add this in: 

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { Framing } from '@framing/ng-core';

import { TaskFormComponent } from './task-form.component';

@NgModule(Framing((framing) => framing
 .imports([
   FormsModule,
   MaterialModule,
 ])
 .declarationsAndEntryComponents([
   TaskFormComponent,
 ])))
export class TasksViewModule {}
```

and then go back into the tasks.module.ts file and add in: 

```typescript
import { TaskFormComponent } from './view/task-form.component';
import { TasksViewModule } from './view/tasks-view.module';
```

then in tasks.module.ts file above the .frame() method add in: 

```typescript
  .import(TasksViewModule)
```

then (in the tasks.module.ts) add this into the item framer config: 

```typescript
@NgModule(Framing((framing) => framing
  .import(TasksViewModule)
  .frame(new ItemFramer()
    .itemDataProvider(ItemDataFirebaseService)
    .model({
      endpoint: 'tasks',
    })
    .view({
      itemFormComponent: TaskFormComponent,
    }))))
export class TasksModule {}
```

Save that and go check the app out. You'll see now selecting an existing task or creating a new one you can now mark your task as done and set a due date.

Go ahead, update your tasks, have a beer, celebrate your success!

You can see a more full featured version of Tasknas here:
https://github.com/framing/ng-tasknas-demo

You can examine the Tasknas Framers source here:
https://github.com/framing/ng-framing/tree/master/packages/ng-tasknas-framers
