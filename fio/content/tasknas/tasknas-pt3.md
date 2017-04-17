@title
Tasknas - Manage tasks

@intro
Manage tasks

@description

### **USE ITEM FRAMER TO MANAGE TASKS**

So, that's not really a great list of tasks. To fix that, lets use ItemFramer

AppFramer provides standard requirements that would be in a Material based app 

ItemFramer provides standard requirements around managing data (CRUD)

Complete the following in src/app/tasks/tasks.module.ts

step 1 - import the item framer 

```typescript
import { ItemFramer } from '@framing/ng-tasknas-framers';
```

step 2 - get rid of the custom tasks component you made and replace it

so this line: 

```typescript
  .componentAndDeclare(TasksComponent))
```

becomes this:

```typescript
  .frame(new ItemFramer({
    items: [
      { label: 'Do laundry' },
      { label: 'Clean dishes' },
      { label: 'Wash car' },
    ],
  }))))
```

### **LET’S KEEP YOUR DATA AROUND FOR A WHILE**

we will persist it by using firebase (neat!)

go to your terminal window and kill the app by hitting “ctrl + c”

step 1 - install the firebase dependencies 

```
npm i angularfire2 firebase --save
``` 

then you have to go to the firebase website, click “get started” and signup for an account to create a new project.

http://firebase.google.com

If this is your first project with Firebase you'll be presented with API access keys. Save this information for a later step.
Otherwise select "Add Firebase to your web app" to see those API credentials

Next, we need to enable read/write access to your data. Click "Database" from the left menu, select the "Rules" tab and paste the following in to the editor:

```json
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

then go into the src/app/app.module.ts and import the firebase module 

```typescript
import { AngularFireModule } from 'angularfire2';
```

next (above @NgModule) you’re going to configure firebase

```typescript
export const firebaseConfig = {
 apiKey: '<your-key>',
 authDomain: '<your-project-authdomain>',
 databaseURL: '<your-database-URL>',
 storageBucket: '<your-storage-bucket>',
 messagingSenderId: '<your-messaging-sender-id>'
};
```

^ populate this with all of the specifics that firebase gave you when you set up your account (you can copy paste this from firebase) 

above your .frame() method, include this: 

```typescript
.import(AngularFireModule.initializeApp(firebaseConfig))
```

next, open src/app/tasks/tasks.module.ts file 

Import the firebase adaptor we created 

```typescript
import { ItemDataFirebaseService, ItemFramer } from '@framing/ng-tasknas-framers';
```

next, we are going to update ItemFramer so that it is now longer a static array of tasks 

```typescript
@NgModule(Framing((framing) => framing
  .frame(new ItemFramer()
    .itemDataProvider(ItemDataFirebaseService)
    .model({
      endpoint: 'tasks',
    }))))
export class TasksModule {}
 ```

hit save - the screen will reload 

now for the magic 

if you know the local IP address of your computer you can load the app in a browser on your phone and add a new task, it will then show up in the browser of your computer...NEAT!