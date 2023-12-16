console.log('task 1');
let obj = {1: 'a', 2: 'b', 3: 'c'};
console.log(obj[1], obj[2], obj[3]);

console.log('task 2');
obj = {a: 1, b: 2, c: 3};
console.log(obj);
console.log(obj['a'] + obj['b'] + obj['c']);

console.log('task 3');
obj = {'1a': 1, '2b': 2, 'c-c': 3};
console.log(obj);
console.log(obj['1a'] + obj['2b'] + obj['c-c']);

console.log('task 5');
obj = {key1: 1, key2: 2, key3: 3};
console.log(obj);
console.log(obj.key1, obj.key2, obj.key3);
console.log(obj.key1 + obj.key2 + obj.key3);

let user = {name: 'a', surname: 'b'};
console.log(user.name + '   ' + user.surname);

let date = {year: 2022, month: 5, day: 4};
console.log(date.year + ' - ' + date.month + ' - ' + date.day);

obj = {};
obj.a = 1;
obj.b = 2;
obj.c = 3;
console.log(obj);
