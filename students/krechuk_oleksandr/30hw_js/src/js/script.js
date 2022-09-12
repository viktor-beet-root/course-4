// Пошук першого співпадіння букви/символу

const stringForSearch = "adsipfhjnmwr wv scv[woheohфq[qmzx,vm"
const numOfLetter = prompt('bykva', '');
let letterPosition = -1;
for (let i = 0; i <= stringForSearch.length; i++) {
    if (stringForSearch[i] === numOfLetter) { letterPosition = i };
    if (stringForSearch[i] === numOfLetter) break;
}
const resultLetter = 'Позиція символу "' + numOfLetter + '" в тексті "' + stringForSearch + '" - ' + letterPosition;
console.log(resultLetter);


// Мінімум

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = prompt('Вкажіть вік', '');
console.log(userAge);
const userAgeNum = Number(userAge);
console.log(userAgeNum);
if (Boolean(userAge.trim()) === false && userAge !== '0') {
    console.log('Дані невірні')
} else if (0 <= userAgeNum && userAgeNum <= 11) {
    console.log('Ви є дитиною (0-11)');
} else if (12 <= userAgeNum && userAgeNum <= 17) {
    console.log('Ви є підлітком (12-17)');
} else if (18 <= userAgeNum && userAgeNum <= 59) {
    console.log('Ви є дорослим (18_59)');
} else if (60 <= userAgeNum && userAgeNum <= 120) {
    console.log('Ви є пенсіонером (60 ...)');
} else {
    console.log('Дані невірні')
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const userNumber = +prompt('Вкажіть число від 0 до 9', '');

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
}

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const userNumberOne = +prompt('Вкажіть перше число діапазону', '');
const userNumberTwo = +prompt('Вкажіть друге число діапазону', '');
let symu = 0;

if (userNumberOne <= userNumberTwo) {
    for (let i = userNumberOne; i <= userNumberTwo; i++) {
        symu = symu + i;
        console.log(symu);
    }
} else {
    for (let i = userNumberTwo; i <= userNumberOne; i++) {
        symu = symu + i;
        console.log(symu);
    }
}
console.log(symu);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.


const userFNum = +prompt('Введіть перше число');
const userSNum = +prompt('Введіть друге число');
let FNum = Math.abs(userFNum);
let SNum = Math.abs(userSNum);
let gcd;
while (FNum !== 0 && SNum !== 0) {
    if (FNum > SNum) {
        FNum = FNum % SNum;
    } else {
        SNum = SNum % FNum;
    }
}
gcd = FNum + SNum;
console.log(gcd);


// 5. Запитай у користувача число і виведи всі дільники цього числа.

const userNum = +prompt('Вкажіть число', '');

let usNum = Math.abs(userNum);
for (let i = 1; i <= usNum; i++) {
    if (usNum % i === 0) {
        console.log(i)
    }
}

// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const userNumFive = +prompt('Вкажіть п’ятирозрядне число', '');
let number1;
let number2;
let number4;
let number5;
if (userNumFive >= 10000 && userNumFive <= 99999) {
    let number1 = ~~(userNumFive / 10000);
    let number2 = ~~(userNumFive / 1000) % 10;
    let number4 = ~~(userNumFive / 10) % 10;
    let number5 = ~~(userNumFive) % 10;
    if (number1 === number5 && number2 === number4) {
        console.log('число паліндром')
    } else {
        console.log('число не паліндром')
    }
} else {
    console.log('число не відповідає умовам програми')
}

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const userMoneyTo = +prompt('Вкажіть суму покупки', '');
let moneyWithDiscount;

if (userMoneyTo >= 200 && userMoneyTo < 300) {
    moneyWithDiscount = Math.floor(userMoneyTo * 0.97);
    const resultMoney = 'Cумма зі знижкою ' + moneyWithDiscount;
    console.log(resultMoney);
} else if (userMoneyTo >= 300 && userMoneyTo < 500) {
    moneyWithDiscount = Math.floor(userMoneyTo * 0.95);
    const resultMoney = 'Cумма зі знижкою ' + moneyWithDiscount;
    console.log(resultMoney);
} else if (userMoneyTo >= 500) {
    moneyWithDiscount = Math.floor(userMoneyTo * 0.93);
    const resultMoney = 'Cумма зі знижкою ' + moneyWithDiscount;
    console.log(resultMoney);
} else {
    console.log('Знижки не буде')
}

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

