import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './authentication-module/pages/log-in/log-in.component';
import { HomeComponent } from './countries-module/pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: "login",
  component: LogInComponent
  // outlet: 'main',
//   children: [
//     {
//       path: "",
//       redirectTo: 'signin',
//       pathMatch: 'full'
//     },
//     {
//        path: 'signin',
//        loadChildren: () => import('./authentication-module/authentication-module.module').then(m => m.AuthenticationModuleModule)
//     }
// ]
},
{ 
  path: "home",
component: HomeComponent
// outlet: 'main_outlet'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
