import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(private as: AuthService) {}

  login() {
    this.as.authorize();
  }
}
