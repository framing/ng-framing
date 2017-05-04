@title
Tasknas - Manage tasks

@intro
Manage tasks

@description

### **USE ITEM FRAMER TO MANAGE TASKS**

So, that's not really a great list of tasks. To fix that, lets use `ItemFramer`

`AppFramer` provides standard requirements that would be in a Material based app 

`ItemFramer` provides standard requirements around managing data (CRUD)

Complete the following in `src/app/tasks/tasks.module.ts`

step 1 - import the `ItemFramer`

<code-example path="tasknas/pt3/1.ts" linenums="false"></code-example>

step 2 - get rid of the custom `TasksComponent` you made and replace it

so this line: 

<code-example path="tasknas/pt3/2.ts" linenums="false"></code-example>

becomes this:

<code-example path="tasknas/pt3/3.ts" linenums="false"></code-example>

### **LET’S KEEP YOUR DATA AROUND FOR A WHILE**

we will persist it by using Firebase (neat!)

go to your terminal window and kill the app by hitting `ctrl + c`

step 1 - install the Firebase dependencies 

`npm i angularfire2 firebase --save`

then you have to go to the [Firebase website](http://firebase.google.com), click “get started” and signup for an account to create a new project.

If this is your first project with Firebase you'll be presented with API access keys. Save this information for a later step.
Otherwise select "Add Firebase to your web app" to see those API credentials

Next, we need to enable read/write access to your data. Click "Database" from the left menu, select the "Rules" tab and paste the following in to the editor:

<code-example path="tasknas/pt3/firebase.json" linenums="false"></code-example>

then go into the `src/app/app.module.ts` and import the Firebase module 

<code-example path="tasknas/pt3/4.ts" linenums="false"></code-example>

next (above `@NgModule`) you’re going to configure Firebase

<code-example path="tasknas/pt3/5.ts" linenums="false"></code-example>

^ populate this with all of the specifics that Firebase gave you when you set up your account (you can copy paste this from Firebase) 

above your `.frame()` method, include this: 

<code-example path="tasknas/pt3/6.ts" linenums="false"></code-example>

next, open `src/app/tasks/tasks.module.ts` file 

Import the Firebase adaptor we created 

<code-example path="tasknas/pt3/7.ts" linenums="false"></code-example>

next, we are going to update `ItemFramer` so that it is now longer a static array of tasks 

<code-example path="tasknas/pt3/8.ts" linenums="false"></code-example>

hit save - the screen will reload 

now for the magic 

if you know the local IP address of your computer you can load the app in a browser on your phone and add a new task, it will then show up in the browser of your computer...NEAT!