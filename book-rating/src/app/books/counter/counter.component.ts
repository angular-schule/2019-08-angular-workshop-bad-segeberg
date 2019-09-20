import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../shared/state.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$ = this.state.state$.pipe(
    map(state => state.counter)
  );

  constructor(private state: StateService) { }

  ngOnInit() {
  }

  increment() {
    this.state.input$.next('INCREMENT');
  }

  decrement() {
    this.state.input$.next('DECREMENT');
  }

  reset() {
    this.state.input$.next('RESET');
  }

  fooBye() {
    this.state.input$.next('FOOBYE');
  }

}
