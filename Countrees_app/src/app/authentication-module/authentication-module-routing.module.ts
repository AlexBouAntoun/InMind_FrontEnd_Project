import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  {
    path: "",
    component: LogInComponent,
    children: [
      {
        path: "",
        redirectTo: 'signin',
        pathMatch: 'full'
      },
      {
        path: "signin",
        component: SignInComponent,
      },
      {
        path: "signup",
        component: SignUpComponent,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationModuleRoutingModule { }
