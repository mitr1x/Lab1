array = [1, 2, 3, 4, 0, 0, 1, 5];

const lodash = require("lodash");

let take = lodash.take(array, 3);	// Slice, щоб взяти n елементів з початку
let xor = lodash.xor(array); // Повертає унікальне значення кількох масивів
let concat = lodash.concat(array, [23, 44]); // Об'єднати масиви
let remove = lodash.remove(array, function(item){ return item % 2 == 0; }); // Видаляємо значення, яке задовольняє умові повернення func із вихідного масиву
let compact = lodash.compact(array);  //Повернути справжній масив, який не містить (false, null, NaN, undefined, 0, '')



console.log(take);
console.log(concat);
console.log(compact);
console.log(xor);
console.log(array);