import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesListingComponent } from './components/countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "countrieslisting",
        component: CountriesListingComponent,
      },
      {
        path: "countrydetails/:name",
        component: CountryDetailsComponent,
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesModuleRoutingModule { }
