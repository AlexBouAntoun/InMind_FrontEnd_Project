import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './authentication-module/pages/log-in/log-in.component';
import { HomeComponent } from './countries-module/pages/home/home.component';

import { AuthenticationModuleModule } from './authentication-module/authentication-module.module';
import { CountriesModuleModule } from './countries-module/countries-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
    , NgxPermissionsModule.forRoot()
    , AuthenticationModuleModule
    , CountriesModuleModule
    , HttpClientModule
    , ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
