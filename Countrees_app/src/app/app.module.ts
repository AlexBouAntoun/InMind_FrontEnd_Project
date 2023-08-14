import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CountriesListingComponent } from './countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
//authentication module coutries modules
//component services w models bl module
//login page w sign up bel autheticatin module
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    CountriesListingComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
