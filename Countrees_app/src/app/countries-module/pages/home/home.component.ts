import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public show_countrieslisting_page: boolean = true;
  public show_countrydetails_page: boolean = false;

}
