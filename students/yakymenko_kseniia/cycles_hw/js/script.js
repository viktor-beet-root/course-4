//Мінімум

//1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11),
//підлітком (12-17), дорослим (18-59) або пенсіонером (60 ...),
//передбач можливість введення невірних даних.
const userAge = +prompt('Напишіть ваш вік');
let ageResult = '';

if (userAge >= 0 && userAge < 12) {
    ageResult = 'Дитина';
} else if (userAge >= 12 && userAge < 18) {
    ageResult = 'Підліток';
} else if (userAge >= 18 && userAge < 60) {
    ageResult = 'Дорослий';
} else if (userAge >= 61) {
    ageResult = 'Пенсіонер';
} else if (userAge < 0) {
    ageResult = 'Неправильні дані';
} else {
    ageResult = 'Введіть цифри';
}
console.log(ageResult);

//2.Запитай у користувача число від 0 до 9 і 
//виведи йому спецсимвол, який розташований 
//на цій клавіші (1 !, 2 @, 3 # і т. д).

const userNumber = +prompt('Введіть число від 0 до 9');
switch (userNumber) {
    case 0:
        console.log('$');
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
        console.log('(');
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
        console.log(')');
        break;
    case 9:
        console.log('*');
        break;
    default:
        console.error('Неправильно введені дані');
}

//3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const userInputStart = +prompt('Введіть початок діапазону');
const userInputEnd = +prompt('Введіть кінець діапазону');
let summa = 0;
for (let i = userInputStart; i <= userInputEnd; i++) {
    summa = summa + i;
}
console.log(summa);

//4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const userFirtsNumber = +prompt('Введіть число');
const userSecondNumber = +prompt('Введіть інше число');
let firstCase = userFirtsNumber;
let secondCase = userSecondNumber;
let endResult = null;
while (firstCase !== 0 && secondCase !== 0) {
    if (firstCase > secondCase) {
        firstCase = firstCase % secondCase;
    } else {
        secondCase = secondCase % firstCase;
    }
}
result = firstCase + secondCase;
console.log(endResult);

//5.Запитай у користувача число і виведи всі дільники цього числа.

const userNum = +prompt('Введіть число');
for (let i = 0; i <= userNum; i++) {
    if (userNum % i == 0) {
        console.log(i);
    }
}

//Додаткове завдання
//піраміди

const height = 5;

let piramid1 = '';
let piramid2 = '';
let piramid3 = '';

for (let i = 0; i <= height; i++) {

    for (let y = 0; y < i + 1; y++) {
        piramid1 = piramid1 + '#';
    }

    piramid1 = piramid1 + '\n';
}

for (let i = 0; i <= height; i++) {
    for (let h = height - i; h > 0; h--) {
        piramid2 = piramid2 + ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        piramid2 = piramid2 + '#';
    }

    piramid2 = piramid2 + '\n';
}

for (let i = 0; i <= height; i++) {
    for (let h = height - i; h > 0; h--) {
        piramid3 = piramid3 + ' ';
    }

    for (let y = 0; y < i + 1; y++) {
        piramid3 = piramid3 + '#';
    }

    piramid3 = piramid3 + '  ';

    for (let q = 0; q < i + 1; q++) {
        piramid3 = piramid3 + '#';
    }

    piramid3 = piramid3 + '\n';
}

console.log(piramid1);

console.log(piramid2);

console.log(piramid3);
