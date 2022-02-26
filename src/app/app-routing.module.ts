import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './Component/about/about.component';

import {ContactComponent} from './Component/contact/contact.component';
import { HomeComponent } from './Component/home/home.component';

import {LoginComponent} from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';

import {RegisterComponent} from './Component/register/register.component';


const routes: Routes = [
  { path:'contact', component: ContactComponent },
  { path:'about', component: AboutComponent },
  { path:'login',component:LoginComponent },
  { path:'register',component:RegisterComponent},
  { path:'home',component:HomeComponent},
  { path:'logout',component:LogoutComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
