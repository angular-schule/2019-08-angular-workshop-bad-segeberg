import { Customer } from './customer';

const myCustomer = new Customer<number>(3);
const myString = myCustomer.fooBar(4);
console.log(myString);