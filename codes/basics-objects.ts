// const person : {
//     name: string;
//     age : number;
// }  
const person = {
    name : 'Yukinon',
    age : 17,
    hobbies : ['sports', 'cooking']
}

let favoriteSnacks : string[];
favoriteSnacks = [`momos` , 'shawarma',"burger"]

console.log(person);
console.log(person.name);
console.log(favoriteSnacks);

//foreach()  to access array

favoriteSnacks.forEach(function(val , index ,Array){
    console.log(val);
    console.log(index);
    //console.log(Array);

})


//for..of loop to access array

for(let hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}