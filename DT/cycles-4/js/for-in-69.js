console.log('example 1');
let obj = {a: 1, b: 2, c: 3};
console.log(obj);
for (let key in obj) {
  console.log(key);
}
for (let key in obj) {
  console.log(obj[key]);
}

console.log('task 1');
let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;
console.log(obj1);
for (let key1 in obj1) {
  sum += obj1[key1];
}
console.log('sum = ' + sum);