import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './authentication-module/pages/log-in/log-in.component';
import { HomeComponent } from './countries-module/pages/home/home.component';

import { appGuard } from './app.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./authentication-module/authentication-module.module').then(m => m.AuthenticationModuleModule)
  },
  {
    path: 'home',
    canActivateChild: [appGuard],
    loadChildren: () => import('./countries-module/countries-module.module').then(m => m.CountriesModuleModule)    
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
