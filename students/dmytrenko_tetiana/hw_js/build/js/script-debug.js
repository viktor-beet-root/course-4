"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

// ТИПИ ДАНИХ ТА ОПЕРАТОРИ
// Мінімум
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
var c = (0.1 * 10 + 0.2 * 10) / 10;
console.log(c); // 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично
// правильної відповіді.

var a = "1";
var b = 2;
var d = +a + b;
console.log(d); // 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб
// поміщається на флешку.

var fileSize = 820;
var flash_drive_size = prompt('Який обсяг флешки в Гб?');
var flash_drive_size_Mb = +flash_drive_size * 1000;
var number_of_files = flash_drive_size_Mb / 820;
console.log(~~number_of_files); // Норма
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі у нього залишиться.

var cash = +prompt('Скільки грошей у вас в гаманці?');
var chocolate_price = +prompt('Скільки коштує одна шоколадка?');
var number_of_chocolates = ~~(cash * 100 / (chocolate_price * 100));
var summingCost = chocolate_price * 100 * number_of_chocolates / 100;
var rest = (cash * 100 - summingCost * 100) / 100;
var conclusion = 'Користувач може купити ' + number_of_chocolates + ' шоколадок і у нього залишиться ' + rest + ' грн.';
console.log(conclusion); // 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// Максимум

var three_symbols_number = +prompt('Введи трицифрове число');
var third_number = three_symbols_number % 10;
var second_number = ~~(three_symbols_number / 10) % 10;
var first_number = ~~(three_symbols_number / 100);
var revers_number = '' + third_number + second_number + first_number;
console.log(revers_number); // 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.

var deposit = +prompt('Введіть сумму вклада на 2 місяці');
var rate = "5%";
var rate_two_months = +(parseInt(rate) / 6).toFixed(2);
console.log(rate_two_months);
console.log(_typeof(rate_two_months));
var sum_rate_two_months = deposit / 100 * 100 * (rate_two_months * 100) / 10000;
var ad_sum_rate_two_months = 'За депозитом 5% річних через 2 місяці ви отримаєте ' + sum_rate_two_months.toFixed(2) + ' грн.';
console.log(ad_sum_rate_two_months); // 2. Що повернуть вирази:
//  2 && 0 && 3

0; //  2 || 0 || 3

2; // 2 && 0 || 3

3; // ==========================================================================================
// ЦИКЛИ
// Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11),
// підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...),
// передбач можливість введення невірних даних

var userAge = +prompt('Скільки вам років?');
var youAre;

if (userAge >= 0 && userAge <= 11) {
  youAre = 'ти дитина';
  alert(youAre);
} else if (userAge >= 12 && userAge <= 17) {
  youAre = 'ти підліток';
  alert(youAre);
} else if (userAge >= 18 && userAge <= 59) {
  youAre = 'ти дорослий';
  alert(youAre);
} else if (userAge >= 60) {
  youAre = 'ти пенсіонер';
  alert(youAre);
} else {
  youAre = 'ввів неправильні данні';
  alert(youAre);
} // 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.


var num = +prompt('введи число від 1 до 9');

switch (num) {
  case 1:
    alert('!');
    break;

  case 2:
    alert('@');
    break;

  case 3:
    alert('#');
    break;

  case 4:
    alert('$');
    break;

  case 5:
    alert('%');
    break;

  case 6:
    alert('^');
    break;

  case 7:
    alert('&');
    break;

  case 8:
    alert('*');
    break;

  case 9:
    alert('(');
    break;
}

var e = 0;
var sum_ = 0;

while (e < num) {
  e++;
  sum_ = sum_ + e;
}

alert('Сума всіх чисел в твоєму диапазоні ' + sum); // 3. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

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

console.log(answerString + first_numb); // 4. Запитай у користувача число і виведи всі дільники цього числа.

var numb = +prompt('Введи число');
var divider = 0;

for (var i = 1; i <= numb; i++) {
  if (numb % i === 0) {
    divider = divider + i + ' ';
  } else {
    continue;
  }
}

var alldividers = 'Всі дільники твого числа ' + numb + ': ' + divider;
console.log(alldividers); // Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

var user_n;

do {
  user_n = prompt('Введи п\'ятирозрядне число');
} while (user_n.length != 5 || false);

var five_symbols_number = +user_n;
var fifth_n = five_symbols_number % 10;
var fourth_n = ~~(five_symbols_number / 10) % 10;
var third_n = ~~(five_symbols_number / 100) % 10;
var second_n = ~~(five_symbols_number / 1000) % 10;
var first_n = ~~(five_symbols_number / 10000);
var revers_n = '' + fifth_n + fourth_n + third_n + second_n + first_n;
console.log(revers_n);

if (five_symbols_number === +revers_n) {
  alert('Число ' + five_symbols_number + ' паліндром');
} else {
  alert('Число ' + five_symbols_number + ' не паліндром');
} // 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
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

alert(discounted_amount); // 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.

var dod = 0;
var vid = 0;
var zer = 0;
var par = 0;
var nopar = 0;
var input;

for (var _i = 1; _i < 11; _i++) {
  input = +prompt('введіть число №' + _i);

  if (input > 0) {
    dod++;
  }

  if (input === 0) {
    zer++;
  }

  if (input < 0) {
    vid++;
  }

  if (input % 2) {
    nopar++;
  } else {
    par++;
  }
}

console.log('Статистика:\nВведено додатніх чисел: ' + dod + '\nВведено від\'ємних чисел: ' + vid + '\nВведено нулів: ' + zer + '\nВведено парних чисел: ' + par + '\nВведено непарних чисел: ' + nopar);
45; // 4. Зацикли відображення днів тижня таким чином:
// «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.

var count = 0;
var dict = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];

