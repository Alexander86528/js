console.log("hello \n world");
/*
** Просто пусто файл	 
*/
function sayHello(name, sign) {
  name = name || "Guest";
  sign = sign || ". . .";
  document.write("Hello," + name + sign);
}

sayHello("Jone", "!");
let n = "Mike";
sayHello(n);
sayHello();