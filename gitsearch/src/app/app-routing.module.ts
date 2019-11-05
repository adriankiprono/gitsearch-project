import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DispalyinfoComponent} from './dispalyinfo/dispalyinfo.component'
import {AboutComponent} from './about/about.component'



const routes: Routes = [
  {path:'displayinfo',component:DispalyinfoComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
