import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoLanding } from './todo-landing';
import { List } from './pages/list/list';
import { Add } from './pages/add/add';

const routes: Routes = [
  {path:'', component:TodoLanding , children:[
   {path:'', redirectTo:'list' , pathMatch:'full'},
   {path:'add', component:Add},
   {path:'list', component:List}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
