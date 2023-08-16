import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  { 
    path: "signin",
  component: SignInComponent,
  outlet: "login_outlet"
},
{ 
  path: "signup",
component: SignUpComponent,
outlet: "login_outlet"
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationModuleRoutingModule { }
