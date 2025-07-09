let num = -2;

if (num > 0) {
  console.log("양수");
} else if (num === 0) {
  console.log("0");
} else {
  console.log("음수");
}

const LIMIT = 80;
let score = 90;

if (score < LIMIT) {
  console.log("낙제");

  if (score === 0) {
    console.log("점수 0 : 검토 필요");
  }
} else {
  // LIMIT 이상인 경우에만 성적 출력
  if (score > 90) {
    console.log("A");
  } else if (score > 80) {
    console.log("B");
  } else {
    console.log("C");
  }
}
