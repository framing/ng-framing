@title
Tasknas - Create a second screen

@intro
Create a second screen

@description

### **LET'S GET OUR SECOND SCREEN STARTED** 

Let’s add a task screen!

Inside the app folder create a tasks folder.

create a tasks.component.html 

```html
<div>this is my task list </div>
```

create tasks.component.ts 

```typescript 
import { Component } from '@angular/core';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {}
```

create tasks.module.ts

```typescript
import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { TasksComponent } from './tasks.component';

@NgModule(Framing((framing) => framing
  .componentAndDeclare(TasksComponent)))
export class TasksModule {}
```

now we have the tasks screen, but we have to do 2 things! 

1. import the tasks module
2. add tasks as a child route of the app 

first, import the tasks module 

```typescript
import { TasksModule } from './tasks/tasks.module';
```

then the Tasks screen to the sideNavItems array 

```typescript
.frame(new AppFramer().model({
    title: 'Tasknas',
    sideNavItems: [
      { label: 'Dashboard', routerLink: '/dashboard' },
      { label: 'Tasks', routerLink: '/tasks' },
    ],
  }))
```

then add another item to the .children array

```typescript
  .children([
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
    { path: 'tasks', loadChildren: () => TasksModule },
  ])))
```

hit save and the app will auto refresh in the browser and you’ll now see the tasks screen and you can navigate to it 
