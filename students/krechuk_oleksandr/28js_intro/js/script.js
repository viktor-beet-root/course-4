'use strict';
// Мінімум
// 1. Створи HTML-файл, в ньому пропиши всі можливі способи використання JS;
// 2.Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4-х імен змінних, що потрібні тобі для даної задачі. Також напиши до 5 неправильних імен (неправильні імена повинні бути закоментовані);
// const firstName = Oleksandr;
// const lastName = Krechyk;

// Додаткові змінні
// myName
// mySurname

//Неправильні змінні
// Name
// 1ttt
// a-data
// first Name
// data^type

// 3. Вкажи всі можливі способи коментування коду;

//

/** Для документування
*
*
*
*/

/*ggasdfg
sdg
asg
sgf
asfg*/

// 4. Які стилі написання імен змінних ти знаєш ?

// camelCase
// PascalCase або СamelCase
// Kebab-case
// Snake_case

// Норма

// 1. Запитай ім’я користувача та виведи у відповідь “Привіт, * ім’я *”;

const userFirstName = prompt("Вкажи своє ім'я", "");
const resultFirstName = '"Привіт, ' + userFirstName + '"';
console.log(resultFirstName);

// 2. Запитай рік народження користувача, порахуй його / її вік і виведи результат.Поточний рік вкажи в коді як константу;

const userAge = +prompt("Вкажи свій рік народження", "");
const year2022 = 2022;
const userHowOld = year2022 - userAge;
const resultAge = '"Твій вік, ' + userHowOld + ' років"';
console.log(resultAge);

// 3. Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const squareLenght = +prompt("Вкажи довжину сторони квадрату в см", "");
const squarePerimeter = 4 * squareLenght;
const resultSquare = '"Периметр квадрату, P = ' + squarePerimeter + ' см"';
console.log(resultSquare);

// Максимум

// 1. Запитай у користувача радіус кола і виведи площу такої окружності.

const circlRadius = +prompt("Вкажи радіус кола в см", "");
const PI = Math.PI;
const circlArea = PI * circlRadius * circlRadius;
const resultCircl = '"Площа окружності, S = ' + (Math.round(circlArea * 100) / 100) + ' кв. см"';
console.log(resultCircl);

// 2. Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися.Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.

const townDistans = +prompt("Вкажи відстань в кілометрах між двома містами в кілометрах", "");
const timeOnTime = +prompt("Вкажи за скільки годин ти хочеш дістатися", "");
const speedOnTime = townDistans / timeOnTime;
const resultSpeed = '"Щоб встигнути вчасно, тобі потрібно рухатись зі швидкістю ' + Math.ceil(speedOnTime) + ' км/г"';
console.log(resultSpeed);

// 3. Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.Курс валют зберігається в константі.

const howManyDollar = +prompt("Вкажи cумму в доларах", "");
const dolarToEuroRate = 0.983;
const euroToDollar = howManyDollar * dolarToEuroRate;
const resultDolarToEuro = '"За ' + howManyDollar + '$' + ' ти отримаєш ' + (Math.round(euroToDollar * 100) / 100) + '€"';
console.log(resultDolarToEuro);
