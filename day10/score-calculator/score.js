const MAX_SCORE = 100;
let input = prompt("점수를 입력하세요 (0~100):");
let score = Number(input);
var grade;

if (isNaN(score) || score < 0 || score > 100) {
  console.log("잘못된 입력입니다. 0부터 100 사이의 숫자를 입력하세요.");
} else {
  score += 5;
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

  let status = score >= 60 ? "Pass" : "Fail";

  console.log("Final Score: " + score);
  console.log("Grade: " + grade);
  console.log("Status: " + status);

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
