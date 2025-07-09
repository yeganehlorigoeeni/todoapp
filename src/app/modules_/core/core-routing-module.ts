import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoreLanding } from './core-landing';

const routes: Routes = [
  {path:'',component:CoreLanding,children:[
  {path:'',redirectTo:'login', pathMatch:'full'},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
