const add = function(a, b) {
    return a + b;
};
//console.log(add(2, 3))
const subtract = function(a, b) {
    return a - b;
};
//console.log(subtract(5, 2))
const multiply = function(a, b) {
    return a * b;
};
//console.log(multiply(4, 12))
const divide = function(a, b) {
    if(b === 0) {
        return "Error: Cannot divide by zero";
    } else {
        return a / b;
    }
};
//console.log(divide(60, 5))

const firstNum = "";
const operator = "";
const secondNum = "";

const operate = function() {
    return `${firstNum} ${operator} ${secondNum}`;
};



