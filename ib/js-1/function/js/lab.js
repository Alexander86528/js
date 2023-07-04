function sayHello(name, sign) {
  name = name || "Guest";
  sign = sign || "...";
  print("Hello, " + name + sign);
}

sayHello("John", "!");
let n = "Mike";
sayHello(n);
sayHello();