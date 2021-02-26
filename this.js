// It is a keyword that usually refers to the context where it is invoked and is determined at the time it is invoked.

const test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

