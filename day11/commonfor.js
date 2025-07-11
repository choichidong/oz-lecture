// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 0; i < 2; i++) {
//   console.log(`i: ${i}`);
//   for (let j = 0; j < 2; j++) {
//     console.log(`j: ${j}`);
//   }
// }

// for (let i = 0; i <= 10; i += 2) {
//   if (i === 0) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) break;
//   //   if (i === 5) continue;
//   console.log(i);
// }

let arr = ["a", "b", "c"];
// console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (idx in arr) {
  console.log(arr[idx]);
}
for (item of arr) {
  console.log(item);
}

let obj = {
  name: "철수",
  age: 20,
};
for (let key in obj) {
  console.log("key", key);
  console.log("obj", obj[key]);
}
