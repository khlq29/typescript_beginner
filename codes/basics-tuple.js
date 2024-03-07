"use strict";
// const person : {
//     name: string;
//     age : number;
// }  
const person = {
    name: 'Yukinon',
    age: 17,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};
person.role.push('admin');
// person.role[1] = 10
person.role = [0, 'admin'];
let favoriteSnacks;
favoriteSnacks = [`momos`, 'shawarma', "burger"];
console.log(person);
console.log(person.name);
console.log(favoriteSnacks);
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
