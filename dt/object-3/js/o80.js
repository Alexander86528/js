let obj = {1: 'a', 2: 'b', 3: 'c'};

console.log(obj[1]);


console.log('task 80-1')
let obj_day = {1: 'Понедельник', 2: 'Вторник', 3: 'Среда', 4: 'Четверг', 5: 'Пятница', 6: 'Суббота', 7: 'Воскреннье'};

console.log(obj_day);
for (let i in obj_day) {
  console.log(i + ": " + obj_day[i]);
}