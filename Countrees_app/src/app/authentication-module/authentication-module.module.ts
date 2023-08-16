import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationModuleRoutingModule } from './authentication-module-routing.module';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationModuleRoutingModule
  ],
  exports: [
    SignUpComponent,
    SignInComponent
  ]
})
export class AuthenticationModuleModule { }
