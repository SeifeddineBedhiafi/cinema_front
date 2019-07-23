import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DetailsigninComponent } from './detailsignin/detailsignin.component';
import { ProfileComponent } from './profile/profile.component';
import { FilmsComponent } from './films/films.component';
import { TheatreComponent } from './theatre/theatre.component';

import { DetailtheathtesigninComponent } from './detailtheathtesignin/detailtheathtesignin.component';


const routes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'detailsignin', component: DetailsigninComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'theatre', component: TheatreComponent },

  { path: 'detailtheatresignin', component: DetailtheathtesigninComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
