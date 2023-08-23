import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SignupForm } from '../../models/sign-up.model';
import { LoginService } from '../../services/log-in.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '../../pages/log-in/log-in.component.scss'],
  providers: [LoginService]
})
export class SignUpComponent {

  @Output() openSigninPageOutput = new EventEmitter();

  signUpError: string | null = null;
  signupForm: SignupForm = new SignupForm();
  isAdmin: boolean = false;
  terms: boolean = false;

  constructor(
    private router: Router,
    private login_service: LoginService
  ) { }

  openSigninPage() {
    this.router.navigate(['/signin']);
  }

  // signUp() {
  //   if (this.terms) {
  //     this.login_service.signUp(this.signupForm).subscribe({
  //       next: (result) => {
  //         this.router.navigate(['']);
  //       },
  //       error: (error) => {
  //         console.error('Error during sign up:', error);
  //         if (error.status === 400) {
  //           this.signUpError = 'Invalid sign-up data';
  //         } else {
  //           this.signUpError = 'An error occurred during sign up';
  //         }
  //       }
  //     });
  //   } else {
  //     alert("Please select terms and conditions");
  //   }
  // }
  

  signUp() {
    if (this.terms == true) {
      if (this.isAdmin == true) {
        this.signupForm.RoleName = "Admin";
      }
      else {
        this.signupForm.RoleName = "";
      }

      this.login_service.signUp(this.signupForm, this.isAdmin).subscribe(result => {
        this.router.navigate(['']);
      });
    }
    else{
      alert("Please select terms and codition");
    }
  }

}
