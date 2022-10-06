"use strict";

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
function quantityArguments() {
  return arguments.length;
}

console.log(quantityArguments('a', 'b', 'c', 'd')); // 3. Напиши функцію, яка приймає 2 числа і повертає:
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

console.log(compareNumber(num1, num2)); // 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

var n = +prompt('Введи ціле додатне число', '0');

var factorial = function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var fl = 1;

    for (var i = 1; i <= n; i++) {
      fl = fl * i;
    }

    return fl;
  }
};

var message = n + '!' + ' = ' + factorial(n);
console.log(message); // 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад:
// цифри 1, 4, 9 перетворяться в число 149.

var hundreds;
var dozens;
var units;
var numeric;

var numberValidate = function numberValidate(number) {
  if (number !== '') {
    return true;
  } else {
    return false;
  }
};

console.log(numberValidate(hundreds), numberValidate(dozens), numberValidate(units));

function converter(hundreds, dozens, units) {
  if (numberValidate(hundreds) === true && numberValidate(dozens) === true && numberValidate(units) === true) {
    return numeric = +hundreds * 100 + +dozens * 10 + +units;
  } else {
    return numeric = console.log('Неправильно введені цифри');
  }
}

console.log(converter(7, 4, 4)); // Напиши функцію, яка приймає довжину і ширину прямокутника
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

console.log(quadrangleArea(6)); // Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

var numf = +prompt('Введіть ціле додатне число');

var perfectNumber_ = function perfectNumber_(numf) {
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

console.log(perfectNumber_(numf)); //2.  Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй
// написану раніше функцію, щоб дізнатися, чи є це число досконалим.

var perfectNumber = function perfectNumber(num) {
  var sum = 0;
  var is_perfect;

  for (var i = 1; i < num; i++) {
    if (!(num % i)) {
      sum += i;
    }
  }

  if (num === sum && num !== 0) {
    is_perfect = true;
  } else {
    is_perfect = false;
  }

  return is_perfect;
};

var numb1 = +prompt('Введіть перше ціле додатне число');
var numb2 = +prompt('Введіть друге ціле додатне число');

function searchPerfectNumber(numb1, numb2) {
  var num;
  var result = 'Досконалі числа із діапазону ' + numb1 + ' та ' + numb2 + ': ';

  for (var i = numb1; i < numb2; i++) {
    num = i;

    if (perfectNumber(num) === true) {
      result = result + num + ' ';
    } else {
      continue;
    }
  }

  return result;
}

console.log(searchPerfectNumber(numb1, numb2));