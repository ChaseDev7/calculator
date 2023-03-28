let firstValue = [];
let secondValue = [];

let currentCalc = document.querySelector(".current-calc");
const btn = document.querySelectorAll("button");
const btnNumber = document.querySelectorAll(".btn-number");
const btnClear = document.querySelector(".btn-clear");
const btnDelete = document.querySelector(".btn-delete");
const btnDecimal = document.querySelector(".btn-decimal");
const btnOperand = document.querySelectorAll(".btn-operand");
let operandValue = "empty";
const btnEquals = document.querySelector(".btn-equals");

btnNumber.forEach(btn => {
    btn.addEventListener("click", () => {
        addCode(btn.textContent);
    });
});
// Add code to switch to secondValue if equalsButton has been pressed.
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

btnDelete.addEventListener("click", deleteLast);

function deleteLast() {
    if (operandValue == "empty") {
        firstValue.pop();
        currentCalc.textContent = firstValue.join("");
    } else {
        secondValue.pop();
        currentCalc.textContent = firstValue.join("") + " " + operandValue + " " + secondValue.join("");
    };
}

function addOperand(operand) {
    if (operandValue != "empty") {
        btnOperand.removeEventListener;
    } else {
        operandValue = operand;
        const numString = firstValue.join("") + " " + operandValue + " " + secondValue.join("");
        currentCalc.textContent = numString;
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

btnEquals.addEventListener("click", runEquals);

function runEquals() {
    if (operandValue == "+") {
        const totalValue = Number(firstValue.join("")) + Number(secondValue.join(""));
        currentCalc.textContent = Number(Math.round(totalValue+"e4")+"e-4");
        firstValue = [Number(Math.round(totalValue+"e4")+"e-4")];
        operandValue = "empty";
        secondValue = [];
    } else if (operandValue == "-") {
        const totalValue = Number(firstValue.join("")) - Number(secondValue.join(""));
        currentCalc.textContent = Number(Math.round(totalValue+"e4")+"e-4");
        firstValue = [Number(Math.round(totalValue+"e4")+"e-4")];
        operandValue = "empty";
        secondValue = [];
    } else if (operandValue == "x") {
        const totalValue = Number(firstValue.join("")) * Number(secondValue.join(""));
        currentCalc.textContent = Number(Math.round(totalValue+"e4")+"e-4");
        firstValue = [Number(Math.round(totalValue+"e4")+"e-4")];
        operandValue = "empty";
        secondValue = [];
    } else if (operandValue == "÷") {
        if (operandValue == "÷" && secondValue == 0) {
            currentCalc.textContent = "BOOBIES";
        } else {
           const totalValue = Number(firstValue.join("")) / Number(secondValue.join(""));
            currentCalc.textContent = Number(Math.round(totalValue+"e4")+"e-4");
            firstValue = [Number(Math.round(totalValue+"e4")+"e-4")];
            operandValue = "empty";
            secondValue = []; 
        };
    };
}

btnClear.addEventListener("click", runClear);

function runClear() {
    firstValue = [];
    secondValue = [];
    operandValue = "empty";
    currentCalc.textContent = "";
}