// console.log("hello world")

let dog = "Tusik";
dog = "Scharik"
dog = 35;
// console.log(dog)


let bird;
bird = 'Woody';

const car = 'Opel';
// car = 'Tesla'
console.log(car);
var age = 35;
let str1 = "Можно в двойных"
let str2 = 'Можно в одинарных'
let str3 = '13';
let str4 = str1 + " " + str2;
console.log(str1.toLocaleUpperCase());
console.log(str4);
// 2.Number
let num1 = 9;
let num2 = 9.6;
let num3 = 1239n;
// 4. Boolean
let isDrunk = false;
if (isDrunk){
    console.log('Ты алкаш');
    
}
const result = isDrunk ? 'Ты алкаш' : 'Нет не алкаш'
console.log(result);
// .5 undefined
// let.my_name;
// console.log(my_name);
// 6. null
let empty = null;
// .7 symbol
// Новый тип,раньше его не было и сейчас остается малопопулярным
// Используется для создания уникальных значений внутри программы
let s1 = Symbol("something")
console.log(s1);
// ПРЕОБРАЗОВАНИЕ ТИПОВ
let str7 = '' + 9;
const num4 = 10;
let str8 = String(num4);
const res = 9 + 12 + '5';
const res2 = '5' + 9 + 12;
// 2. Преобразование в число неявное
    const num5 = +"6"; // 6
    const sum = +"9" +  +"10";
    console.log(sum);
    const num6 = Number("117"); // число 117
    const num7 = Number("129&8*#")
    console.log(typeof num7);