
const counterEl = document.querySelector("#counter");
const mBtn = counterEl.firstElementChild;
const pBtn = counterEl.lastElementChild;
let counterValueEl = document.querySelector("#value");

let counterValue = 0;
const countDecrement = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
  };
const countIncrement = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
  };
mBtn.addEventListener("click", countIncrement);
pBtn.addEventListener("click", countDecrement);