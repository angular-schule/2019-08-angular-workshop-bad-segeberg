export class Customer<T> {

    constructor(public id: number) {}

    fooBar(foo: T): string {
        setTimeout(() => console.log('ID ist', this.id), 2000);
        return `Hallo
Welt!
Die ID ist ${this.id}!
        `;

        // return 'Hallo\nWelt! Die ID ist ' + this.id + '!';
    }

    foo(bar: string | number) {
        if(typeof bar === 'number') {
            return bar;
        }

        return bar;
    }
}