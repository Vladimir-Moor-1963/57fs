// Используйте методы массивов.

// 1.2 Создайте новый массив с джедаями младше 40 лет

// 1.3 Посчитайте возраст всех джедаев

// 1.4 Повысьте возраст героев на 10 лет

// 1.5 Создайте новый массив, где "Anakin Skywalker" заменен на:
// `{ name: "Darth Vader", isJedi: false, age: 30 }`

// 1.6 Создайте на основе старого массива новый массив объектов по образу:
// `[{ name: "Luke Skywalker", isJedi: true }, { name: "Han Solo", isJedi: false }, ...]`

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true }
];
const youngJedi = starWarsHeroes.filter(el => el.isJedi === true && el.age < 40);

console.log(youngJedi)

const jediAge = starWarsHeroes.filter(el => el.isJedi === true).reduce((acc, el) =>acc + el.age, 0);
console.log(jediAge);
const olderHeroes = starWarsHeroes.map(el => ({...el, age: el.age + 10}));
console.log(olderHeroes);

// const sithRevenge = starWarsHeroes.map(el => el.name === "Anakin Skywalker" ? { ...el.name: "Darth Vader", isJedi: false} : el);
const sithRevenge = starWarsHeroes.map((el) => (el.name === "Anakin Skywalker" ? { ...el, name: "Darth Vader", isJedi: false } : el));
console.log(sithRevenge);

const shortHeroes = starWarsHeroes.map(el => ({name: el.name, isJedi: el.isJedi}));
console.log(shortHeroes);