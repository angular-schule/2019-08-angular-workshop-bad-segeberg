import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';

  constructor(private as: AuthService) {


    const producer = function(o) {
      o.next(1);
      o.next(2);
      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.complete(), 3000);
    }

    const observer = {
      next: e => console.log(e),
      error: err => console.error(err),
      complete: () => console.log('Wochenende!')
    };

    // producer(observer);



    const myObs$ = new Observable(producer);
    myObs$.subscribe(observer);






  }

  login() {
    this.as.authorize();
  }
}
