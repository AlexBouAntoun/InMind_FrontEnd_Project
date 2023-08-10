import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { CountriesListingComponent } from './countries-listing/countries-listing.component';
// import { CountruDetailsComponent } from './countru-details/countru-details.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    CountriesListingComponent,
    // CountruDetailsComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
