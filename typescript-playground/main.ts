import { Customer } from './customer';

const myCustomer = new Customer<number>(3);
const myString = myCustomer.fooBar('');
console.log(myString);