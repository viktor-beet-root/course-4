"use strict";

// Пошук першого співпадіння букви/символу
var stringForSearch = "adsipfhjnmwr wv scv[woheohфq[qmzx,vm";
var numOfLetter = prompt('bykva', '');
var letterPosition = -1;

for (var _i = 0; _i <= stringForSearch.length; _i++) {
  if (stringForSearch[_i] === numOfLetter) {
    letterPosition = _i;
  }

  ;
  if (stringForSearch[_i] === numOfLetter) break;
}

var resultLetter = 'Позиція символу "' + numOfLetter + '" в тексті "' + stringForSearch + '" - ' + letterPosition;
console.log(resultLetter); // Мінімум
// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

var userAge = prompt('Вкажіть вік', '');
console.log(userAge);
var userAgeNum = Number(userAge);
console.log(userAgeNum);

if (Boolean(userAge.trim()) === false && userAge !== '0') {
  console.log('Дані невірні');
} else if (0 <= userAgeNum && userAgeNum <= 11) {
  console.log('Ви є дитиною (0-11)');
} else if (12 <= userAgeNum && userAgeNum <= 17) {
  console.log('Ви є підлітком (12-17)');
} else if (18 <= userAgeNum && userAgeNum <= 59) {
  console.log('Ви є дорослим (18_59)');
} else if (60 <= userAgeNum && userAgeNum <= 120) {
  console.log('Ви є пенсіонером (60 ...)');
} else {
  console.log('Дані невірні');
} // 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).


var userNumber = +prompt('Вкажіть число від 0 до 9', '');

switch (userNumber) {
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
    console.log('№');
    break;

  case 4:
    console.log(';');
    break;

  case 5:
    console.log('%');
    break;

  case 6:
    console.log(':');
    break;

  case 7:
    console.log('?');
    break;

  case 8:
    console.log('*');
    break;

  case 9:
    console.log('(');
    break;

  default:
    console.log('Не вірно введений символ');
} // 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.


var userNumberOne = +prompt('Вкажіть перше число діапазону', '');
var userNumberTwo = +prompt('Вкажіть друге число діапазону', '');
var symu = 0;

if (userNumberOne <= userNumberTwo) {
  for (var _i2 = userNumberOne; _i2 <= userNumberTwo; _i2++) {
    symu = symu + _i2;
    console.log(symu);
  }
} else {
  for (var _i3 = userNumberTwo; _i3 <= userNumberOne; _i3++) {
    symu = symu + _i3;
    console.log(symu);
  }
}

console.log(symu); // 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

var userFNum = +prompt('Введіть перше число');
var userSNum = +prompt('Введіть друге число');
var FNum = Math.abs(userFNum);
var SNum = Math.abs(userSNum);
var gcd;

while (FNum !== 0 && SNum !== 0) {
  if (FNum > SNum) {
    FNum = FNum % SNum;
  } else {
    SNum = SNum % FNum;
  }
}

gcd = FNum + SNum;
console.log(gcd); // 5. Запитай у користувача число і виведи всі дільники цього числа.

var userNum = +prompt('Вкажіть число', '');
var usNum = Math.abs(userNum);

for (var _i4 = 1; _i4 <= usNum; _i4++) {
  if (usNum % _i4 === 0) {
    console.log(_i4);
  }
} // Норма
// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


var userNumFive = +prompt('Вкажіть п’ятирозрядне число', '');
var number1;
var number2;
var number4;
var number5;

if (userNumFive >= 10000 && userNumFive <= 99999) {
  var _number = ~~(userNumFive / 10000);

  var _number2 = ~~(userNumFive / 1000) % 10;

  var _number3 = ~~(userNumFive / 10) % 10;

  var _number4 = ~~userNumFive % 10;

  if (_number === _number4 && _number2 === _number3) {
    console.log('число паліндром');
  } else {
    console.log('число не паліндром');
  }
} else {
  console.log('число не відповідає умовам програми');
} // 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


var userMoneyTo = +prompt('Вкажіть суму покупки', '');
var moneyWithDiscount;

if (userMoneyTo >= 200 && userMoneyTo < 300) {
  moneyWithDiscount = Math.floor(userMoneyTo * 0.97);
  var resultMoney = 'Cумма зі знижкою ' + moneyWithDiscount;
  console.log(resultMoney);
} else if (userMoneyTo >= 300 && userMoneyTo < 500) {
  moneyWithDiscount = Math.floor(userMoneyTo * 0.95);

  var _resultMoney = 'Cумма зі знижкою ' + moneyWithDiscount;

  console.log(_resultMoney);
} else if (userMoneyTo >= 500) {
  moneyWithDiscount = Math.floor(userMoneyTo * 0.93);

  var _resultMoney2 = 'Cумма зі знижкою ' + moneyWithDiscount;

  console.log(_resultMoney2);
} else {
  console.log('Знижки не буде');
} // 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


var maxNumbers = 10;
var tenNumbers = '';
var plusNum = 0;
var minusNum = 0;
var countZero = 0;
var countPair = 0;
var countUnpair = 0;

