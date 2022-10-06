"use strict";

// ЦИКЛИ
// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11),
// підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...),
// передбач можливість введення невірних даних
var userAge = +prompt('Скільки вам років?');
var ageCategory;

if (userAge >= 0 && userAge <= 11) {
  ageCategory = 'ти дитина';
} else if (userAge >= 12 && userAge <= 17) {
  ageCategory = 'ти підліток';
} else if (userAge >= 18 && userAge <= 59) {
  ageCategory = 'ти дорослий';
} else if (userAge >= 60) {
  ageCategory = 'ти пенсіонер';
} else {
  ageCategory = 'ввів неправильні данні';
}

console.log(ageCategory); // 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші(1!, 2 @, 3 # і т.д).

var num = +prompt('введи число від 0 до 9', '0');

switch (num) {
  case 0:
    console.log(')');
    break;

  case 1:
    console.log('!');
    break;

  case 2:
    console.log('@');
    break;

  case 3:
    console.log('#');
    break;

  case 4:
    console.log('$');
    break;

  case 5:
    console.log('%');
    break;

  case 6:
    console.log('^');
    break;

  case 7:
    console.log('&');
    break;

  case 8:
    console.log('*');
    break;

  case 9:
    console.log('(');
    break;
}

var e = 0;
var sum_ = 0;

while (e < num) {
  e++;
  sum_ += e;
}

console.log('Сума всіх чисел в твоєму диапазоні ' + sum_); // 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

var start = +prompt('введи перше число', '0');
var end = +prompt('введи другечисло', '0');

if (start < end) {
  var i = start;
  var sum = start;

  while (i < end) {
    i++;
    sum += i;
  }

  console.log('Сума чисел в заданому діапазоні ' + sum);
} else if (end < start) {
  var _i = end;
  var _sum = end;

  while (_i < start) {
    _i++;
    _sum += _i;
  }

  console.log('Сума чисел в заданому діапазоні ' + _sum);
} else if (end === start) {
  console.log('Діапазон чисел не заданий');
} // 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.


var first_numb = +prompt("введіть перше число ", "9");
var second_numb = +prompt("введіть друге число ", "33");
var answerString = "Найбільший спільний дільник чисел: ";

do {
  if (first_numb > second_numb) {
    first_numb = first_numb - second_numb;
  } else {
    second_numb = second_numb - first_numb;
  }
} while (first_numb !== second_numb);

console.log(answerString + first_numb); // 5. Запитай у користувача число і виведи всі дільники цього числа.

var numb = +prompt('Введи число');
var divider = 0;

for (var _i2 = 1; _i2 <= numb; _i2++) {
  if (numb % _i2 === 0) {
    divider = divider + _i2 + ' ';
  } else {
    continue;
  }
}

var alldividers = 'Всі дільники твого числа ' + numb + ': ' + divider;
console.log(alldividers); // Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

var usNumber;

do {
  usNumber = prompt('Введи п\'ятирозрядне число');
} while (usNumber.length != 5 || false);

var fiveDigitNum = +usNumber; // const five_symbols_number = +usNumber;

var fifth_n = fiveDigitNum % 10 * 10000;
var fourth_n = ~~(fiveDigitNum / 10) % 10 * 1000;
var third_n = ~~(fiveDigitNum / 100) % 10 * 100;
var second_n = ~~(fiveDigitNum / 1000) % 10 * 10;
var first_n = ~~(fiveDigitNum / 10000);
var revers_n = fifth_n + fourth_n + third_n + second_n + first_n;
console.log(revers_n);
var message;

if (fiveDigitNum === revers_n) {
  message = 'Число ' + fiveDigitNum + ' паліндром';
} else {
  message = 'Число ' + fiveDigitNum + ' не паліндром';
}

console.log(message); // 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.

var summing = +prompt('Скільки коштує твоя покупка?');
var discounted_amount;
var res;

if (summing >= 200 && summing < 300) {
  res = (summing * 100 - (summing / 100 * 3).toFixed(2) * 100) / 100;
  discounted_amount = 'Твоя сума до сплати зі знижкою 3% - ' + res;
} else if (summing >= 300 && summing < 500) {
  res = (summing * 100 - (summing / 100 * 5).toFixed(2) * 100) / 100;
  discounted_amount = 'Твоя сума до сплати зі знижкою 5% - ' + res;
} else if (summing >= 500) {
  res = (summing * 100 - (summing / 100 * 7).toFixed(2) * 100) / 100;
  discounted_amount = 'Твоя сума до сплати зі знижкою 7% - ' + res;
} else if (summing > 0 && summing < 200) {
  discounted_amount = 'Твоя сума до сплати без знижки ' + summing;
} else {
  discounted_amount = 'Ти не повідомив сумму';
}

console.log(discounted_amount); // 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.

var dod = 0;
var vid = 0;
var zer = 0;
var even = 0;
var odd = 0;
var input;

for (var _i3 = 1; _i3 < 11; _i3++) {
  input = +prompt('введіть число №' + _i3);

  if (input > 0) {
    dod++;
  }

  if (input === 0) {
    zer++;
  }

  if (input < 0) {
    vid++;
    3;
  }

  if (input % 2) {
    odd++;
  } else {
    even++;
  }
}

console.log('Додатніх чисел: ' + dod + '\nвід\'ємних чисел: ' + vid + '\nнулів: ' + zer + '\nпарних чисел: ' + even + '\nнепарних чисел: ' + odd); // 4. Зацикли відображення днів тижня таким чином:
// «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.

var day = '';
var count = 0;

while (confirm(day + ' Хочеш побачити який наступний день?') === true) {
  switch (count) {
    case 0:
      day = 'Понеділок.';
      count++;
      break;

    case 1:
      day = 'Вівторок.';
      count++;
      break;

    case 2:
      day = 'Середа.';
      count++;
      break;

    case 3:
      day = 'Четвер.';
      count++;
      break;

    case 4:
      day = 'П\'ятниця.';
      count++;
      break;

    case 5:
      day = 'Субота.';
      count++;
      break;

    case 6:
      day = 'Неділя.';
      count++;
      break;
  }

  if (count > 6) {
    count = 0;
  }
}