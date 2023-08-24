import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';

import { combineLatest } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { NgxPermissionsService } from 'ngx-permissions';

import { CountrieslistService } from '../../services/countrieslist.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
  providers: [CountrieslistService], 
})
export class CountryDetailsComponent implements OnInit {
  
  country: any = {
    name: {},
    flags: {},
    currencies: {},
  };
  //name: string ='';
  // region : string = '';
  // capital_city : string = '';
  // language : string = '';
  // currency : string = '';
  // country_code : string = '';
  // calling_code: string = '';
  // border_countries: any[] = [];
  myControl = new FormControl();
  

  // private _filter(value: string, auth_token: string | null): any[] {
  //   const filterValue = value.toLowerCase();
  //   let filteredCountries: any[] = this.countries_original.filter(x => x.name.common.toLowerCase().indexOf(filterValue) == 0);
  //   return filteredCountries;
  // }

  constructor(
    private countries_list_service: CountrieslistService,
    private permission_service: NgxPermissionsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let auth_token = localStorage.getItem('AuthToken');
      this.countries_list_service.Getcountryname(auth_token, params["name"]).subscribe(country => {
        this.country = country[0];
      })
    });

  } 
  
  openCountryListingPage() {
      this.router.navigate(['/countrieslisting']);
    }

    // let auth_token = localStorage.getItem('AuthToken');

    // this.countries_list_service.Getcountryregion(auth_token).subscribe(country => {
    //   this.region = country;
    // })

    // this.countries_list_service.Getcountrycapitalcity(auth_token).subscribe(country => {
    //   this.capital_city = country;
    // })

    // this.countries_list_service.Getcountrylanguage(auth_token).subscribe(country => {
    //   this.language = country;
    // })

    // this.countries_list_service.Getcountrycurrency(auth_token).subscribe(country => {
    //   this.currency = country;
    // })

    // this.countries_list_service.Getcountrycode(auth_token).subscribe(country => {
    //   this.country_code = country;
    // })


    // this.region = Getcountryregion(auth_token).subscribe(x => {
      
    // });

    // this.roles = this.permission_service.getPermissions();

    // let auth_token = localStorage.getItem('AuthToken');

    // this.countries_list_service.Getcountries(auth_token).subscribe(countries_res => {
    //   this.countries_original = countries_res;
    //   this.filteredOptions = this.countries_original.map(item => item.name.common);

    //   combineLatest([countries_res, this.myControl.valueChanges.pipe(startWith(''))]).subscribe(([countries, value]) => {
    //     let filteredCountries = this._filter(value || '', auth_token);
    //     this.countries = filteredCountries;
    //     this.filteredOptions = filteredCountries.map(item => item.name.common);
    //   });
    // });

  

}
