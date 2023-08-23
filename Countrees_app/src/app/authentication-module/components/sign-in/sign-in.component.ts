import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { NgxPermissionsService } from 'ngx-permissions';
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

  authenticationError: string | null = null;
  login_form: FormGroup;

  constructor(
    private router: Router,
    private login_service: LoginService,
    private permission_service: NgxPermissionsService,
    private cookie_service: CookieService,
    private formBuilder: FormBuilder
  ) {
    this.login_form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.login_form.get('email');
  }

  get password() {
    return this.login_form.get('password');
  }

 async LogIn() {
    if (this.login_form.invalid) {
      return;
    }
  
    const email = this.email!.value;
    const password = this.password!.value;
  
    this.login_service.Login(email, password).subscribe({
      next: (result: any) => {
        this.cookie_service.set('AuthToken', result.Login.AccessToken);

        let decodedToken: any;
        decodedToken = this.decodeToken(result.Login.AccessToken);
        this.permission_service.loadPermissions(decodedToken.realm_access.roles);
        
        this.cookie_service.set('UserName', decodedToken.given_name);
        
        this.router.navigate(['/home/countrieslisting']);
      },
      error: (error: any) => {
        console.error('Error during sign in:', error);
        if (error.status === 401) {
          this.authenticationError = '*Invalid email or password';
        } else {
          this.authenticationError = '*An error occurred during sign in';
        }
      }
    });
  }
  
  decodeToken(token: string) {
    if (!token) {
      return;
    }
    const _decodeToken = (token: string) => {
      try {
        return JSON.parse(atob(token));
      } catch {
        return;
      }
    };
    return token
      .split('.')
      .map(token => _decodeToken(token))
      .reduce((acc, curr) => {
        if (!!curr) acc = { ...acc, ...curr };
        return acc;
      }, Object.create(null));
  }

  openSignupPage() {
    this.router.navigate(['/signup']);
  }



  //   // email: string = '';
  //   // password: string = '';

  //   login_form = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl(''),
  // })
  //   constructor(
  //     private router: Router,
  //     private login_service: LoginService,
  //     //private permissions_service: NgxPermissionsService,
  //     private cookie_service: CookieService
  //   ) { }

  //   // DynamicRouter(linkName : string) {
  //   //   if(linkName == 'sign-in')
  //   //   {
  //   //     this.router.navigate(['/home'])
  //   //   }
  //   // }

  //   get user(){
  //     return this.login_form.get('user')
  //   }

  //   LogIn() {
  //     this.login_service.Login(this.email, this.password).subscribe(result => {
  //       this.cookie_service.set('AuthToken', result.Login.AccessToken);
  //       //this.permissions_service.loadPermissions(['admin']);
  //       this.router.navigate(['/home/countrieslisting']);
  //     });
  //   }

  //   openSignupPage() {
  //     this.router.navigate(['/signup']);
  //   }

}
