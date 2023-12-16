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
