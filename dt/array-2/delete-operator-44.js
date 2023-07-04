let obj = {'a': 1, 'b': 2, 'c': 3};
console.log(obj);
delete obj.b;
console.log(obj);

let obj1 ={'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
delete obj1.e;
console.log('e' in obj1);

let arr = ['a', 'b', 'c'];
console.log(arr);
delete arr[1];

let arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1);
delete arr1[0];
delete arr1[1];
console.log(arr1.length);
