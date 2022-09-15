// 1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const userAge = +prompt('Скільки вам років?', '0')
if (userAge >= 0 && userAge <= 11) {
    alert('Ви дитина!');
} else if (userAge >= 12 && userAge <= 17) {
    alert('Ви підліток!');
} else if (userAge >= 18 && userAge <= 59) {
    alert('Ви дорослий!');
} else if (userAge >= 60 && userAge <= 120) {
    alert('Ви пенціонер!');
} else {
    alert('Ошибочное значение')
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const userNumb = +prompt('Виберіть любе число від 0 до 9?', '')
switch (userNumb) {
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
        console.log(')');
        break;
    default:
        console.log('Помилка');
}


// // 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const numberRange = +prompt('Виведіть перше число діапазону чисел', ' ');
const secondnumberRange = +prompt('Виведіть друге число діапазону чисел', ' ');
let sumNumbers = 0;
for (let i = numberRange; i <= secondnumberRange; i++) {
    sumNumbers = i + sumNumbers;
}
console.log(sumNumbers);

// // 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const firstNumb = +prompt('Введіть любе число', ' ');
const secondNumb = +prompt('Введіть любе число', ' ');
const minNumber = firstNumb < secondNumb ? firstNumb : secondNumb;
let commonDivider;
for (let i = minNumber; i >= 1; i--) {
    if ((firstNumb && secondNumb) % i === 0) {
        commonDivider = i;
    }
}
alert('Найбільший спільний дільник: ' + commonDivider);

// 5. Запитай у користувача число і виведи всі дільники цього числа.
const anyNumb = +prompt('Введіть любе число?', ' ');
const allDividers = [];
for (let i = 1; i <= anyNumb; i++) {
    if (anyNumb % i === 0) {
        allDividers.push(i);
    }
}
alert('Усі дільники цього числа: ' + allDividers);
