'use strict';
// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

const symuResult = 'При додаванні 0,1 і 0,2, математично правильний результат ' + ((0.1 * 10 + 0.2 * 10) / 10);
console.log(symuResult)

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

const oneStr = '1';
const twoNum = 2;
const symuOfOneTwo = 'При додаванні рядка "1" і цифри 2, математично правильний результат ' + (Number(oneStr) + twoNum);
console.log(symuOfOneTwo);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const file820mb = 820;
const fleshMemoryGB = +prompt('Обсяг флешки в Гб', '');
const howManyFile = Math.floor(fleshMemoryGB * 1000 / file820mb) + " файлів розміром в 820 Мб поміщається на флешку розміром " + fleshMemoryGB;
console.log(howManyFile);

// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const howMuchMoney = +prompt('Введи суму грошей в гаманці', '');
const chocolateCost = +prompt('Введи сціну однієї шоколадки', '');
const howManyChocolate = Math.floor(howMuchMoney / chocolateCost);
const moneyRemainder = howMuchMoney % (howManyChocolate * chocolateCost);
const howManyChocolateResult = 'Ти можеш придбати ' + howManyChocolate + " шоколадок по ціні " + chocolateCost + " на суму " + howMuchMoney + ". Здача " + moneyRemainder;
console.log(howManyChocolateResult);

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const userNumber = +prompt('Введи тризначне число', '');
const reverseUserNumber = (userNumber % 10) * 100 + (~~(userNumber / 10) % 10) * 10 + ~~(userNumber / 100) % 10;
console.log(reverseUserNumber);

// Максимум

// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.

const userMoneyDeposit = +prompt('Введи суму вкладу', '');
const depositPercent = 5;
const depositTime = 2;
const userDepositDone = userMoneyDeposit * (1 + (depositPercent / 100) * (depositTime / 12));
const userMoneyResult = 'При вкладі ' + userMoneyDeposit + " в банк на 2 місяці, з процентною ставкою депозиту 5% річних, отримаєш " + (Math.round(userDepositDone * 100) / 100);
console.log(userMoneyResult);

// 2. Що повернуть вирази:
//  2 && 0 && 3 - поверне 0

//  2 || 0 || 3 - поверне 2

// 2 && 0 || 3 - поверне 3. 2 && 0 - тут 0. Далі 0 || 3 - тут 3.
