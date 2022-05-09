// Пример из параграфа цикл for для массивов 67
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
