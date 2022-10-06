// ОСНОВИ JavaScript
// Мінімум 

// Створи HTML - файл, в ньому пропиши всі можливі способи використання JS;
// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4 - х імен змінних, 
// що потрібні тобі для даної задачі.
const firstName_lastName = 'name surname';
const name_surname = 'name surname';
const nameSurname = 'name surname';
const _nameSurname = 'name surname';

// Також напиши до 5 неправильних
// імен(неправильні імена повинні бути закоментовані);
// const firstName lastName = 'name surname';
// const 1name_surname = 'name surname';
// const 12 = 'name surname';
// const human = 'name surname';
// const 2name = 'name surname';

// Вкажи всі можливі способи коментування коду;
// code
/**
 * code
 * code
 */
/* code */

// Які стилі написання імен змінних ти знаєш ?
// camelCase
// PascalCase
// snake_case
// SCREAMING_SNAKE_CASE
// kebab-case
// TRAIN-CASE
// Train-Case
// flatcase


// Норма

// Запитай ім’я користувача та виведи у відповідь “Привіт, * ім’я *”;
const yourName = prompt('Як тебе звуть?', '');
const nameMessage = 'Привітб ' + yourName;
console.log(nameMessage);

// Запитай рік народження користувача, порахуй його / її вік і виведи результат.
// Поточний рік вкажи в коді як константу;
const userYearBirth = +prompt('Твій рік народження?', '1990');
const THIS_YEAR = 2022;
let userAge = THIS_YEAR - userYearBirth;
let message = 'Тобі зараз ' + userAge + 'років';
console.log(message);

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const sideLength = +prompt('Довжина сторони квадрата?', 0);
const perimeterSquare = sideLength * 4;
let message1 = 'Периметр квадрата ' + perimeterSquare;
console.log(message1);

// Максимум

// Запитай у користувача радіус кола і виведи площу такої окружності.
const circleRadius = +prompt('Яка довжина радіусу?', 0);

const S = 2 * Math.PI * circleRadius;
let message2 = 'Радіус кола ' + S;
console.log(message2);

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він
// хоче дістатися.Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const distanceCities = +prompt('Яка відстань між містами?', 0);
const needTime = +prompt('Скільки часу бажаєшь витратити?', 0);

const speed = distanceCities / needTime;
let message3 = 'Потрібно їхати зі швидкістю ' + speed + 'км/год';
console.log(message3);

// Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.Курс
// валют зберігається в константі.
const numberDollars = +prompt('Скільки доларів?', 0);
const costDollarToEur = 0.99;

const numberEuro = (numberDollars * 100) / (costDollarToEur * 100);
let message4 = numberDollars + '$' + ' це ' + numberEuro.toFixed(2) + 'EUR';
console.log(message4);
