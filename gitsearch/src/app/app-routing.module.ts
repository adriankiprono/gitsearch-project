import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DispalyinfoComponent} from './dispalyinfo/dispalyinfo.component'



const routes: Routes = [
  {path:'displayinfo',component:DispalyinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
