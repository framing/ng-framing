@title
Tasknas - Create a Screen

@intro
Create a Screen

@description

### **LET'S CREATE A SCREEN**

we’ll start with the dashboard 

inside the app folder, create a folder called `dashboard`

and inside that folder create three files: 

`dashboard.component.html`

<code-example path="tasknas/pt1/dashboard.component.html" title="src/dashboard/dashboard.component.html" linenums="false"></code-example>

`dashboard.component.ts` (this is just a regular dashboard component) 

<code-example path="tasknas/pt1/dashboard.component.ts" title="src/dashboard/dashboard.component.ts" linenums="false"></code-example>

`dashboard.module.ts`

<code-example path="tasknas/pt1/dashboard.module.ts" title="src/dashboard/dashboard.module.ts" linenums="false"></code-example>

now we have the dashboard screen, but we have to do 3 things to `src/app/app.module.ts`!

1. import the dashboard module
2. add dashboard as a child route of the app 
3. re-direct to that route when we load the app 

first, import the dashboard module

<code-example path="tasknas/pt1/1.ts" linenums="false"></code-example>

then add a `.route()` and `.children()` call chained to the `.frame()` method 

<code-example path="tasknas/pt1/2.ts" linenums="false"></code-example>

it will now appear in your browser when you hit save, but it’s not listed in the side nav

to do that we need to add sideNavItems array with a single item in it (dashboard) 

<code-example path="tasknas/pt1/3.ts" linenums="false"></code-example>

In case you're not seeing the exciting result I'm describing, here is what your code should look like now:

<code-example path="tasknas/pt1/app.module.ts" title="src/app/app.module.ts" linenums="false"></code-example>

Now you have an app, with a screen, and it’s in the side nav...GREAT JOB! 