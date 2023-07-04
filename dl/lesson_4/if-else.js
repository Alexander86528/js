let a = 8;
let b = 7;
let c = 6;

console.log('Вариант 1');
if (b < a && a < c || c < a && a < b) {
  console.log('a - ' + a);
} else if (a < b && b < c || c < b && b < a) {
  console.log('b - ' + b);
} else if (b < c && c < a || a < c && c < b) {
  console.log('c - ' + c);
} else {
  console.log('==');
}

console.log('Вариант 2');
if (a == b || a == c || b == c) {
  console.log('==');
} else if (b < a && a < c || c < a && a < b) {
  console.log('a - ' + a);
} else if (a < b && b < c || c < b && b < a) {
  console.log('b - ' + b);
} else {
  console.log('c - ' + c);
}

console.log('Вариант 3');
if (a == b || a == c || b == c) {
  console.log('==');
}
else {
  if (a > b) {
    if (a > c) {
      if (c > b) {
        console.log('c - ' + c);
      }
      else {
        console.log('b - ' + b);
      }
    }
    else {
      console.log('a - ' + a);
    }
  }
  else {
    if (a > c) {
      console.log('a - ' + a);
    }
    else {
      if (c < b) {
        console.log('c - ' + c);
      }
      else {
        console.log('b - ' + b);
      }
    }
  }
}