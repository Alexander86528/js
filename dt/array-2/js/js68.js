let arr_num = [1, 2, 3, 4, 5, 6, 24, ];
/* 
alert(arr_num);
console.log(arr_num);
*/

let arr_string = ['as', 'df', 'gh', 'jk', ];
/*
alert(arr_string);
console.log(arr_string);
 */
let sum = 0;
for (let num of arr_num) {
  sum = sum + num;
  // console.log(sum);
}
console.log(sum);
let string = ' '; 
for (let str of arr_string) {
  string += '+' + str;
}
console.log(string);

console.log(arr_num.length);
console.log(arr_string.length);
console.log(arr_string[arr_string.length-1]);
console.log(arr_num[arr_num.length-1]);

// arr_num[0] = 55;
arr_num.shift();
arr_num.unshift(55);
console.log(arr_num);
arr_num.pop();
arr_num.push(234);
console.log(arr_num);

console.log("task 70");
console.log(arr_num.length);
console.log(arr_string.length);
console.log(arr_string[arr_string.length-1]);
console.log(arr_string[arr_string.length-2]);
console.log(arr_string[arr_string.length-3]);
console.log(arr_string[arr_string.length-4]);

console.log("task 71");
let arr_ch = ['a', 'b', 'c'];
arr_ch[0] = '!';
console.log(arr_ch);
arr_ch[0] = '1';
arr_ch[1] = '2';
arr_ch[2] = '3';
console.log(arr_ch);
arr_ch.shift();
arr_ch.unshift('@');
console.log(arr_ch);
arr_ch.pop();
console.log(arr_ch);
arr_ch.push('#');
console.log(arr_ch);
arr_ch[1] = '$';
console.log(arr_ch);

console.log("task 72");
let arr72 = ['a', 's', 'd', 'f', 'g',];
arr72[0] =  arr72[0] + '!';
console.log(arr72);

for (let n of arr72) {
  console.log(n + '!');
}
let arr72_1 = [1, 2, 3, ];
for (let i=0; i < arr72_1.length; i++) {
  arr72_1[i] += 3;
  console.log(i);
}
console.log(arr72_1);

console.log("task 73");
let arr73 = [1, 2, 3, ];
arr73[0]++;
++arr73[0];
console.log(arr73);
++arr73[1];
arr73[1]++;
console.log(arr73);
arr73[2]++;
console.log(arr73);

console.log('task 74');
console.log('task 75');
let arr75 = [];
arr75[4] = 'a';
arr75[75] = 'ab';
console.log(arr75.length);
console.log(arr75);

console.log('task 76');
let arr76 = [];
arr76.push('as');
console.log(arr76);
arr76.push('df');
console.log(arr76);
arr76.push('gh');
console.log(arr76);

let arr76_1 = [];
arr76_1.push(1);
arr76_1.push(2);
arr76_1.push(3);
console.log(arr76_1);
console.log('arr76_1 = ' + arr76_1);
arr76_1.push(4);
arr76_1.push(5);
console.log(arr76_1);
console.log('arr76_1 = ' + arr76_1);

console.log('task 77');
let arr77 = arr76;
console.log(arr77);
let key77 = 0;
console.log(arr77[key77]);

let arr77_2 = [1, 2, 3, 4, 5];
let key77_2_1 = 1;
let key77_2_2 = 2;
console.log(arr77_2[key77_2_1] + arr77_2[key77_2_2]);

console.log('task 78');
let arr78 = arr77;
arr78.push('jk');
arr78.push('l;');
console.log(arr78);
delete arr78[1];
console.log(arr78);
console.log(arr78.length);
delete arr78[2];
console.log(arr78);
console.log(arr78.length);
// console.log(arr76);

console.log('task 79');
let arr79 = arr78;
console.log(arr79);
console.log(arr79[arr79.length-1]);
console.log(arr79[arr79.length]);
let arr79_2 = arr77_2;
console.log(arr79_2);
arr79_2.pop();
arr79_2.pop();
console.log(arr79_2);
console.log(arr79_2[0] + arr79_2[1] + arr79_2[2]);
