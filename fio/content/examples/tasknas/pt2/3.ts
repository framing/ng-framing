  .children([
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', loadChildren: () => DashboardModule },
    { path: 'tasks', loadChildren: () => TasksModule },
  ])))
