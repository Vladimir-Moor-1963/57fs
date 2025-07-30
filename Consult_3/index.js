const brothers = [
    {race:"hobbit", height: 110, age:45, name:"Frodo Baggins"},
    {race:"human", height: 185, age:46, name:"Aragorn"},
    {race:"elf", height: 189, age:110, name:"Legolas"},
    {race:"dworf", height: 140, age:150, name:"Gimly"},
    {race:"human", height: 195, age:200, name:"Gandalf"},
];

const names = brothers.map((element) => element.name);
console.log(names);


// слова element/ brother -это всего лишь имя переменной (может быть любым)
 // Удобно выбирать слово в единственном числе,
 // пример массив cars - переменную в колбеке назвать car

 const ages = brothers.map((brothers) => brothers.age);
 console.log(ages)

 const raceNames = brothers.map((brothers) => brothers.race + " " + brothers.name);
 console.log(raceNames);

 // высокий - выше или равно 170
 // маленький - ниже 170
 // массив из слов [маленький, высокий,высокий, маленький,высокий]

 const sizes = brothers.map((brothers) =>{ if(brothers.height >= 170)return brothers.name
 
 })
 console.log(sizes)
  
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200


// Аккумулятор (accumulator) - значение,
  // которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора
 // после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора.
 // Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора
 // при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет
 // начальным значением аккумулятора.
