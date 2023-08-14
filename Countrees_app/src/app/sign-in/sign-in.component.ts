import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss', '../log-in/log-in.component.scss']
})
export class SignInComponent {


  @Output() openSignupPageOutput = new EventEmitter();

  constructor() {}

  openSignupPage() 
  {
    this.openSignupPageOutput.emit();
  }

  email: string = '';
  password: string = '';

}
