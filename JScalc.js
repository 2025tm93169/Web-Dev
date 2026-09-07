let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = Number(prompt("Enter second number:"));

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    if (num2 === 0) {
      result = "Cannot divide by zero";
    } else {
      result = num1 / num2;
    }
    break;

  default:
    result = "Invalid operator";
}

console.log("Result:", result);
alert("Result: " + result);
