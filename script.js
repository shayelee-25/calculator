const buttonValues = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", "00", ".", "="
];

const rightSymbols = ["÷", "*", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");
let a = 0;
let operator = null;
let b = null;

function add(a, b) {
    display.value = +a + +b;
}

function subtract(a, b) {
    display.value = a - b;
}

function multiply(a, b) {
    display.value = a * b;
}

function divide(a, b) {
    display.value = a / b;
}

function clearAll() {
    a = null;
    operator = null;
    b = null; 
}

/*
function operate(a, operator, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "*":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
    }
} */

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    let button = document.createElement("button");
    button.innerText = value;

 //process button clicks
 button.addEventListener("click", function() {
    if (rightSymbols.includes(value)) {
        if (value == "=") {
            if (a != null) {
                b = display.value;

             if (operator == "÷") {
                if (b == 0 || b == 0o0) {
                 display.value = "ERROR";
                } else {
                 divide(a, b);
                }
             } else if (operator == "*") {
                multiply(a, b);
             } else if (operator == "-") {
                subtract(a, b);
             } else if (operator == "+") {
                add(a, b);
             } 
                clearAll();
            }
        } else {
            operator = value;
            a = display.value;
            display.value = "";
        }
    } else if (topSymbols.includes(value)) {
        if (value == "AC") {
            clearAll();
            display.value = "";
        } else if (value == "+/-") {
            if (display.value != "" && display.value != 0) {
                if (display.value[0] == "-") {
                    display.value = display.value.slice(1);
                } else {
                    display.value = "-" + display.value;
                }
            }
        } else if (value == "%") {
            display.value = Number(display.value)/100;
        }
    } else {
        if (value == ".") {
            if (display.value != "" && !display.value.includes(value)) {
                display.value += value;
            }
        } else if (display.value == 0) {
            display.value = value;
        } else {
            display.value += value;
        }
    }
});
 //add buttons to calculator
 document.getElementById("buttons").appendChild(button);
}









