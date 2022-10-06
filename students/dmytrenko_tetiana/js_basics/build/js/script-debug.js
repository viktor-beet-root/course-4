"use strict";

// ОСНОВИ JavaScript
// Мінімум 
// Створи HTML - файл, в ньому пропиши всі можливі способи використання JS;
// Тобі потрібно зберігати ім’я та прізвище в змінній, придумай до 4 - х імен змінних, 
// що потрібні тобі для даної задачі.
var firstName_lastName = 'name surname';
var name_surname = 'name surname';
var nameSurname = 'name surname';
var _nameSurname = 'name surname'; // Також напиши до 5 неправильних 
// імен(неправильні імена повинні бути закоментовані);
// const firstName lastName = 'name surname';
// const 1name_surname = 'name surname';
// const 12 = 'name surname';
// const human = 'name surname';
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
// const yourName = prompt('Як тебе звуть?', '');
// const nameMessage = 'Привітб ' + yourName;
// console.log(nameMessage);
// Запитай рік народження користувача, порахуй його / її вік і виведи результат.
// Поточний рік вкажи в коді як константу;
// const userYearBirth = +prompt('Твій рік народження?', '1990');
// const THIS_YEAR = 2022;
// let userage = THIS_YEAR - userYearBirth;
// let message = 'Тобі зараз ' + userage + 'років';
// console.log(message);
// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
// const sideLength = +prompt('Довжина сторони квадрата?', 0);
// const perimeterSquare = sideLength * 4;
// let message = 'Периметр квадрата ' + perimeterSquare;
// console.log(message);
// Максимум
// Запитай у користувача радіус кола і виведи площу такої окружності.
// const circleRadius = +prompt('Яка довжина радіусу?', 0);
// const S = 2 * Math.PI * circleRadius;
// let message = 'Радіус кола ' + S;
// console.log(message);
// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він 
// хоче дістатися.Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
// const distanceCities = +prompt('Яка відстань між містами?', 0);
// const needTime = +prompt('Скільки часу бажаєшь витратити?', 0);
// const speed = distanceCities / needTime;
// let message = 'Потрібно їхати зі швидкістю ' + speed + 'км/год';
// console.log(message);
// Реалізуй конвертор валют.Користувач вводить долари, програма переводить їх в євро.Курс 
// валют зберігається в константі.
// const numberDollars = +prompt('Скільки доларів?', 0);
// const costDollarToEur = 0.99;
// const numberEuro = (numberDollars * 100) / (costDollarToEur * 100);
// let message = numberDollars + '$' + ' це ' + numberEuro.toFixed(2) + 'EUR';
// console.log(message);
// ==========================================================================================================
// ТИПИ ДАНИХ ТА ОПЕРАТОРИ
// Мінімум
// 1. Виконай додавання 0,1 і 0,2 отримай математично правильну відповідь.

var firstN = 0.1;
var secondN = 0.2;
var result = (firstN * 10 + secondN * 10) / 10; // console.log(result);
// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), отримай математично
// правильну відповідь.

var a = "1";
var b = 2;
var d = +a + b; // console.log(d);
// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб
// поміщається на флешку.

var fileSize = 820; // const flash_drive_size = prompt('Який обсяг флешки в Гб?');
// const flash_drive_size_Mb = (+flash_drive_size) * 1000;
// const number_of_files = ~~(flash_drive_size_Mb / fileSize);
// console.log(number_of_files);
// Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі у нього залишиться.
// const cash = +prompt('Скільки грошей у вас в гаманці?', 0);
// const chocolate_price = +prompt('Скільки коштує одна шоколадка?', '0.00');
// const number_of_chocolates = ~~((cash * 100) / (chocolate_price * 100));
// const summingCost = ((chocolate_price * 100) * number_of_chocolates) / 100;
// const rest = ((cash * 100) - (summingCost * 100)) / 100;
// const conclusion = 'Користувач може купити ' + number_of_chocolates + ' шоколадок і у нього залишиться ' + rest + ' грн.';
// console.log(conclusion);
// 2. Запитай у користувача тризначне число і виведи його задом наперед. 
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// Максимум
// const three_symbols_number = +prompt('Введи трицифрове число');
// const hundredsRank = (three_symbols_number % 10) * 100;
// const tensRank = ((~~(three_symbols_number / 10)) % 10) * 10;
// const unitsRank = ~~(three_symbols_number / 100);
// const revers_number = hundredsRank + tensRank + unitsRank;
// console.log(revers_number);
// максимум
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.
// const deposit = +prompt('Введіть сумму вклада на 2 місяці');
// const rate = "5%";
// const rate_two_months = +(parseInt(rate) / 6).toFixed(2);
// console.log(rate_two_months);
// console.log(typeof (rate_two_months));
// const sum_rate_two_months = (((deposit / 100) * 100) * (rate_two_months * 100)) / 10000;
// const add_sum_rate_two_months = 'За депозитом 5% річних через 2 місяці ви отримаєте ' + sum_rate_two_months.toFixed(2) + ' грн.';
// console.log(add_sum_rate_two_months);
// 2. Що повернуть вирази:
//  2 && 0 && 3

