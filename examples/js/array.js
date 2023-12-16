console.log("hello, js");
let arr1 = ["a", "b", "c", ];

console.log(arr1);

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

arr1[0] = 'x';
console.log(arr1[0]);

arr1[3] = "z";
arr1[4] = "as";
arr1[5] = "sz";

console.log(arr1);

let arr2 = ['A', {name: 'John'}, true, function() {console.log("function arr2")}];
arr2[3]();
console.log(arr2[1].name);
console.log(arr2.at(-1)());

console.log(arr1.length);
console.log(arr2.length);

arr2.push('asdfgh');
console.log(arr2);
arr2.shift();
console.log(arr2);

arr2.unshift(arr2.pop());
console.log(arr2);
arr2.push('zxcvb');
console.log(arr2);

let arr3 = arr2;

console.log(arr2);
console.log(arr3);

arr1.age = 25;
console.log(arr1);

arr3.pop();
console.log(arr2);
console.log(arr3);

arr1[6] = "jk";
console.log(arr1);

let arr4 = [0, 1, 2, 3, 4, 5, ];
console.log(arr4);
/* 
for (let i = 0; i < arr1.length; i++) {
  console.log(arr4[i]);
}
 */
/* 
for (let number of arr4) {
  console.log(number);
}
 */

for (let key in arr1) {
  console.log(arr1[key]);
}

let fr = ['a', 'b', 'c', ];
let fr_copy = fr;
fr_copy.push('d');
console.log(fr_copy.length);
console.log(fr);
console.log(fr_copy);
