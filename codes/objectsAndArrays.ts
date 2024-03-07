const userName ="max"
// userName = "maximum"

// let age = 30

// age = 29;

// function add(a:number,b:number){
//     let result
//     result = a+b
//     return result
// }

// if (age>20){
//     var isOld=true;
// }

// console.log(isOld);

let add= (n1:number,n2:number = 1) =>  n1+n2 //default parameter from right only     //arrow function ex


console.log(add(223));

const  printOutput : (a : string| number) => void = output =>console.log(output);  //arrow function ex


printOutput(add(6969))

const button = document.querySelector('button');

if(button){
  button.addEventListener('click',event=>console.log(event))
}

let hobbies = ['sports', 'cooking']

let activeHob = ['TRECKING']

activeHob.push(...hobbies)
//or
let arr = [...hobbies , ...activeHob]

console.log(arr);

const person = {
    firstName : 'Yukinon',
    age : 17
}

let copiedPerson:any = {...person}

for(let key in copiedPerson){
    console.log(key +':'+ copiedPerson[key]);
}

const unlimitedAdd = (...n:number[])=>{
    let res =0
  return  n.reduce((curResult,curValue)=>{
        return curResult + curValue
    },0)
}


let res = unlimitedAdd(1,2,3,4,5,6,3,2,7,8,9)
console.log(res);


// let hobby1 = hobbies[0]
// let hobby2 = hobbies[1]

//array destruture

const [hobby1 ,hobby2 , ...remainingHobbies] = hobbies


console.log(hobbies,hobby1,hobby2);

const {firstName: userName1 ,  age ,...} = person