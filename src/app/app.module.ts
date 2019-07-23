import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { DetailsigninComponent } from './detailsignin/detailsignin.component';
import { ProfileComponent } from './profile/profile.component';
import { FilmsComponent } from './films/films.component';
import { TheatreComponent } from './theatre/theatre.component';

import { DetailtheathtesigninComponent } from './detailtheathtesignin/detailtheathtesignin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcceuilComponent,
    SigninComponent,
    SignupComponent,

    DetailsigninComponent,
    ProfileComponent,
    FilmsComponent,
    TheatreComponent,
 
    DetailtheathtesigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
