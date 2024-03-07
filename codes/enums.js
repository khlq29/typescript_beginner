"use strict";
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
var Role;
(function (Role) {
    Role["ADMIN"] = "admin";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
//enums assigns labels to numbers
const person = {
    name: 'Yukinon',
    age: 17,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
// person.role.push('admin')
// // person.role[1] = 10
// person.role = [0, 'admin']
let favoriteSnacks;
favoriteSnacks = [`momos`, 'shawarma', "burger"];
console.log(person);
console.log(person.name);
console.log(favoriteSnacks);
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('LOGIN is author');
}
