export default function calculateOperation(
  firstNumber,
  secondNumber,
  operator
) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) throw new Error("0으로 나눌 수 없습니다.");
      return firstNumber / secondNumber;
    default:
      throw new Error("알 수 없는 연산자입니다.");
  }
}
