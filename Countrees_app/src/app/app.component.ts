import { Component } from '@angular/core';
//import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Countrees_app';
  public show_login_page : boolean = true;
  public show_home_page : boolean = false;
}
