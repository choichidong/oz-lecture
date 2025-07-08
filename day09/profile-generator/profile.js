const NAME = "Choi Dong";
let templateString = `나의 이름은 ${NAME}입니다.`;
console.log(name);
console.log(templateString);

var age = 34;
let nickname = "치동";
const isDeveloper = true;

let job = null;
let status;
const uniqueID = Symbol("id");
const bigAge = 1234567890123456789012345n;

let intro =
  "이름:\t" + nickname + "\n나이:\t" + age + "\n개발자 여부:\t" + isDeveloper;
console.log(intro);

const hobbies = ["클라이밍", "수영", "AI 탐구"];
console.log("나의 취미는: " + hobbies.join(", "));

const profile = {
  name: "최치동",
  age: 34,
  isQAExpert: true,
};

console.log(
  "내 이름은 " + profile.name + "이며, 나이는 " + profile.age + "살입니다."
);

console.log("typeof hobbies:", typeof hobbies);
console.log("typeof profile:", typeof profile);
console.log("typeof bigAge:", typeof bigAge);
console.log("typeof uniqueID:", typeof uniqueID);
