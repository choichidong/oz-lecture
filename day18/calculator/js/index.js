// index.js
import calculateOperation from "./operations.js";
import {
  resetDisplay,
  setDisplay,
  subDisplay,
  appendNumber as append,
  setOperator as setOp,
  VALID_NUMBERS,
  VALID_OPERATORS,
} from "./input.js";

import { showError, removeError } from "./error.js";
import saveHistory from "./history.js";

// 상태 변수
let history = [];
let currentInput = "";
let firstNumber = null;
let operator = null;
let isResultDisplayed = false;

// 디스플레이에 값 업데이트
const updateDisplay = (value) => {
  const display = document.getElementById("display");
  if (display) display.textContent = value;
};

// 숫자 입력
const appendNumber = (number) => {
  try {
    if (isResultDisplayed) {
      currentInput = "";
      isResultDisplayed = false;
    }
    currentInput = append(number, currentInput);
    removeError();
  } catch (error) {
    showError(error.message);
  }
};

// 연산자 입력
const setOperator = (op) => {
  try {
    operator = setOp(op, currentInput);
    firstNumber = Number(currentInput);
    if (isNaN(firstNumber)) throw new Error("유효한 숫자를 입력하세요.");
    currentInput = "";
    resetDisplay();
  } catch (error) {
    showError(error.message);
  }
};

// 계산 실행
const calculate = () => {
  const resultElement = document.getElementById("result");
  try {
    if (firstNumber === null || operator === null || !currentInput) {
      throw new Error("계산에 필요한 값이 부족합니다.");
    }

    const secondNumber = Number(currentInput);
    if (isNaN(secondNumber)) {
      throw new Error("유효한 숫자를 입력하세요.");
    }

    const result = calculateOperation(firstNumber, secondNumber, operator);
    saveHistory(firstNumber, operator, secondNumber, result, history);

    resultElement.classList.remove("d-none", "alert-danger");
    resultElement.classList.add("alert-info");
    resultElement.textContent = `결과: ${result}`;

    currentInput = "";
    firstNumber = null;
    operator = null;
    isResultDisplayed = true;
    resetDisplay();
  } catch (error) {
    showError(error.message);
  }
};

const clearDisplay = () => {
  currentInput = "";
  firstNumber = null;
  operator = null;
  isResultDisplayed = false;
  resetDisplay();
  const result = document.getElementById("result");
  result.classList.add("d-none");
  result.textContent = "";
  document.getElementById("historyList").innerHTML = "";
  history = [];
};

const backspace = () => {
  currentInput = subDisplay(currentInput);
  updateDisplay(currentInput);
};

export {
  appendNumber,
  setOperator,
  calculate,
  clearDisplay,
  backspace as subDisplay,
  VALID_NUMBERS,
  VALID_OPERATORS,
};
