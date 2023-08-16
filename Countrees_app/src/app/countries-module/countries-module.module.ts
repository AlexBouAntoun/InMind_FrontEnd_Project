import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesModuleRoutingModule } from './countries-module-routing.module';//

import { CountriesListingComponent } from './components/countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';


@NgModule({
  declarations: [
    // CountriesListingComponent,
    CountryDetailsComponent
  ],
  imports: [
    CommonModule
    ,CountriesModuleRoutingModule//
    ,CountriesListingComponent////
  ],
  exports: [
    CountriesListingComponent,
    CountryDetailsComponent
  ]
})
export class CountriesModuleModule { }
