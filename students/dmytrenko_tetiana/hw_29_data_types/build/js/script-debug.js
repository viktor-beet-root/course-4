"use strict";

// ТИПИ ДАНИХ ТА ОПЕРАТОРИ
// Мінімум
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// const c = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(c);
// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично
// правильної відповіді.
// const a = "1";
// const b = 2;
// const c = (+a + b);
// console.log(c);
// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб
// поміщається на флешку.
// const fileSize = 820;
// const flash_drive_size = prompt('Який обсяг флешки в Гб?');
// const flash_drive_size_Mb = (+flash_drive_size) * 1000;
// const number_of_files = flash_drive_size_Mb / 820;
// console.log(~~number_of_files);
// Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі у нього залишиться.
// const cash = +prompt('Скільки грошей у вас в гаманці?');
// const chocolate_price = +prompt('Скільки коштує одна шоколадка?');
// const number_of_chocolates = ~~((cash * 100) / (chocolate_price * 100));
// const summingCost = ((chocolate_price * 100) * number_of_chocolates) / 100;
// const rest = ((cash * 100) - (summingCost * 100)) / 100;
// const conclusion = 'Користувач може купити ' + number_of_chocolates + ' шоколадок і у нього залишиться ' + rest + ' грн.';
// console.log(conclusion);
// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// Максимум
// const three_symbols_number = +prompt('Введи трицифрове число');
// const third_number = (three_symbols_number % 10);
// const second_number = (~~(three_symbols_number / 10)) % 10;
// const first_number = ~~(three_symbols_number / 100);
// const revers_number = '' + third_number + second_number + first_number;
// console.log(revers_number);
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.
// const deposit = +prompt('Введіть сумму вклада на 2 місяці');
// const rate = "5%";
// const rate_two_months = +(parseInt(rate) / 6).toFixed(2);
// console.log(rate_two_months);
// console.log(typeof (rate_two_months));
// const sum_rate_two_months = (((deposit / 100) * 100) * (rate_two_months * 100)) / 10000;
// const ad_sum_rate_two_months = 'За депозитом 5% річних через 2 місяці ви отримаєте ' + sum_rate_two_months.toFixed(2) + ' грн.';
// console.log(ad_sum_rate_two_months);
// 2. Що повернуть вирази:
//  2 && 0 && 3
0; //  2 || 0 || 3

2; // 2 && 0 || 3

3;