0; //  2 || 0 || 3

2; // 2 && 0 || 3

3; // ==========================================================================================================
// ЦИКЛИ
// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11),
// підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...),
// передбач можливість введення невірних даних
// const userAge = +prompt('Скільки вам років?');
// let ageCategory;
// if (userAge >= 0 && userAge <= 11) {
//     ageCategory = 'ти дитина';
// } else if (userAge >= 12 && userAge <= 17) {
//     ageCategory = 'ти підліток';
// } else if (userAge >= 18 && userAge <= 59) {
//     ageCategory = 'ти дорослий';
// } else if (userAge >= 60) {
//     ageCategory = 'ти пенсіонер';
// } else {
//     ageCategory = 'ввів неправильні данні';
// }
// console.log(ageCategory);
// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// const num = +prompt('введи число від 0 до 9', '0');
// switch (num) {
//     case 0:
//         console.log(')');
//         break;
//     case 1:
//         console.log('!');
//         break;
//     case 2:
//         console.log('@');
//         break;
//     case 3:
//         console.log('#');
//         break;
//     case 4:
//         console.log('$');
//         break;
//     case 5:
//         console.log('%');
//         break;
//     case 6:
//         console.log('^');
//         break;
//     case 7:
//         console.log('&');
//         break;
//     case 8:
//         console.log('*');
//         break;
//     case 9:
//         console.log('(');
//         break;
// }
// let e = 0;
// let sum_ = 0;
// while (e < num) {
//     e++;
//     sum_ += e;
// }
// console.log('Сума всіх чисел в твоєму диапазоні ' + sum_)
// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// const start = +prompt('введи перше число', '0');
// const end = +prompt('введи другечисло', '0');
// if (start < end) {
//     let i = start;
//     let sum = start;
//     while (i < end) {
//         i++;
//         sum += i;
//     }
//     console.log('Сума чисел в заданому діапазоні ' + sum);
// } else if (end < start) {
//     let i = end;
//     let sum = end;
//     while (i < start) {
//         i++;
//         sum += i;
//     }
//     console.log('Сума чисел в заданому діапазоні ' + sum);
// } else if (end === start) {
//     console.log('Діапазон чисел не заданий');
// }
// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// let first_numb = +prompt("введіть перше число ", "9");
// let second_numb = +prompt("введіть друге число ", "33");
// const answerString = "Найбільший спільний дільник чисел: ";
// do {
//     if (first_numb > second_numb) {
//         first_numb = first_numb - second_numb;
//     } else {
//         second_numb = second_numb - first_numb;
//     }
// }
// while (first_numb !== second_numb);
// console.log(answerString + first_numb);
// 5. Запитай у користувача число і виведи всі дільники цього числа.
// const numb = +prompt('Введи число');
// let divider = 0;
// for (let i = 1; i <= numb; i++) {
//     if (numb % i === 0) {
//         divider = divider + i + ' ';
//     } else {
//         continue;
//     }
// }
// const alldividers = 'Всі дільники твого числа ' + numb + ': ' + divider;
// console.log(alldividers);
// Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// let usNumber;
// do {
//     usNumber = prompt('Введи п\'ятирозрядне число');
// } while (usNumber.length != 5 || false);
// const fiveDigitNum = +usNumber;
// // const five_symbols_number = +usNumber;
// const fifth_n = (fiveDigitNum % 10) * 10000;
// const fourth_n = ((~~(fiveDigitNum / 10)) % 10) * 1000;
// const third_n = ((~~(fiveDigitNum / 100)) % 10) * 100;
// const second_n = ((~~(fiveDigitNum / 1000)) % 10) * 10;
// const first_n = ~~(fiveDigitNum / 10000);
// const revers_n = fifth_n + fourth_n + third_n + second_n + first_n;
// console.log(revers_n);
// let message;
// if (fiveDigitNum === revers_n) {
//     message = 'Число ' + fiveDigitNum + ' паліндром';
// } else {
//     message = 'Число ' + fiveDigitNum + ' не паліндром';
// }
// console.log(message);
// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.
// const summing = +prompt('Скільки коштує твоя покупка?');
// let discounted_amount;
// let res;
// if (summing >= 200 && summing < 300) {
//     res = (summing * 100 - (summing / 100 * 3).toFixed(2) * 100) / 100;
//     discounted_amount = 'Твоя сума до сплати зі знижкою 3% - ' + res;
// } else if (summing >= 300 && summing < 500) {
//     res = (summing * 100 - (summing / 100 * 5).toFixed(2) * 100) / 100;
//     discounted_amount = 'Твоя сума до сплати зі знижкою 5% - ' + res;
// } else if (summing >= 500) {
//     res = (summing * 100 - (summing / 100 * 7).toFixed(2) * 100) / 100;
//     discounted_amount = 'Твоя сума до сплати зі знижкою 7% - ' + res;
// } else if (summing > 0 && summing < 200) {
//     discounted_amount = 'Твоя сума до сплати без знижки ' + summing;
// } else {
//     discounted_amount = 'Ти не повідомив сумму';
// }
// console.log(discounted_amount);
// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
// let dod = 0;
// let vid = 0;
// let zer = 0;
// let even = 0;
// let odd = 0;
// let input;
// for (let i = 1; i < 11; i++) {
//     input = +prompt('введіть число №' + i);
//     if (input > 0) {
//         dod++;
//     }
//     if (input === 0) {
//         zer++;
//     }
//     if (input < 0) {
//         vid++; 3
//     }
//     if (input % 2) {
//         odd++;
//     } else {
//         even++;
//     }
// }
// console.log('Додатніх чисел: ' + dod + '\nвід\'ємних чисел: ' + vid + '\nнулів: ' + zer + '\nпарних чисел: ' + even + '\nнепарних чисел: ' + odd);
// 4. Зацикли відображення днів тижня таким чином:
// «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
// let day = '';
// let count = 0
// while (confirm(day + ' Хочеш побачити який наступний день?') === true) {
//     switch (count) {
//         case 0:
//             day = 'Понеділок.';
//             count++;
//             break;
//         case 1:
//             day = 'Вівторок.';
//             count++;
//             break;
//         case 2:
//             day = 'Середа.';
//             count++;
//             break;
//         case 3:
//             day = 'Четвер.';
//             count++;
//             break;
//         case 4:
//             day = 'П\'ятниця.';
//             count++;
//             break;
//         case 5:
//             day = 'Субота.';
//             count++;
//             break;
//         case 6:
//             day = 'Неділя.';
//             count++;
//             break;
//     }
//     if (count > 6) {
//         count = 0;
//     }
// }
// =============================================================================
// ФУНКЦІЇ
// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.
// function name(parametrs) {
//     code
// }
// name(arguments);
// let name = function (parametrs) { code };
// name(arguments);
// let name = (parametrs) => code;
// let name = par => code;
// let name = () => code;
// let name = (parametrs) => {
//     code
//     code
//     return x;
// }
// name();
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function quantityArguments() {
//     return arguments.length;
// }
// console.log(quantityArguments('a', 'b', 'c', 'd'));
// 3. Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
// let num1 = +prompt('Перше число');
// let num2 = +prompt('Друге число');
// let compareNumber = (num1, num2) => {
//     if (num1 < num2) {
//         return '-1';
//     } else if (num1 > num2) {
//         return '1';
//     } else {
//         return '0';
//     }
// }
// console.log(compareNumber(num1, num2));
// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
// let n = +prompt('Введи ціле додатне число', '0');
// var factorial = function (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         let fl = 1;
//         for (let i = 1; i <= n; i++) {
//             fl = fl * i;
//         }
//         return fl;
//     }
// };
// const message = n + '!' + ' = ' + factorial(n)
// console.log(message);
// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад:
// цифри 1, 4, 9 перетворяться в число 149.
// let hundreds;
// let dozens;
// let units;
// let numeric;
// let numberValidate = function (number) {
//     if ((number !== '')) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(numberValidate(hundreds), numberValidate(dozens), numberValidate(units));
// function converter(hundreds, dozens, units) {
//     if (numberValidate(hundreds) === true && numberValidate(dozens) === true && numberValidate(units) === true) {
//         return numeric = +hundreds * 100 + +dozens * 10 + +units;
//     } else {
//         return numeric = console.log('Неправильно введені цифри');
//     }
// }
// console.log(converter(37, 4, 4));
// Напиши функцію, яка приймає довжину і ширину прямокутника
// і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// let area;
// function quadrangleArea() {
//     if (arguments.length === 1) {
//         area = ((arguments[0] * 100) ** 2) / 10000;
//     } else if (arguments.length === 2) {
//         area = ((arguments[0] * 100) * (arguments[1] * 100)) / 10000;
//     }
//     return area;
// }
// console.log(quadrangleArea(6));
// Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// let numf = +prompt('Введіть ціле додатне число');
// let perfectNumber_ = function (numf) {
//     let sum = 0;
//     let is_perfect;
//     for (var i = 1; i < numf; i++) {
//         if (!(numf % i)) {
//             sum += i;
//         }
//     }
//     if (sum === numf && sum !== 0) {
//         is_perfect = 'Число ' + numf + ' досконале';
//     } else {
//         is_perfect = 'Число ' + numf + ' не досконале';
//     }
//     return is_perfect;
// }
// console.log(perfectNumber_(numf));
//2.  Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй
// написану раніше функцію, щоб дізнатися, чи є це число досконалим.
// let perfectNumber = function (num) {
//     let sum = 0;
//     let is_perfect;
//     for (var i = 1; i < num; i++) {
//         if (!(num % i)) {
//             sum += i;
//         }
//     }
//     if (num === sum && num !== 0) {
//         is_perfect = true;
//     } else {
//         is_perfect = false;
//     }
//     return is_perfect;
// }
// let numb1 = +prompt('Введіть перше ціле додатне число');
// let numb2 = +prompt('Введіть друге ціле додатне число');
// function searchPerfectNumber(numb1, numb2) {
//     let num;
//     let result = 'Досконалі числа із діапазону ' + numb1 + ' та ' + numb2 + ': ';
//     for (let i = numb1; i < numb2; i++) {
//         num = i;
//         if (perfectNumber(num) === true) {
//             result = result + num + ' ';
//         } else {
//             continue;
//         }
//     }
//     return result;
// }
// console.log(searchPerfectNumber(numb1, numb2));
// =============================================================================
// ОБ'ЄКТИ
// Мінімум
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску,
//     середня швидкість, обсяг паливного баку, середня витрата палива
//     на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1. Метод, який виводить на екран інформацію про автомобіль.
// 2. Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива
//      для подолання переданої відстані з середньою швидкістю.
//      Враховуй, що через кожні 4 години дороги водієві необхідно робити 
//      перерву на 1 годину.

var avto = {
  manufacturer: 'Peugeot',
  model: '1007',
  year_of_issue: '2005',
  average_speed: '130',
  fuel_volume: '1360',
  consumption_per_100_km: '6.6',
  drivers: 'Ivan',
  dispInformation: function dispInformation() {
    return "Виробник: " + this.manufacturer + "\n" + "Виробник: " + this.model + "\n" + "Рік випуска: " + this.year_of_issue + "\n" + "Середня швидкість: " + this.average_speed + "\n" + "Об'єм' топливного бака: " + this.fuel_volume + "\n" + "Витрати топлива на 100 км: " + this.consumption_per_100_km + "\n" + "Ім'я водія: " + this.drivers;
  },
  setName: function setName(name) {
    this.drivers = this.drivers + ', ' + name;
  },
  fuelOnDistance: function fuelOnDistance(distance) {
    var fuel = (+this.consumption_per_100_km).toFixed(2) * 100 * (this.rounded(distance) * 100) / 1000000;
    return 'На ' + distance + 'км витрачається ' + fuel.toFixed(2) + 'л палива';
  },
  rounded: function rounded(number) {
    return +number.toFixed(2);
  },
  timeOnDistance: function timeOnDistance(distance, breakdistance) {
    var timeclear = this.rounded(distance) * 100 / this.average_speed * 100 / 10000;
    var timeOnDistance = +timeclear / breakdistance + +timeclear;
    return 'Для проходження ' + distance + 'км,' + "\n" + 'з урахуванням часових зупинок ' + "\n" + 'через кожні ' + breakdistance + 'км, потрібно ' + "\n" + timeOnDistance.toFixed(1) + ' годин часу';
  }
};
avto.setName('Ilya');
avto.setName('Oleg'); // console.log(avto.dispInformation());
// console.log(avto.fuelOnDistance(1));
// console.log(avto.timeOnDistance(5000, 4));
// // // Норма
// Створити об'єкт, що описує час (години, хвилини, секунди),
//  і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
//     Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу,
//         може змінитися і інша.Наприклад: якщо до часу «20: 59: 45» додати 30 секунд,
//             то повинно вийти «21: 00: 15», а не «20: 59: 75». Також потрібно передбачити
// можливість того що користувач може передати 150 секунд, або 75 хвилин.