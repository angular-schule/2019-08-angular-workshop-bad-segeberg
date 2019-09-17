export declare class Customer<T> {
    id: number;
    constructor(id: number);
    fooBar(foo: T): string;
    foo(bar: string | number): string | number;
}
