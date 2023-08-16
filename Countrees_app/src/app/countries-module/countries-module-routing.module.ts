import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountriesListingComponent } from './components/countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

const routes: Routes = [
  { 
    path: "countrieslisting",
  component: CountriesListingComponent,
  outlet: "home_outlet"
},
{ 
  path: "countrydetails",
component: CountryDetailsComponent,
outlet: "home _outlet"
}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesModuleRoutingModule { }
