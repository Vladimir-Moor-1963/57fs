// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
// clonedBtn.id = "magic-btn-2";
// изменим класс
// чтобы не было конфликтов с первой кнопкой
// можно использовать другой класс
// или добавить новый класс
// в данном случае добавим новый класс
// к существующему классу

clonedBtn.className = "second-btn"
// изменим текст кнопки
clonedBtn.textContent = "Вторая кнопка"
// изменим цвет фона
clonedBtn.style.backgroundColor = '#a78b71'

    


btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.append(clonedBtn);
  
})

// здесь можете создать EventListener для второй кнопки
clonedBtn.addEventListener('click', () => {
  btn.style.backgroundColor = '#f0f0f0';
  btn.style.color = "black"
});