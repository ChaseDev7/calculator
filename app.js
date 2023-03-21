const display = document.querySelector(".display");
const emptyValue = document.createElement("div");
emptyValue.classList.add(".empty-value");
emptyValue.textContent = "";
const btnOne = document.querySelector("btn-one");

btnOne.addEventListener("click", runOne);

function runOne () {
    emptyValue.textContent = "1";
    display.appendChild(emptyValue);
}