"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(69, 69));
let greet;
greet = {
    name: 'Yukinon',
    greet(phrase) {
        console.log(`${phrase} i am ${this.name}`);
    }
};
greet.greet(`hello there `);
class Person {
    name;
    age = 17;
    constructor(n) {
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(`${phrase} i am ${this.name}`);
        }
        else {
            console.log('Hi!');
        }
    }
}
let usr1 = new Person();
usr1.greet("hi there");
console.log(usr1);
//# sourceMappingURL=app.js.map