@title
Tasknas - Lastly

@intro
Lastly

@description

### **LASTLY**

Tasks need more than a label so to do that create `src/app/tasks/view` folder and add this code into a `task-form.component.ts` file: 

<code-example path="tasknas/pt4/task-form.component.ts" title="src/app/tasks/view/task-form.component.ts" linenums="false"></code-example>

and create a `task-form.component.html` with this code: 

<code-example path="tasknas/pt4/task-form.component.html" title="src/app/tasks/view/task-form.component.html" linenums="false"></code-example>

and create `tasks-view.module.ts` and add this in: 

<code-example path="tasknas/pt4/tasks-view.module.ts" title="src/app/tasks/view/tasks-view.module" linenums="false"></code-example>

and then go back into the `tasks.module.ts` file and add in: 

<code-example path="tasknas/pt4/1.ts" linenums="false"></code-example>

then in `tasks.module.ts` file above the `.frame()` method add in: 

<code-example path="tasknas/pt4/2.ts" linenums="false"></code-example>

then (in the `tasks.module.ts`) add this into the `ItemFramer` config: 

<code-example path="tasknas/pt4/3.ts" linenums="false"></code-example>

Save that and go check the app out. You'll see now selecting an existing task or creating a new one you can now mark your task as done and set a due date.

Go ahead, update your tasks, have a beer, celebrate your success!

You can see a more full featured version of Tasknas on GitHub: [ng-tasknas-demo](https://github.com/framing/ng-tasknas-demo)

You can examine the Tasknas Framers source on GitHub here: [ng-tasknas-framers](https://github.com/framing/ng-framing/tree/master/packages/ng-tasknas-framers)
