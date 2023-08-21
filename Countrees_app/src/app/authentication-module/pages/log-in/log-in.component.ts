import { Component } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  hero = 'Windstorm';
  public show_signin_page: boolean = true;
  public show_signup_page: boolean = false;

  signUp() {
    this.show_signin_page = false;
    this.show_signup_page = true;
  }
  signIn() {
    this.show_signin_page = true;
    this.show_signup_page = false;
  }

}
