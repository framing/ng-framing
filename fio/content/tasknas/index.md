@title
Tasknas Tutorial

@intro
The Tasknas tutorial takes you through the steps of creating an Angular application using Framing.

@description
How to build the tasknas app with framing

### **CLONE THE PROJECT**

Use our ng-app project to get started

`git clone https://github.com/biznas/ng-app.git tasknas`

### **NPM INSTALL**

```   
cd tasknas
npm i
npm start
```

loads app and developer dependencies (these are maintained by Ryan Campbell) 

### **SETTING UP MATERIAL DESIGN**

open up `http://localhost:8080` in a browser, you’ll see a starter screen 

the welcome screen is nice, but we want our app to look like a material app

open up the `src/app/app.module.ts`, and this is what you’re going to see 

<code-example path="tasknas/getting-started/1.ts" title="src/app/app.module.ts" linenums="false"></code-example>

The ng-app project got you up and running quickly with Angular 4, but it's not much of an app yet. To help with that, I'll introduce you to the `AppFramer`, it's job is to enforce the [Google Material Layout Structure Guidelines](https://material.io/guidelines/layout/structure.html).

To do this:

`npm i @framing/ng-tasknas-framers --save`

Open up `src/app/app.module.ts`, remove the `AppComponent` import and replace it with the following:

<code-example path="tasknas/getting-started/2.ts" linenums="false"></code-example>

And replace:

<code-example path="tasknas/getting-started/3.ts" linenums="false"></code-example>

with:

<code-example path="tasknas/getting-started/4.ts" linenums="false"></code-example>

Ok, wait for it to build, your browser will automatically refresh.

Woo hoo! Now it’s looking like a Material Design app!

### **WHAT'S NEXT?**

Give your app a name by configuring it in the `AppFramer`

<code-example path="tasknas/getting-started/5.ts" linenums="false"></code-example>

as you can see in the screenshot, everything is strongly typed, so if your editor supports it, it will auto complete 

![auto complete.png](https://cloud.githubusercontent.com/assets/21727664/24475046/93d027a8-1483-11e7-805f-eb56be718fc2.png)

hit save, and you’ll see the changes automatically in the browser 

