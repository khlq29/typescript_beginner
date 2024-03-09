"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(logString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTempate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(...args) {
                super();
                console.log('Rendering template ....');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = this.name;
                }
            }
        };
    };
}
let Person = class Person {
    name = "Yukinon";
    constructor() {
        console.log('Creating person object...');
    }
};
Person = __decorate([
    Logger('LOGGING _ PERSON'),
    WithTempate('<h1>My Person Object</h1>', 'app')
], Person);
const pers = new Person();
console.log(pers);
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
function Log2(target, name, descriptor) {
    console.log('Accessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}
class Product {
    title;
    _price;
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('invalid price - should be positive');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const b1 = new Product('book 1', 23);
const b2 = new Product('book 2', 1000);
console.log(b1);
console.log(b2);
function Autobind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer {
    message = 'Yukinon';
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelectorAll('button');
button[1].addEventListener('click', p.showMessage);
class Course {
    title;
    price;
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map