const maxNumbers = 10;
let tenNumbers = '';
let plusNum = 0;
let minusNum = 0;
let countZero = 0;
let countPair = 0;
let countUnpair = 0;
for (let i = 0; i < maxNumbers; i++) {
    tenNumbers = prompt('Введіть ' + (i + 1) + ' число');
    console.log(tenNumbers);
    if (tenNumbers === '0') countZero++;
    if (tenNumbers % 2 === 0 && tenNumbers !== 0) countPair++;
    if (tenNumbers % 2 !== 0 && tenNumbers !== 0) countUnpair++;
    if (tenNumbers > 0 && tenNumbers !== 0) plusNum++;
    if (tenNumbers < 0 && tenNumbers !== 0) minusNum++;
}
const result = 'Додатніх: ' + plusNum + '\nВід`ємних: ' + minusNum +
    '\nНулів: ' + countZero + '\nПарних: ' + countPair + '\nНепарних: ' + countUnpair
console.log(result);

// 4. Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

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


let guessNum = +confirm('Загадай число від 1 до 100');
let start = 0;
let end = 100;
let middle = Math.floor((start + end) / 2);
let moreOrNot;
let i = middle;
if (guessNum = 1) {
    do {
        console.log(middle, i, moreOrNot);
        moreOrNot = prompt('Вкажи, воно >, < чи = ' + middle);
        if (moreOrNot === '=') {
            console.log("Ваше число " + middle)
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
    } while (moreOrNot !== '=')
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

for (let i = 2; i <= 9; i++) {
    for (let b = 1; b <= 10; b++) {
        console.log(i + ' x ' + b + ' = ' + (i * b));
    }
    console.log('-------------------');
}


// 3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

const dayUser = +prompt('Вкажіть день');
const monthUser = +prompt('Вкажіть місяць');
const yearUser = +prompt('Вкажіть рік');
console.log(dayUser, monthUser, yearUser);
let day = dayUser;
let month = monthUser;
let year = yearUser;
let monthLenght;

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
const dayResult = 'Next Data ' + day + '.' + month + '.' + year;
console.log(dayResult);

або

const dmy = new Date(yearUser, monthUser - 1, dayUser + 1);
const dmyResult = 'Next Data ' + dmy.getDate() + '.' + dmy.getMonth() + '.' + dmy.getFullYear();
console.log(dmyResult);


// 1.
// #
// ##
// ###
// ####
// #####

const squareNum = +prompt('Вкажіть клькість поверхів піраміди');
let grid = '';
for (let i = 1; i <= squareNum; i++) {
    for (let j = 1; j <= i; j++) {
        grid = grid + '#';

    }
    grid = grid + '\n';
}
console.log(grid);

// 2.

//     #
//    ##
//   ###
//  ####
// #####

for (let i = 1; i <= squareNum; i++) {
    for (let j = squareNum - 1; j >= i; j--) {
        grid = grid + ' ';
    }
    for (let k = 1; k <= i; k++) {
        grid = grid + '#';
    }
    grid = grid + '\n';
}
console.log(grid);




// 3.

//     #  #
//    ##  ##
//   ###  ###
//  ####  ####
// #####  #####

for (let i = 1; i <= squareNum; i++) {
    for (let j = squareNum - 1; j >= i; j--) {
        grid = grid + ' ';
    }
    for (let k = 1; k <= i; k++) {
        grid = grid + '#';
    }
    grid = grid + ' '
    for (let k = 1; k <= i; k++) {
        grid = grid + '#';
    }
    for (let j = squareNum - 1; j >= i; j--) {
        grid = grid + ' ';
    }


    grid = grid + '\n';
}
console.log(grid);
