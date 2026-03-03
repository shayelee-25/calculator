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

let firstNum = "";
let operator = "";
let secondNum = "";


const operate = function() {
    return `${firstNum} ${operator} ${secondNum}`;
};

const displayTotal = document.querySelector("#.total");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equal");
let inputValue = "";
displayTotal.appendChild(inputValue);

const one = document.querySelector(".1");
const two = document.querySelector(".2");
const three = document.querySelector(".3");
const four = document.querySelector(".4");
const five = document.querySelector(".5");
const six = document.querySelector(".6");
const seven = document.querySelector(".7");
const eight = document.querySelector(".8");
const nine = document.querySelector(".9");
const zero = document.querySelector(".0");
const zeroZero = document.querySelector(".00");

const allBtns = document.querySelectorAll("button");

function reset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

clearBtn.addEventListener("click", reset());

allBtns.addEventListener("click", () => {
    displayTotal.appendChild()
})









