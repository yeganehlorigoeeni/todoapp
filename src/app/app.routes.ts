import { Routes } from '@angular/router';

export const routes: Routes = [
    { path:'',loadChildren: () => import("./modules_/todo/todo-module").then(m => m.TodoModule)}
];
