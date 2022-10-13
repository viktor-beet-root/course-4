"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// ТИПИ ДАНИХ ТА ОПЕРАТОРИ
// Мінімум
// 1. Виконай додавання 0,1 і 0,2 отримай математично правильну відповідь.
var firstN = 0.1;
var secondN = 0.2;
var result = (firstN * 10 + secondN * 10) / 10;
console.log(result); // 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), отримай математично
// правильну відповідь.

var a = "1";
var b = 2;
var d = +a + b;
console.log(d); // 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб
// поміщається на флешку.

var fileSize = 820;
var flash_drive_size = prompt('Який обсяг флешки в Гб?');
var flash_drive_size_Mb = +flash_drive_size * 1000;
var number_of_files = ~~(flash_drive_size_Mb / fileSize);
console.log(number_of_files); // Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі у нього залишиться.

var cash = +prompt('Скільки грошей у вас в гаманці?', 0);
var chocolate_price = +prompt('Скільки коштує одна шоколадка?', '0.00');
var number_of_chocolates = ~~(cash * 100 / (chocolate_price * 100));
var summingCost = chocolate_price * 100 * number_of_chocolates / 100;
var rest = (cash * 100 - summingCost * 100) / 100;
var conclusion = 'Користувач може купити ' + number_of_chocolates + ' шоколадок і у нього залишиться ' + rest + ' грн.';
console.log(conclusion); // 2. Запитай у користувача тризначне число і виведи його задом наперед. 
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// Максимум

var three_symbols_number = +prompt('Введи трицифрове число');
var hundredsRank = three_symbols_number % 10 * 100;
var tensRank = ~~(three_symbols_number / 10) % 10 * 10;
var unitsRank = ~~(three_symbols_number / 100);
var revers_number = hundredsRank + tensRank + unitsRank;
console.log(revers_number); // максимум
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.

var deposit = +prompt('Введіть сумму вклада на 2 місяці');
var rate = "5%";
var rate_two_months = +(parseInt(rate) / 6).toFixed(2);
console.log(rate_two_months);
console.log(_typeof(rate_two_months));
var sum_rate_two_months = deposit / 100 * 100 * (rate_two_months * 100) / 10000;
var add_sum_rate_two_months = 'За депозитом 5% річних через 2 місяці ви отримаєте ' + sum_rate_two_months.toFixed(2) + ' грн.';
console.log(add_sum_rate_two_months); // 2. Що повернуть вирази:
//  2 && 0 && 3

0; //  2 || 0 || 3

2; // 2 && 0 || 3

3;