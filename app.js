// const person : {
//     name: string;
//     age : number;
// }  
var person = {
    name: 'Yukinon',
    age: 17,
    hobbies: ['sports', 'cooking']
};
var favoriteSnacks;
favoriteSnacks = ["momos", 'shawarma', "burger"];
console.log(person);
console.log(person.name);
console.log(favoriteSnacks);
//foreach()  to access array
favoriteSnacks.forEach(function (val, index, Array) {
    console.log(val);
    console.log(index);
    //console.log(Array);
});
//for..of loop to access array
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
