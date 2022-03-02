import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerComponent} from './Component/customer/customer.component';
import { HomeComponent } from './Component/home/home.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch: 'full'},
  { path:'customer',component:CustomerComponent},
  { path:'home',component:HomeComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
