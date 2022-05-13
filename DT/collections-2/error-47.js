
console.log('task 1');
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1[arr1.length - 1]);

console.log('task 2');
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2[0] + arr2[1] + arr2[2] + arr2[3] + arr2[4]);


console.log('task 3');
let obj3 = [1, 2, 3, 4, 5];
console.log(obj3.length);

console.log('task 4');
let obj4 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(obj4.a);
console.log(obj4['a']);

console.log('task 5');
let obj5 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let key = 'a';
console.log(obj5.key);//не верно - ищет с ключом 'key'
console.log(obj5[key]);
console.log(obj5.b);

console.log('task 6');
let obj6 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let sum1 = obj6['a'] + obj6['b'] + obj6['c'] + obj6['d'] + obj6['e'];
console.log(sum1);
let sum2 = obj6.a + obj6.b + obj6.c + obj6.d + obj6.e;
console.log(sum2);

console.log('task 7');
let obj7 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
console.log(obj7.length);