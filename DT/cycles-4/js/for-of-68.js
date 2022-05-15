console.log('task 1');
let arr1 = ['a', 'b', 'c', 'd', 'e'];
for (let elem1 of arr1) {
    console.log(elem1);
}

console.log('task 2');
let arr2 = [1, 2, 3, 4, 5];
let sum = 0;
for (let elem of arr2) {
    sum += elem;
    console.log(sum);
}
console.log(sum);

console.log('task 3');
let arr3 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
// console.log(arr3);
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
for (let elem3 of arr3) {
    console.log(elem3);
}

console.log('task 4');
let arr4 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
let month = 10;
for (let i = 0; i < arr4.length; i++) {
    if (i == month) {
        document.write(arr4[i - 1]);
    }
}
for (let elem4 of arr4) {
    if (elem4 == arr4[month]) {
        document.write(elem4);
    }
}