for (var _i5 = 0; _i5 < maxNumbers; _i5++) {
  tenNumbers = prompt('Введіть ' + (_i5 + 1) + ' число');
  console.log(tenNumbers);
  if (tenNumbers === '0') countZero++;
  if (tenNumbers % 2 === 0 && tenNumbers !== 0) countPair++;
  if (tenNumbers % 2 !== 0 && tenNumbers !== 0) countUnpair++;
  if (tenNumbers > 0 && tenNumbers !== 0) plusNum++;
  if (tenNumbers < 0 && tenNumbers !== 0) minusNum++;
}

var result = 'Додатніх: ' + plusNum + '\nВід`ємних: ' + minusNum + '\nНулів: ' + countZero + '\nПарних: ' + countPair + '\nНепарних: ' + countUnpair;
console.log(result); // 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// const weekday = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
// const d = new Date();
// let dayOf = weekday[d.getDay()];
// console.log(d)
// const dayWeek = '«День тижня ' + dayOf + '. Хочеш побачити наступний день? »';
// let questionDay = '';
// do {
//     questionDay = confirm(dayWeek)
// } while (dayWeek);
// Максимум
// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу
//діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
//Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50.
//Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

var guessNum = +confirm('Загадай число від 1 до 100');
var start = 0;
var end = 100;
var middle = Math.floor((start + end) / 2);
var moreOrNot;
var i = middle;

if (guessNum = 1) {
  do {
    console.log(middle, i, moreOrNot);
    moreOrNot = prompt('Вкажи, воно >, < чи = ' + middle);

    if (moreOrNot === '=') {
      console.log("Ваше число " + middle);
    } else if (moreOrNot === '<') {
      end = i;
      middle = Math.floor((start + end) / 2);
      i = middle;
      continue;
    } else if (moreOrNot === '>') {
      start = i;
      middle = Math.floor((start + end) / 2);
      i = middle;
      continue;
    } else {
      moreOrNot = prompt('Вкажи, воно >, < чи = ' + middle);
    }
  } while (moreOrNot !== '=');
} // 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


for (var _i6 = 2; _i6 <= 9; _i6++) {
  for (var b = 1; b <= 10; b++) {
    console.log(_i6 + ' x ' + b + ' = ' + _i6 * b);
  }

  console.log('-------------------');
} // 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


var dayUser = +prompt('Вкажіть день');
var monthUser = +prompt('Вкажіть місяць');
var yearUser = +prompt('Вкажіть рік');
console.log(dayUser, monthUser, yearUser);
var day = dayUser;
var month = monthUser;
var year = yearUser;
var monthLenght;

switch (monthUser) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    monthLenght = 31;
    break;

  case 2:
    if (yearUser % 4 === 0) {
      monthLenght = 29;
    } else {
      monthLenght = 28;
    }

    break;

  case 4:
  case 6:
  case 9:
  case 11:
    monthLenght = 30;
    break;

  default:
    console.log('Ne to');
}

if (dayUser + 1 > monthLenght) {
  if (monthUser === 12) {
    month = 1;
    year = year + 1;
  } else {
    day = 1;
    month = month + 1;
  }
} else {
  day = day + 1;
}

var dayResult = 'Next Data ' + day + '.' + month + '.' + year;
console.log(dayResult);
або;
var dmy = new Date(yearUser, monthUser - 1, dayUser + 1);
var dmyResult = 'Next Data ' + dmy.getDate() + '.' + dmy.getMonth() + '.' + dmy.getFullYear();
console.log(dmyResult); // 1.
// #
// ##
// ###
// ####
// #####

var squareNum = +prompt('Вкажіть клькість поверхів піраміди');
var grid = '';

for (var _i7 = 1; _i7 <= squareNum; _i7++) {
  for (var j = 1; j <= _i7; j++) {
    grid = grid + '#';
  }

  grid = grid + '\n';
}

console.log(grid); // 2.
//     #
//    ##
//   ###
//  ####
// #####

for (var _i8 = 1; _i8 <= squareNum; _i8++) {
  for (var _j = squareNum - 1; _j >= _i8; _j--) {
    grid = grid + ' ';
  }

  for (var k = 1; k <= _i8; k++) {
    grid = grid + '#';
  }

  grid = grid + '\n';
}

console.log(grid); // 3.
//     #  #
//    ##  ##
//   ###  ###
//  ####  ####
// #####  #####

for (var _i9 = 1; _i9 <= squareNum; _i9++) {
  for (var _j2 = squareNum - 1; _j2 >= _i9; _j2--) {
    grid = grid + ' ';
  }

  for (var _k = 1; _k <= _i9; _k++) {
    grid = grid + '#';
  }

  grid = grid + ' ';

  for (var _k2 = 1; _k2 <= _i9; _k2++) {
    grid = grid + '#';
  }

  for (var _j3 = squareNum - 1; _j3 >= _i9; _j3--) {
    grid = grid + ' ';
  }

  grid = grid + '\n';
}

console.log(grid);