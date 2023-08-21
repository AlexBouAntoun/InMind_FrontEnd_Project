import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../pages/log-in/log-in.component.scss']
})
export class SignUpComponent {

  @Output() openSigninPageOutput = new EventEmitter();

  constructor(
    private router: Router,
  ) { }

  openSigninPage() {
    this.router.navigate(['/signin']);
  }

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

}
