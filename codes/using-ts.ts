const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;  //type casting
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {  //specifying the type
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));  //using + before to cnvert strings to number
});
