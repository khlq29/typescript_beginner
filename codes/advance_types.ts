//intersections type allows us to combine other types

type Admin = {
    name : string,
    privilages: string[]
}


type Employee = {
    name: string,
    startDate: Date
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name:"Yukinon",
    privilages : ["create server" , 'Accounts'],
    startDate : new Date()
}


console.log(e1);


type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric


//function overloads

function add(a: number, b:number):number
function add(a: string, b:string):string
function add(a: string, b:number):string
function add(a: number, b:string):string
function add(a: Combinable, b:Combinable){
    if (typeof a === 'string' || typeof b === 'string'){ //<---- this is a type guard
        return a.toString() + b?.toString()
    }
    return a + b
}

const result = add('Yukinon', 'Yukinoshita')
console.log(result.split(' ')); //since it is a string we can use string manipulaion

//optional chaining

const fetchedUserData = {
    id : 'u1',
    name : 'Chizuru',
    job: {
        title: 'CEO',
        description : 'My own company'
    }
}

console.log(fetchedUserData?.job?.title); //checks if the objects exist
//nullish coalescing

const userInput =  ''

const storedDAta = userInput ?? 'DEFAULT'
console.log(storedDAta);

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp:UnknownEmployee){
    console.log(`Name: ${emp.name}`);
    if('privilages' in emp){
        console.log(`Privilages: ${emp.privilages}`);  
      }
    if('startDate' in emp){
        console.log(`Start Date: ${emp.startDate}`);  
    }
    
}

printEmployeeInformation(e1);
printEmployeeInformation({
    name: 'Navia',
    startDate: new Date()
})


//type guard using classes
class Car{
    drive(){
        console.log('Driving....');
    }
}

class Truck{
    drive(){
        console.log('Driving a truck....');
    }

    loadCargo(amount:number){
        console.log('Cargo loaded>>>> ' + amount);
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle (vehicle: Vehicle){
    vehicle.drive();
    //if('loadCargo' in vehicle)
    //or
    if (vehicle instanceof Truck){
        vehicle.loadCargo(2000)
    }
}

useVehicle(v2)

useVehicle(v1)

//Discriminated Union

interface Bird{
    type:'bird'
    flyingSpeed : number
}

interface Horse{
    type : 'horse'
    runningSpeed : number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal){
    let speed
    switch (animal.type){
        case "bird":
            speed = animal.flyingSpeed
            break
        case "horse":
            speed = animal.runningSpeed
            break
    }
    console.log(animal.type +' moving at speed: ' + speed);
}

moveAnimal({type:'bird',flyingSpeed:10 })
moveAnimal({type:'horse',runningSpeed:30})

//type casting

//const paragraph = document.querySelector('p');
const userInputElement1 = <HTMLInputElement>document.getElementById('user-input')!
//or   //specifying what is the element in dom is
const userInputElement = document.getElementById('user-input1')! as HTMLInputElement
userInputElement1.value = new Date().toISOString()
userInputElement.value = 'hi There!'

//Index properties

interface ErrorContainer{ //{email: 'NOt a valid email' , username: 'Must star with a character!'}
    [prop:string] : string;  //index -> specifying the type of of property it should take
}

const errorBag : ErrorContainer = {
    email: 'Not a valid email',  //since prop is set as string it only takes string values
    username: 'Must start with a capital character!'
}






