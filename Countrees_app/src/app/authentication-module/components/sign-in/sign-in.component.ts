import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { LoginService } from '../../services/log-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../../pages/log-in/log-in.component.scss'],
  providers: [LoginService]
})
export class SignInComponent {
  @Output() openSignupPageOutput = new EventEmitter();


  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private login_service: LoginService,
    private cookie_service: CookieService
  ) { }

  // DynamicRouter(linkName : string) {
  //   if(linkName == 'sign-in')
  //   {
  //     this.router.navigate(['/home'])
  //   }
  // }

  LogIn() {
    this.login_service.Login(this.email, this.password).subscribe(result => {
      this.cookie_service.set('AuthToken', result.Login.AccessToken);
      //this.cookieValue = this.cookieService.get('AuthToken');
      this.router.navigate(['/home/countrieslisting']);
    });
  }

  openSignupPage() {
    this.router.navigate(['/signup']);
  }

}
