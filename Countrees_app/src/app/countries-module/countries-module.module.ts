import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPermissionsModule } from 'ngx-permissions';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { CountriesModuleRoutingModule } from './countries-module-routing.module';

import { CountriesListingComponent } from './components/countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';


@NgModule({
  declarations: [
    CountryDetailsComponent
    , CountriesListingComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
    , NgxPermissionsModule.forChild()
    , CountriesModuleRoutingModule    
  ],
  exports: [
    CountriesListingComponent,
    CountryDetailsComponent
  ]
})
export class CountriesModuleModule { }
