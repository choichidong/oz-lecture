let score = 90;
let grade = score >= 90 ? "A+" : "A";
console.log(grade);

let math = 80;
let avg = 90;
let english = 100;
let isMathLowAvg = math < avg;
console.log("isMathLowavg", isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log("isEnglishLowAvg", isEnglishLowAvg);

let AvgMathGrade = isMathLowAvg ? "수학점수 평균 이하" : "수학점수 평균 이상";
console.log("AvgMathrade", AvgMathGrade);

let AvgEnglishGrade = isEnglishLowAvg
  ? "영어점수 평균 이하"
  : "영어점수 평균 이상";
console.log("AvgEnglishGrade", AvgEnglishGrade);
