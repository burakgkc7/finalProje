import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { GirisComponent } from './components/giris/giris.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*import { DetayComponent } from './components/detay/detay.component';*/
import { HomeComponent } from './components/home/home.component';
/*import { PopulerComponent } from './components/populer/populer.component';*/
import { AdmingirisComponent } from './components/admingiris/admingiris.component';
import { DetayComponent } from './components/detay/detay.component';

const routes: Routes = [
  /*{path:'populer' , component:PopulerComponent},*/
  {path:'' , component:HomeComponent},
  {path:'detay/:key' ,component:DetayComponent},
  {path:'girisyap' ,component:GirisComponent},
  {path:'admin' ,component:AdmingirisComponent},
  {path:'login' ,component:LoginComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
