let userInput : unknown
let username : string

userInput = 5
userInput ='Yukinon'

if(typeof userInput === 'string'){
    username = userInput
}

//username = userInput // throws error

function generateError(message : string , code: number): never{
    throw {message : message, errorCode: code}
}

generateError('An error occured !', 500)