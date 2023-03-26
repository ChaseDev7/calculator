let numValue = [];

const currentCalc = document.querySelector(".current-calc");
const btn = document.querySelectorAll("button");
const btnNumber = document.querySelectorAll(".btn-number");
const btnClear = document.querySelector(".btn-clear");
const btnDecimal = document.querySelector(".btn-decimal");

btnNumber.forEach(btn => {
    btn.addEventListener("click", () => {
        addCode(btn.textContent);
    });
});

function addCode(num) {
    numValue.push(num);
    const numString = numValue.join("");
    currentCalc.textContent = "";
    currentCalc.append(numString);
}

btnDecimal.addEventListener("click", () => {
    addDecimal(".");
});

function addDecimal (decimal) {
    if (numValue.includes(".")) {
        btnDecimal.removeEventListener;
    } else {
        numValue.push(decimal);
        const decimalString = numValue.join("");
        currentCalc.textContent = "";
        currentCalc.append(decimalString);
        console.log(numValue);
    };
}

btnClear.addEventListener("click", runClear);

function runClear() {
    numValue = [];
    currentCalc.textContent = "";
    console.log(numValue);
}