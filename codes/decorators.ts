//decorators
/**
 * 
 *Decorators are like special instructions you write above your class, method, property, or parameter.
 *These instructions tell TypeScript what extra things to do with that part of your code when it's being compiled.
 *They let you add extra features, change behavior, or gather information about your code without changing the code itself.
 * 
 */

// function Logger(constructor : Function) {
//     console.log("Logging ....");
//     console.log(constructor);
// }

function Logger(logString : string) {
    console.log('LOGGER FACTORY');
    return function(constructor : Function){
    console.log(logString);
    console.log(constructor);  
    }
}

function WithTempate(template : string, hookId : string){
    console.log('TEMPLATE FACTORY');
    return function<T extends {new(...args: any[]):{name:string}}>(originalConstructor: T) {
          return class extends originalConstructor {
            constructor(...args: any[]){
                super();
                console.log('Rendering template ....');
                const hookEl = document.getElementById(hookId)
                
                if(hookEl){
                  hookEl.innerHTML = template;
                  hookEl.querySelector('h1')!.textContent = this.name;
                }
            }
          }
    }
}

//can add multiple decorators

@Logger('LOGGING _ PERSON')
@WithTempate('<h1>My Person Object</h1>','app')
class Person{
    name = "Yukinon"

    constructor(){
        console.log('Creating person object...');
    }

}

const pers = new Person()
console.log(pers);

//property decorator

function Log(target : any, propertyName : string | symbol){
    console.log('Property decorator');
    console.log(target,propertyName);

}

function Log2(target : any, name : string, descriptor: PropertyDescriptor){
    console.log('Accessor decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

function Log3(
    target : any, 
    name : string, 
    descriptor: PropertyDescriptor
    ){
    console.log('Method decorator!');
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

function Log4(target : any, name : string, position : number){
    console.log('Parameter decorator!');
    console.log(target)
    console.log(name)
    console.log(position)

}


class Product{
    @Log
    title:string;
    private _price:number

    @Log2
    set price(val:number){
        if(val > 0) {this._price =val}
        else { throw new Error('invalid price - should be positive')}
    }

    constructor(t:string, p:number){
        this.title = t
        this._price = p
    }

    @Log3
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1+tax)
    }
}

const b1 = new Product('book 1', 23)
const b2 = new Product('book 2', 1000)
console.log(b1);
console.log(b2);


function Autobind(target : any, methodName : string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value
    const adjDescriptor : PropertyDescriptor = {
        configurable: true,
        enumerable : false,
        get(){
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

class Printer{
    message = 'Yukinon'

    @Autobind
    showMessage(){
        console.log(this.message);
    }
}
const p = new Printer()

const button = document.querySelectorAll('button')!;
button[1].addEventListener('click', p.showMessage);

//----Validation with decorators

interface ValidatorConfig{
    [property: string] : {
        [validatableProp : string]: string[] //[required , positive]
    }
}

const registeredValidators: ValidatorConfig = {};
 
function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required']
    };
}
 
function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive']
    };
}

function validate(obj : any){
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if(!objValidatorConfig){
        return true
    }
    let isValid = true;
    for(const prop in objValidatorConfig){
        //console.log(prop);
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop]
                    break;
                case 'positive' :
                    isValid = isValid && obj[prop] > 0
                    break;
            }
        }
    }
    return isValid
}

class Course {
    
    @Required
    title : string

    @PositiveNumber
    price: number

    constructor(t:string, p:number){
        this.title =t
        this.price = p
    }
}

const courseForm = document.querySelector('form')!;
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement


    const title = titleEl.value
    const price = +priceEl.value


    const createdCourse = new Course(title , price);

    if(!validate(createdCourse)){
        alert('Invalid input, please try again!')
        return
    }
    console.log(createdCourse);

})