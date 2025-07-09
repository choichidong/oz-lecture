let food = "melon";

switch (food) {
  case "apple":
  case "banana":
  case "cherry":
  case "melon":
    console.log("fruit");
    break;

  default:
    console.log("not food");
    break;
}

let score = 100;
let grade;
if (score >= 90 && score <= 95) {
  grade = "A++";
}
console.log(grade);
