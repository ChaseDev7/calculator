let firstValue = [];
let secondValue = [];

let currentCalc = document.querySelector(".current-calc");
const btn = document.querySelectorAll("button");
const btnNumber = document.querySelectorAll(".btn-number");
const btnClear = document.querySelector(".btn-clear");
const btnDecimal = document.querySelector(".btn-decimal");
const btnOperand = document.querySelectorAll(".btn-operand");
let operandValue = "empty";
const btnEquals = document.querySelector(".btn-equals");

btnNumber.forEach(btn => {
    btn.addEventListener("click", () => {
        addCode(btn.textContent);
    });
});

function addCode(num) {
    if (operandValue != "empty") {
        currentCalc.textContent = secondValue;
        secondValue.push(num);
        const numString = firstValue.join("") + " " + operandValue + " " + secondValue.join("");
        currentCalc.textContent = numString;
    } else {
        currentCalc.textContent = firstValue;
        firstValue.push(num);
        const numString = firstValue.join("");
        currentCalc.textContent = numString;
    };
}

btnOperand.forEach(btn => {
    btn.addEventListener("click", () => {
        addOperand(btn.textContent);
    });
});

function addOperand(operand) {
    if (operandValue != "empty") {
        btnOperand.removeEventListener;
    } else {
        operandValue = operand;
        const numString = firstValue.join("") + " " + operandValue + " " + secondValue.join("");
        currentCalc.textContent = numString;
        console.log(operandValue);
    };
}

btnDecimal.addEventListener("click", () => {
    addDecimal(".");
});

function addDecimal (decimal) {
    if (operandValue === "empty") {
        if (firstValue.includes(".") || firstValue.includes("0.")) {
            btnDecimal.removeEventListener;
        } else {
            if (firstValue.length === 0) {
                firstValue.push("0" + decimal);
                const decimalString = firstValue.join("");
                currentCalc.textContent = "";
                currentCalc.append(decimalString);
            } else {
                firstValue.push(decimal);
                const decimalString = firstValue.join("");
                currentCalc.textContent = "";
                currentCalc.append(decimalString);
            };
        };
    } else {
        if (secondValue.includes(".") || secondValue.includes("0.")) {
            btnDecimal.removeEventListener;
        } else {
            if (secondValue.length === 0) {
                secondValue.push("0" + decimal);
                const decimalString = firstValue.join("") + " " + operandValue + " " + secondValue.join("");
                currentCalc.textContent = "";
                currentCalc.append(decimalString);
            } else {
                secondValue.push(decimal);
                const decimalString = firstValue.join("") + " " + operandValue + " " + secondValue.join("");
                currentCalc.textContent = "";
                currentCalc.append(decimalString);
            };
        };
    };
}

// btnEquals.addEventListener("click", runEquals);

// function runEquals() {
//     const firstString = firstValue.toString();
//     const secondString = secondValue.toString();
//     const operandString = "empty";
//     if (operandValue == "+") {
//         const addString = firstString + secondString
//     } 
//     const totalValue = 
//     currentCalc.textContent = totalValue;
//     console.log(totalValue);
// }

btnClear.addEventListener("click", runClear);

function runClear() {
    firstValue = [];
    secondValue = [];
    operandValue = "empty"
    currentCalc.textContent = "";
}