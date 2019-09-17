"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.fooBar = function (foo) {
        var _this = this;
        setTimeout(function () { return console.log('ID ist', _this.id); }, 2000);
        return "Hallo\nWelt!\nDie ID ist " + this.id + "!\n        ";
        // return 'Hallo\nWelt! Die ID ist ' + this.id + '!';
    };
    Customer.prototype.foo = function (bar) {
        if (typeof bar === 'number') {
            return bar;
        }
        return bar;
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map