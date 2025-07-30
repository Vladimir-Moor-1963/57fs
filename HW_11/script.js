
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
console.log(starWarsHeroes);

const starWarsHeroesAge = starWarsHeroes.map(el => el.age);
starWarsHeroesAge.sort((a, b) => a - b)

console.log(starWarsHeroesAge); 
const starWarsHeroesAge1 = starWarsHeroesAge.filter((el) => el < 40);
console.log(starWarsHeroesAge1); 

const starWarsHeroesAge2 = starWarsHeroesAge.reduce((acc, el) => acc + el, 0 ); 
console.log(starWarsHeroesAge2)
const starWarsHeroesAge3 = starWarsHeroesAge.reduce((acc, el) => acc + el, 10 ); 
console.log(starWarsHeroesAge3)

const updatedHeroes = starWarsHeroes.map(hero => hero.name + "Darth Vader" + hero.age + "50" + hero.isJedi + false);
console.log(updatedHeroes);