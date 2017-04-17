@title
Tasknas - Create a Screen

@intro
Create a Screen

@description

### **LET'S CREATE A SCREEN**

we’ll start with the dashboard 

inside the app folder, create a folder called dashboard 

and inside that folder create three files: 

dashboard.component.html

```html
<div>Welcome to the dashboard</div>
```

dashboard.component.ts (this is just a regular dashboard component) 

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
```

dashboard.module.ts

```typescript 
import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DashboardComponent } from './dashboard.component';

@NgModule(Framing((framing) => framing
  .componentAndDeclare(DashboardComponent),
))
export class DashboardModule {}
```

now we have the dashboard screen, but we have to do 3 things to src/app/app.module.ts! 

1. import the dashboard module
2. add dashboard as a child route of the app 
3. re-direct to that route when we load the app 

first, import the dashboard module
```typescript
import { DashboardModule } from './dashboard/dashboard.module';
```

then add a .route() and .children() call chained to the .frame() method 
```typescript
  .route({}, {
    forRoot: true,
    extraRootRouterOptions: {
      enableTracing: true,
      useHash: true,
    },
  })
  .children([
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
  ])
 ```

it will now appear in your browser when you hit save, but it’s not listed in the side nav

to do that we need to add sideNavItems array with a single item in it (dashboard) 

```typescript
  .frame(new AppFramer().model({
    title: 'Tasknas',
    sideNavItems: [
      { label: 'Dashboard', routerLink: '/dashboard' },
    ],
  }))
```

In case you're not seeing the exciting result I'm describing, here is what your code should look like now:

```typescript
import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { AppFramer } from '@framing/ng-tasknas-framers';

import { DashboardModule } from './dashboard/dashboard.module';

@NgModule(Framing((framing) => framing
  .frame(new AppFramer().model({
    title: 'Tasknas',
    sideNavItems: [
      { label: 'Dashboard', routerLink: '/dashboard' },
    ],
  }))
  .route({}, {
    forRoot: true,
    extraRootRouterOptions: {
      enableTracing: true,
      useHash: true,
    },
  })
  .children([
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
  ])))
export class AppModule {}

```

Now you have an app, with a screen, and it’s in the side nav...GREAT JOB! 