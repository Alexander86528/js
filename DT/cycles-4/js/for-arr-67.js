/*
let arr = [1, 2, 3, 4, 5];

console.log(arr);

console.log('Вывод элементов по очереди');
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log('Вывод в цикле');
for (let i = 0; i <= 4; i++) {
  console.log(arr[i]);
}

console.log('Длина массива arr.length - ' + arr.length);
// console.log(arr.length);
for (i = 0; i < arr.length; i++) { //строго меньше i < arr.length(5)
  console.log(arr[i]);
}

console.log('задача 1 из 67');
let array1 = ['a', 'b', 'c', 'd', 'e'];
for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

console.log('Перебор массива for и if');
let arr2 = [1, 2, 3, 6, 8, 11, 44, 23, 22, 34];
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 == 0) {
    console.log('Элемент arr2[' + i + '] = ' + arr2[i]);
  }
}

console.log('Задача 3');
let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (i = 0; i < arr2.length; i++) {
  if (arr2[i] % 2 != 0) {
    console.log('Элемент arr2[' + i + '] = ' + arr2[i]);
  }
}

console.log('Задача 4');
let array4 = [1, 2, 3, 4, 5, 6, 10, 100];
let pr = 1;
for (i = 0; i < array4.length; i++) {
  pr *= array4[i];
  console.log(pr);
}
console.log('произведение элементов массива = ' + pr);

console.log('Задача 5');
let array5 = [1, 2, 3, 4, 5, 6];
s = 0;
for (i = 0; i < array5.length; i++) {
  s += (array5[i] * array5[i]);
  console.log(s);
}
console.log(s);
*/
/*
console.log('задача 6');
let arr6 = [2, 5, 6, 9, 15, 1, 4];
console.log(arr6);
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] > 3 && arr6[i] < 10) {
    console.log(arr6[i]);
  }
}
*/
/*
console.log('задача 7');
let arr7 = [1, -2, -3, 1, -6, 1, 3];
console.log(arr7);
let sum = 0;
for (let i = 0; i < arr7.length; i++) {
  if (arr7[i] > 0) {
    sum += arr7[i];
    console.log(arr7[i]);
  }
}
console.log(sum);
*//*

console.log('задача 8');
let arr8 = [1, 2, 3, 4, 5];
let sum = 0;
let sr;
console.log(arr8);
for (let i = 0; i < arr8.length; i++) {
  sum += arr8[i];
}
sr = sum / arr8.length;
console.log('sr = ' + sr);
*/
/*
console.log('задача 9');
let arr9 = [10, 20, 30, 50, 235, 3000];
console.log(arr9);
for (let i = 0; i < arr9.length; i++) {
  let stri = String(arr9[i]);
  if (stri[0] == 1) {
    console.log(arr9[i]);
  }
}
*/
/*
console.log('задача 10');
let arr10 = [1, 2, 3, 4, 5, ];
console.log(arr10);
for (let i = (arr10.length -1); i >= 0; i--) {
  console.log(arr10[i]);
}
*/
/*
console.log('задача 11');
let arr11 = [1, 0, 1, 2, 3, 5];
console.log(arr11);
for (let i = 0; i < arr11.length; i++){
  if (i == arr11[i]) {
    console.log(arr11[i]);
  }
}
*/
/*
document.write('<h3>task 12</h3>');
let arr12 = [1, 2, 3, 4, 5];
document.write(arr12);
for (let i = 0; i < arr12.length; i++) {
  document.write('<br>' + arr12[i]);
}
*/
/*
document.write('<h3>task 13</h3>');
let arr13 = [1, 2, 3, 4, 5];
document.write(arr13);
for (let i = 0; i < arr13.length; i++) {
  document.write('<p>' + arr13[i] + '</p>');
}
*/
/*
document.write('<h3>task 14<h3>');
let arr14 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
for (let i = 0; i < arr14.length; i++) {
  if (arr14[i] == 'Сб' || arr14[i] == 'Вс') {
    document.write('<p><b style="color: red">' + arr14[i] + '</b></p>');
  } else {
    document.write('<p>' + arr14[i] + '</p>');
  }
}
*/
document.write('<h3>Task 15<h3>');
let arr15 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
let day = 'Чт';

for (let i = 0; i < arr15.length; i++) {
  if (arr15 [i] == day ) {
    document.write('<i style="color: darkred">' + arr15[i] + '</i> ');
  } else {
    document.write(arr15[i] + ' ');
  }
}

