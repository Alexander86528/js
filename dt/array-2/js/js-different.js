 
console.log('task 97');
console.log(typeof{x: 1, y: 2, z: 3, });
console.log(typeof[1, 2, 3, ]);
console.log([1, 2, 3, ]);
let arr97 = ['as', 'df', 'gh'];
console.log(arr97);
console.log(typeof(arr97));
console.log(typeof arr97[0]);

console.log('task 40');
console.log(12345);
console.log('12345');

console.log('task 98');
let obj98 = {a: 1, b: 2, };
console.log(Array.isArray(arr97));
console.log(Array.isArray(obj98));

console.log('task 151');
let arr151 = [1, 2, 3, 4, 5, ];

let res = 0;
for (let elem of arr151) {
  res += elem;
}
console.log(res);

let res_even = 0;
for (let even of arr151) {
  if (even % 2 == 0) {
    res_even += even;
  }
}
console.log(res_even);

let pr = 1;
for (let elem of arr151) {
  pr *= elem; 
}
console.log(pr);

let kv = 0;
for (let elem of arr151) {
  kv += (elem * elem);
}
console.log(kv);

console.log('task 152');
let str = '';
console.log(str);
for (let i = 0; i < 5; i++) {
  str += "-";
}
console.log(str);

let str2 = '';
for (let i = 1; i < 10; i++) {
  str2 += i;
}
console.log(str2);

let str3 = '';
for (let i=9; i > 0; i-- ) {
  str3 += i; 
}
console.log(str3);

let str4 = '';
for (let i = 0; i < 10; i++) {
  str4 += '-' + i;
}
console.log(str4);

console.log('task 152');
for (let i = 10; i < 2002; i++) {
  let str = String(i);
  console.log(str[0]);
}
for (let i = 10; i < 1001; i++) {
  let str = String(i);
  console.log(Number(str[0]) + Number(str[1]));
}
for (let i = 10; i < 1001; i++) {
  let str = String(i);
  if (str[0] == 1) {
    console.log(i);
  }
}
let n = 12345;

console.log(n.toString());
console.log(typeof n.toString());

for (let i = 10; i < 1001; i++) {
  if (Number(i.toString()[0]) + Number(i.toString()[1]) == 5) {
    console.log(i);
  }
}
