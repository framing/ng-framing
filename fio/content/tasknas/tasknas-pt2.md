@title
Tasknas - Create a second screen

@intro
Create a second screen

@description

### **LET'S GET OUR SECOND SCREEN STARTED** 

Let’s add a task screen!

Inside the app folder create a `tasks` folder.

create a `tasks.component.html`

<code-example path="tasknas/pt2/tasks.component.html" title="src/tasks/tasks.component.html" linenums="false"></code-example>

create `tasks.component.ts`

<code-example path="tasknas/pt2/tasks.component.ts" title="src/tasks/tasks.component.ts" linenums="false"></code-example>

create `tasks.module.ts`

<code-example path="tasknas/pt2/tasks.module.ts" title="src/tasks/tasks.module.ts" linenums="false"></code-example>

now we have the tasks screen, but we have to do 2 things! 

1. import the `TasksModule`
2. add tasks as a child route of the app 

first, import the `TasksModule`

<code-example path="tasknas/pt2/1.ts" linenums="false"></code-example>

then the Tasks screen to the sideNavItems array 

<code-example path="tasknas/pt2/2.ts" linenums="false"></code-example>

then add another item to the `.children` array

<code-example path="tasknas/pt2/3.ts" linenums="false"></code-example>

hit save and the app will auto refresh in the browser and you’ll now see the tasks screen and you can navigate to it 
