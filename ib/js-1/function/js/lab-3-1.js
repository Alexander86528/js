function power(base, exp) {
  let res = 1;
  for(let cnt = 0; cnt < exp; cnt++) {
    res *= base;
  }
  return res;
}

console.log(power(2, 2));
print(power(2, 3));