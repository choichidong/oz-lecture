// 상수 및 변수 선언
const MAX_TIME = 10;
let timerCount;
var timerMessage;

// DOM 요소
const timerInput = document.getElementById("timerInput");
const startBtn = document.getElementById("startTimer");
const display = document.getElementById("timerDisplay");

// 타이머 시작 함수
function startTimer(seconds = 10) {
  let count = seconds;
  display.classList.remove("error");
  display.textContent = `타이머: ${count}초`;

  // 버튼 비활성화
  startBtn.disabled = true;

  // 타이머 실행
  timerCount = setInterval(() => {
    count--;
    if (count > 0) {
      display.textContent = `타이머: ${count}초`;
    } else {
      clearInterval(timerCount);
      display.textContent = "타이머 종료!";
      startBtn.disabled = false;
    }
  }, 1000);
}

// 버튼 클릭 이벤트
startBtn.addEventListener("click", function () {
  let inputValue = timerInput.value.trim();
  let seconds = Number(inputValue);

  // 입력값 유효성 검사
  if (
    inputValue === "" ||
    isNaN(seconds) ||
    seconds < 1 ||
    seconds > MAX_TIME
  ) {
    display.textContent = "유효한 숫자(1-10)를 입력하세요!";
    display.classList.add("error");
    return;
  }

  startTimer(seconds);
});
