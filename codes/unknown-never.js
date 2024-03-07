"use strict";
let userInput;
let username;
userInput = 5;
userInput = 'Yukinon';
if (typeof userInput === 'string') {
    username = userInput;
}
//username = userInput // throws error
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured !', 500);
