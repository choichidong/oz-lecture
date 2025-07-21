import {
  appendNumber,
  setOperator,
  calculate,
  clearDisplay,
  subDisplay,
  VALID_NUMBERS,
  VALID_OPERATORS,
} from "./index.js";

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (VALID_NUMBERS.includes(key)) {
    appendNumber(key);
  } else if (VALID_OPERATORS.includes(key)) {
    setOperator(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    subDisplay();
  }
});

window.appendNumber = appendNumber;
window.setOperator = setOperator;
window.calculate = calculate;
window.clearDisplay = clearDisplay;