while (confirm(dict[count] + '. Хочеш побачити наступний день?')) {
  count++;

  if (count > 6) {
    count = 0;
  }
} // Максимум
// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100
// і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
// записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?».
// Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50,
// то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач
// не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").


var moreSymbol = '>';
var lessSymbol = '<';
var equalsSymbol = '==';

for (var _i2 = 0; _i2 < 101; _i2++) {
  var max = 101;
  var min = 0;
  var middle = void 0;
  var resalt = 0;
  var answer = void 0;

  while (answer !== equalsSymbol) {
    middle = Math.floor((min + max) / 2);
    var question = 'Ваше число ' + moreSymbol + ' ' + middle + ', ';
    question = question + lessSymbol + ' ' + middle + ' або ';
    question = question + equalsSymbol + ' ' + middle;
    answer = _i2 === middle ? '==' : _i2 > middle ? '>' : '<'; //prompt(question, '');

    switch (answer) {
      case moreSymbol:
        min = middle;
        break;

      case lessSymbol:
        max = middle;
        break;

      case equalsSymbol:
        resalt = middle;
    }
  }

  var message = 'Ви загадили ' + resalt;
  console.log(message, _i2);
} // 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
// let multTable = '';
// var k = 0;
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 11; j++) {
//         k = i * j;
//         multTable = multTable + i + ' * ' + j + ' = ' + k + '\n';
//     }
//     multTable = multTable + '\n';
// }
// console.log(multTable);


var table = 'Таблиця множення\n';

for (var _i3 = 1; _i3 < 10; _i3++) {
  for (var y = 1; y <= 10; y++) {
    var _resalt = _i3 * y;

    table = table + _i3 + ' * ';
    table = table + (y < 10 ? '0' + y : y);
    table = table + ' = ';
    table = table + (_resalt < 10 ? '0' + _resalt : _resalt);
    table = table + '\n';
  }

  table = table + '\n';
}

console.log(table); // 3. Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість
// переходу на наступний місяць, рік, а також високосний рік.
// 4. 
// #
// ##
// ###
// ####
// #####

var height = 5;
var piramid = '';
var piramid1 = '';
var piramid2 = '';

for (var _i4 = 0; _i4 <= height; _i4++) {
  for (var _y = 0; _y < _i4 + 1; _y++) {
    piramid = piramid + '#';
  }

  piramid = piramid + '\n';
}

for (var _i5 = 0; _i5 <= height; _i5++) {
  for (var h = height - _i5; h > 0; h--) {
    piramid1 = piramid1 + ' ';
  }

  for (var _y2 = 0; _y2 < _i5 + 1; _y2++) {
    piramid1 = piramid1 + '#';
  }

  piramid1 = piramid1 + '\n';
}

for (var _i6 = 0; _i6 <= height; _i6++) {
  for (var _h = height - _i6; _h > 0; _h--) {
    piramid2 = piramid2 + ' ';
  }

  for (var _y3 = 0; _y3 < _i6 + 1; _y3++) {
    piramid2 = piramid2 + '#';
  }

  piramid2 = piramid2 + '  ';

  for (var q = 0; q < _i6 + 1; q++) {
    piramid2 = piramid2 + '#';
  }

  piramid2 = piramid2 + '\n';
}

console.log(piramid);
console.log(piramid1);
console.log(piramid2); // =============================================================================
// ФУНКЦІЇ
// Мінімум
// Напиши всі можливі варіанти створення функцій.
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
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function quantityArguments() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += 1;
  }

  return result;
}

console.log(quantityArguments('a', 'b', 'c', 'd', 'f')); // Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

var num1 = +prompt('Перше число');
var num2 = +prompt('Друге число');

var compareNumber = function compareNumber(num1, num2) {
  if (num1 < num2) {
    return '-1';
  } else if (num1 > num2) {
    return '1';
  } else {
    return '0';
  }
};

alert(compareNumber(num1, num2)); // Напиши функцію, яка обчислює факторіал переданого їй числа.

var n = +prompt('Введи ціле додатне число', '0');

var factorial = function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var fl = 1;

    for (var _i7 = 1; _i7 <= n; _i7++) {
      fl = fl * _i7;
    }

    return fl;
  }
};

alert(n + '!' + ' = ' + factorial(n)); // Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.Наприклад:
// цифри 1, 4, 9 перетворяться в число 149.

function converter() {
  var a = prompt('Перша цифра');
  var b = prompt('Друга цифра');
  var c = prompt('Третя цифра'); // зробити перевірку на одноцифровість

  var num = a + b + c;
  return +num;
}

alert(converter()); // Напиши функцію, яка приймає довжину і ширину прямокутника
// і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

var area;

function quadrangleArea() {
  if (arguments.length === 1) {
    area = Math.pow(arguments[0] * 100, 2) / 10000;
  } else if (arguments.length === 2) {
    area = arguments[0] * 100 * (arguments[1] * 100) / 10000;
  }

  return area;
}

alert(quadrangleArea(4, 5)); // Норма
// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

var numf = +prompt('Введіть ціле додатне число');

var perfectNumber = function perfectNumber(numf) {
  var sum = 0;
  var is_perfect;

  for (var i = 1; i < numf; i++) {
    if (!(numf % i)) {
      sum += i;
    }
  }

  if (sum === numf && sum !== 0) {
    is_perfect = 'Число ' + numf + ' досконале';
  } else {
    is_perfect = 'Число ' + numf + ' не досконале';
  }

  return is_perfect;
};

alert(perfectNumber(numf)); // Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй
// написану раніше функцію, щоб дізнатися, чи є це число досконалим.

var f = +prompt('Введи мінімальне число діапазону');
var g = +prompt('Введи максимальне число діапазону');
var sum;