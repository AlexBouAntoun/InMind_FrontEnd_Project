import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user_name: string | null = "";

  constructor(private router: Router,) { }

  ngOnInit() {
    this.user_name = localStorage.getItem('UserName');
  }

  openCountryListingPage() {
    this.router.navigate(['/countrieslisting']);
  }

}
