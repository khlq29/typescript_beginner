// interface Person{
//     name : string,
//     age:Number


//     greet(phrase:string):void
// }

// let user1:Person

// user1 ={
//     name: "Yukinon",
//     age:17,
//     greet(phrase:string) {
//        console.log(phrase + ' ' + this.name);
//     },
// }

// user1.greet("hi there - i am")

//type Addfn = (a:number,b:number)=> number
interface Addfn{
    (a:number,b:number): number
}
let add:Addfn

add = (n1:number, n2:number)=>{
    return n1+n2
}
console.log(add(69,69)); 

interface Named{
    readonly name?: string,
    outputName? : string  //here ? is used to declare it as optional property
}



interface Greetable extends Named{
    greet(phrase : string):void
}

let greet : Greetable
greet = {
    name :'Yukinon',
    greet(phrase:string){
        console.log(`${phrase} i am ${this.name}`);
    }
}
greet.greet(`hello there `)



class Person implements Greetable, Named{
    name? : string
    age = 17

    constructor(n?:string) {
        if(n){
            this.name =n
        }
        
    }


    greet(phrase:string){
        if(this.name){
          console.log(`${phrase} i am ${this.name}`);  
        }else{
            console.log('Hi!');
        }
        
    }
}

let usr1 = new Person("Navia")



usr1.greet("hi there")
console.log(usr1);


