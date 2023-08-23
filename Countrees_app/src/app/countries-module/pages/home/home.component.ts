import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user_name: string = "";

  constructor(
    private cookie_service: CookieService
  ) { }

  ngOnInit() {
    this.user_name = this.cookie_service.get('UserName');
  }
}
