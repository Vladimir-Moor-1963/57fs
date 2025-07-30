// ! DOM

// методы работы с глобальным объектом document
// * этот объект содержит всю информацию об элементах и их свойствах на странице
// console.dir(document) // тут в объекта находится ВСЕ что на странице есть

//*  можно в ручную находить сво-ва этого объекта и изменять их но это не удобно 🫣
// console.dir(document.body.children[0].textContent)
// console.dir(document.body.children[1].children[1].textContent)
// ! DOM methods
// чтобы удобно взаимодействовать с html элементами
// нам нужно уметь их находить и изменять
// для этого у нас есть методы поиска
const btnPlus = document.querySelector("#btn-plus");
const btnMinus = document.querySelector("#btn-minus");
const counterValue = document.querySelector("#counter");

console.log(btnPlus);
console.log(btnMinus);
console.log(counterValue);

// ! counter

let counter = 0;
// присваиваем новое значение для данных на странице

btnPlus.textContent = "плюс";
btnMinus.textContent = "минус";

const hendlePlus = () => {
  // увеличиваем counter на 1
  counter++;
  // меняем текст на значение переменной
  counterValue.textContent = counter;
};
const hendleMinus = () => {
  counter--;
  counterValue.textContent = counter;
};
// уменьшаем counter на 1
// создаем слушатель события для кнопки
// это способ сделать элемент интерактивным
btnPlus.addEventListener("click", hendlePlus);
btnMinus.addEventListener("click", hendleMinus);
console.log(counter);
// hendlePlus();
// hendlePlus();

// ! DOM practice
const heading = document.querySelector("h1");

// подробная информация о найденном элементе
/// console.dir(heading)

heading.addEventListener("click", () => {
  heading.textContent = "Функции и дом 🏡";
  heading.className = "heading";
// создаем новый элемент
  const p = document.createElement("p");
   // добавляем элементу текст
  p.textContent = "Это новый параграф, который мы добавили в DOM!";
  console.log(p);
  // добавили элемент на страницу
  document.body.append(p);
  
});

const btnCreate = document.querySelector(".btn-create");
btnCreate.addEventListener('click', () => {
    const img = document.createElement("img")
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20241120143259875787/DOM-Tree1.webp'
    document.body.append(img);
    
})