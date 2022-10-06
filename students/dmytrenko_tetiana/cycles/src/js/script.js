// ЦИКЛИ

// Мінімум

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11),
// підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...),
// передбач можливість введення невірних даних
const userAge = +prompt('Скільки вам років?');
let ageCategory;

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
console.log(ageCategory);

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші(1!, 2 @, 3 # і т.д).

const num = +prompt('введи число від 0 до 9', '0');
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

let e = 0;
let sum_ = 0;

while (e < num) {

    e++;
    sum_ += e;
}

console.log('Сума всіх чисел в твоєму диапазоні ' + sum_)

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const start = +prompt('введи перше число', '0');
const end = +prompt('введи другечисло', '0');

if (start < end) {
    let i = start;
    let sum = start;
    while (i < end) {
        i++;
        sum += i;
    }
    console.log('Сума чисел в заданому діапазоні ' + sum);
} else if (end < start) {
    let i = end;
    let sum = end;
    while (i < start) {
        i++;
        sum += i;
    }
    console.log('Сума чисел в заданому діапазоні ' + sum);
} else if (end === start) {
    console.log('Діапазон чисел не заданий');
}

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let first_numb = +prompt("введіть перше число ", "9");
let second_numb = +prompt("введіть друге число ", "33");
const answerString = "Найбільший спільний дільник чисел: ";
do {
    if (first_numb > second_numb) {
        first_numb = first_numb - second_numb;
    } else {
        second_numb = second_numb - first_numb;
    }
}
while (first_numb !== second_numb);

console.log(answerString + first_numb);


// 5. Запитай у користувача число і виведи всі дільники цього числа.
const numb = +prompt('Введи число');
let divider = 0;
for (let i = 1; i <= numb; i++) {
    if (numb % i === 0) {
        divider = divider + i + ' ';
    } else {
        continue;
    }
}
const alldividers = 'Всі дільники твого числа ' + numb + ': ' + divider;
console.log(alldividers);


// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
let usNumber;
do {
    usNumber = prompt('Введи п\'ятирозрядне число');
} while (usNumber.length != 5 || false);
const fiveDigitNum = +usNumber;
// const five_symbols_number = +usNumber;
const fifth_n = (fiveDigitNum % 10) * 10000;
const fourth_n = ((~~(fiveDigitNum / 10)) % 10) * 1000;
const third_n = ((~~(fiveDigitNum / 100)) % 10) * 100;
const second_n = ((~~(fiveDigitNum / 1000)) % 10) * 10;
const first_n = ~~(fiveDigitNum / 10000);
const revers_n = fifth_n + fourth_n + third_n + second_n + first_n;
console.log(revers_n);
let message;
if (fiveDigitNum === revers_n) {
    message = 'Число ' + fiveDigitNum + ' паліндром';
} else {
    message = 'Число ' + fiveDigitNum + ' не паліндром';
}
console.log(message);



// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.
const summing = +prompt('Скільки коштує твоя покупка?');
let discounted_amount;
let res;
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
console.log(discounted_amount);

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
let dod = 0;
let vid = 0;
let zer = 0;
let even = 0;
let odd = 0;
let input;
for (let i = 1; i < 11; i++) {
    input = +prompt('введіть число №' + i);
    if (input > 0) {
        dod++;
    }
    if (input === 0) {
        zer++;
    }
    if (input < 0) {
        vid++; 3
    }
    if (input % 2) {
        odd++;
    } else {
        even++;
    }
}
console.log('Додатніх чисел: ' + dod + '\nвід\'ємних чисел: ' + vid + '\nнулів: ' + zer + '\nпарних чисел: ' + even + '\nнепарних чисел: ' + odd);

// 4. Зацикли відображення днів тижня таким чином:
// «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
let day = '';
let count = 0
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
