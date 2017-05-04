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
