import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

interface MyState {
  counter: number;
  foo: string;
  bar: number;
}


@Injectable({
  providedIn: 'root'
})
export class StateService {

  input$ = new Subject<string>();
  state$: Observable<MyState>;

  initialState = {
    counter: 0,
    foo: 'hallo',
    bar: 42
  };

  constructor() {
    this.state$ = this.input$.pipe(
      startWith('INIT'),
      scan(this.reducer, this.initialState)
    );

    this.state$.subscribe(console.log)
  }


  reducer(sum: MyState, input: string): MyState {
    switch (input) {
      case 'INCREMENT': return { ...sum, counter: sum.counter + 1 };
      case 'DECREMENT': return { ...sum, counter: sum.counter - 1 };
      case 'RESET': return { ...sum, counter: 0 };
      case 'FOOBYE': return { ...sum, foo: 'bye' };
      case 'INIT': return {
        counter: 0,
        foo: 'hallo',
        bar: 42
      };
      default: return sum;
    }
  }
}
