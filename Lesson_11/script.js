// ! объекты

// пример объявления объекта
let frodo = {
  name: "Frodo",
  age: 30,
  race: "Hobbit",
  hasMagic: false,
  heigh: 60,
};
// * обращение к значению по ключу
console.log(frodo.name);

// * перезаписываем значению по ключу
frodo.hasMagic = true;
// console.log(frodo);

// ! методы массив II (примеры с объектами)

const brothers = [
  { name: "Gandalf", height: 160, hasMagic: true, race: "maia", age: 2500 },
  { name: "Legolas", height: 170, hasMagic: true, race: "elf", age: 900 },
  { name: "Frodo", height: 60, hasMagic: false, race: "hobbit", age: 30 },
  { name: "Saruman", height: 155, hasMagic: true, race: "maia", age: 2000 },
  { name: "Aragorn", height: 160, hasMagic: false, race: "human", age: 120 },
  { name: "Sam", height: 63, hasMagic: false, race: "hobbit", age: 32 },
];
// ! map()
// не мутирующий
// итерируется по всем элементам исходного массива
// с каждым элементом можно произвести желаемую операцию
// создает новый массив (под него нужно создать переменную)
// ! длинна нового массива всегда равна длине исходного

// * пример 1
// за место el на каждой итерации приходит следующий элемент массива

const arr1 = brothers.map((el) => console.log(el.name));
// в этом пример в новом массиве будет массив из undefined - потому что после '=>' нет возвращенного значения

// * пример 2
// hero или el - это название переменной которе мы придумываем сами - как обращаться к элементам итерируемого массива

const arr = brothers.map((hero) => hero.name + " is " + hero.race);

// console.log(arr);
// console.log(brothers);
// console.log(arr1);

// * массив из имен - самый простой пример
const eges = brothers.map((element) => element.age);
console.log(eges);
const namesAndAges = brothers.map(
  (element) => element.name + " is " + element.age + " years old"
);
console.log(namesAndAges);

// * пример 3
// нам не обязательно создавать новый массив
// мы можем использовать метод map() как процедуру,
// которая производит изменения с другими элементами

const arr3 = [];
const arr4 = brothers.map((el) => arr3.push(el.name));

console.log(arr3); // массив из имен которые добавляли на каждой итерации
console.log(arr4); // массив из возвращенных значений изменяющейся длинны arr3

// ! filter()
// не мутирующий
// создает новый массив на основе предыдущего
// в него войдут только те элементы, которые удовлетворяют условию после '=>'
// ! метод всегда возвращает массив (если элементов удовлетворяющих условию не найдено - возвращает пустой массив)

// const brothers1 = (el => el.hasMagic === true);
// console.log(brothers1); // массив из объектов, где hasMagic = true

const brothers2 = brothers.filter(
  (el) => el.hasMagic === false && el.height > 60
);
console.log(brothers2); // массив из объектов, где hasMagic = false и height

const brothers3 = brothers.filter((el) => el.race === "alien");
console.log(brothers3); // пустой массив, потому что нет таких элементов

// ! find()
// не мутирующий
// возвращает первый элемент удовлетворяющий условию после '=>'
// если элемент не найден - возвращает undefined

const brothers1 = brothers.find((el) => el.name === "Saruman");
console.log(brothers1); // объект с именем Saruman

// ! slice()
// не мутирующий
// возвращает измененный массив
// из исходного мы вырезаем ту часть которая нам нужна

// принимает два аргумента:
// 1й - c какого индекса (включительно)
// * 2й (не обязательный) - до какого индекса (не включительно) ⚠️
// если передавать один - это будет значит 'до самого конца'

const shortBrothers = brothers.slice(1, 4);

console.log(shortBrothers); // массив из 3 элементов начиная со второго и заканчивая четвертым (не включая его)
console.log(brothers); // исходный массив не изменился

const lastBrothers = brothers.slice(-2);

console.log(lastBrothers); // массив из двух последних элементов исходного массива
console.log(brothers); // исходный массив не изменился

// ! splice()
// мутирующий
// удаляет элементы из исходного массива

// принимает два аргумента:
// 1й - c какого индекса удаляет (включительно)
// * 2й (не обязательный) - кол-во удаляемых элементов ⚠️
// если передавать один - это будет значит 'удаляем до самого конца'

console.log(namesAndAges); // исходный массив
namesAndAges.splice(1, 3); // удаляем с 1 индекса 3 элемента

// ! sort()
// мутирующий метод
// метод сортировки
// по умолчанию работает как сортировка строк
// для того чтобы отсортировать числа по порядку - нужна функция сортировки

const brothersNames = brothers.map(el => el.name)
brothersNames.sort() // ! сортировка строк
console.log(brothersNames); // отсортированный массив имен


const brothersAges = brothers.map(el => el.age);
brothersAges.sort((a, b) => b - a); // сортировка по убыванию
console.log(brothersAges); // отсортированный массив имен

brothers.sort((a, b) => a.name.localeCompare(b.name)); // сортировка  по имени
console.log(brothers); // отсортированный массив объектов по имени
// ! reduce()
// поочередно выполняет операции с элементами (el) производя вычисления с аккумулируемым значением (acc)

// 1. 1й аргумент функция с действием
// 2. 2й - начальное значение для acc
// возвращает значение
const sumOfAges = brothersAges.reduce((acc, el) => acc + el, 0);
console.log(sumOfAges); // сумма всех возрастов

const sumOfNames = brothersNames.reduce((acc , el) => acc + 'этот ' + el + ', ', 'Герои: ')
console.log(sumOfNames); // Герои , Gandalf , Legolas , Frodo ,