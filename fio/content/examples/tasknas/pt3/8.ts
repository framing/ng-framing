@NgModule(Framing((framing) => framing
  .frame(new ItemFramer()
    .itemDataProvider(ItemDataFirebaseService)
    .model({
      endpoint: 'tasks',
    }))))
export class TasksModule {}
