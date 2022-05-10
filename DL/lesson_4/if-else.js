let a = 8;
let b = 4;
let c = 6;

if (b < a && a < c || c < a && a < b) {
  console.log('a - ' + a);
} else if (a < b && b < c || c < b && b < a) {
  console.log('b - ' + b);
} else if (b < c && c < a || a < c && c < b) {
  console.log('c - ' + c);
} else {
  console.log('==');
}