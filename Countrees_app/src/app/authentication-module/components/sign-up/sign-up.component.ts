import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../pages/log-in/log-in.component.scss']
})
export class SignUpComponent {

  @Output() openSigninPageOutput = new EventEmitter();

  constructor() {}

  openSigninPage() 
  {
    this.openSigninPageOutput.emit();
  }

  firstName: string ='';
  lastName: string ='';
  email: string = '';
  password: string = '';

}
