// 사용자 입력
let inputStr = prompt("점수를 입력하세요.");
console.log(inputStr);
let input = parseInt(inputStr);
console.log(input);

const MAX_SCORE = 105;
let score;
var grade;

// 최종점수 계산 (5점 추가)

score = input;
score += 5;

// 등급 결정 (if문)
if (isNaN(input) || input < 0 || input > 100) {
  console.log("잘못된 입력입니다. 0부터 100 사이의 숫자를 입력하세요.");
} else {
  if (score > MAX_SCORE) score = MAX_SCORE;

  if (score >= 100) {
    grade = "S";
  } else if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 합격/불합격 여부 결정 (삼항연산자)
  let status = score >= 60 ? "Pass" : "Fail";

  console.log("Final Score: " + score);
  console.log("Grade: " + grade);
  console.log("Status: " + status);

  // 등급에 따른 console.log() 출력 (switch문)
  switch (grade) {
    case "S":
      console.log("Message: Super!!");
      break;
    case "A":
      console.log("Message: Excellent work!");
      break;
    case "B":
      console.log("Message: Good job!");
      break;
    case "C":
      console.log("Message: Satisfactory performance.");
      break;
    case "D":
      console.log("Message: Needs improvement.");
      break;
    case "F":
      console.log("Message: Please try harder!");
      break;
    default:
      console.log("Message: Unknown grade.");
  }
}
