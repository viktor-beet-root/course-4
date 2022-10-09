// Мінімум
// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const a = 0.1;
const b = 0.2;
const mul = 10;
const c = (a * mul + b * mul) / mul;
console.log(c);

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних),
// добийся математично правильної відповіді.
const numStr = '1';
const numDg = 2;
const sum = +numStr + numDg;
console.log(sum);

// Користувач вказує обсяг флешки в Гб.
// Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const flashSize = +prompt('Flash Size? (Gb)', '');
const fileSize = 820;
const flashSizeInMb = flashSize * 1024;
const filesOnFlash = (flashSizeInMb - flashSizeInMb % fileSize) / fileSize;
console.log(filesOnFlash);

// Норма
// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const money = +prompt('Money in pocket?', '');
const sweetCost = +prompt('Sweet cost?', '');
const remain = money % sweetCost;
const sweetQty = (money - remain) / sweetCost;
const answer = 'You can buy ' + sweetQty + ' chocolateies. Your balance is ' + remain;
console.log(answer);

// Запитай у користувача тризначне число і виведи його задом наперед.
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
const number = +prompt('Enter a 3-digit number?', '');
const dFirst = (number - number % 100) / 100;
let tempNumber = number - dFirst * 100;
const dSecond = (tempNumber - tempNumber % 10) / 10;
const dThird = tempNumber - dSecond * 10;
const newNumber = dThird*100+dSecond*10+dFirst;
console.log(newNumber);
