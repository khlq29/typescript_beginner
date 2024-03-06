//we can store the type in a variable also
type Combinable = number;
//union can also be stored
type union = number | string;
//literals can also be stored
type literals = 'as - number' | "as - text" 

function combine(
    input1: Combinable | string , 
    input2: union , 
    resultConversion:  literals 
    ){
    let result;
    if(typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as - number') {
        result = +input1 + +input2;
    }else {
        return result = input1.toString() + input2.toString()
    }
    // if(resultConversion === 'as-number'){
    //     return +result;
    // }else{
    //     return result.toString();
    // }

    return result;
}

const combinedAges = combine(30,36, "as - number")
console.log(combinedAges);

const combinedStringAges = combine('30','36', "as - number")
console.log(combinedStringAges);

const combinedNames = combine('Khaliq' , ' Anwar', "as - text")
console.log(combinedNames);