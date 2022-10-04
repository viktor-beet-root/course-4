// ТИПИ ДАНИХ ТА ОПЕРАТОРИ

// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
const c = (0.1 * 10 + 0.2 * 10) / 10;
console.log(c);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично
// правильної відповіді.
const a = "1";
const b = 2;
const d = (+a + b);
console.log(d);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб
// поміщається на флешку.
const fileSize = 820;
const flash_drive_size = prompt('Який обсяг флешки в Гб?');
const flash_drive_size_Mb = (+flash_drive_size) * 1000;
const number_of_files = flash_drive_size_Mb / 820;
console.log(~~number_of_files);

// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі у нього залишиться.
const cash = +prompt('Скільки грошей у вас в гаманці?');
const chocolate_price = +prompt('Скільки коштує одна шоколадка?');
const number_of_chocolates = ~~((cash * 100) / (chocolate_price * 100));
const summingCost = ((chocolate_price * 100) * number_of_chocolates) / 100;
const rest = ((cash * 100) - (summingCost * 100)) / 100;
const conclusion = 'Користувач може купити ' + number_of_chocolates + ' шоколадок і у нього залишиться ' + rest + ' грн.';
console.log(conclusion);

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// Максимум
const three_symbols_number = +prompt('Введи трицифрове число');
const third_number = (three_symbols_number % 10);
const second_number = (~~(three_symbols_number / 10)) % 10;
const first_number = ~~(three_symbols_number / 100);
const revers_number = '' + third_number + second_number + first_number;
console.log(revers_number);


// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.
const deposit = +prompt('Введіть сумму вклада на 2 місяці');
const rate = "5%";
const rate_two_months = +(parseInt(rate) / 6).toFixed(2);
console.log(rate_two_months);
console.log(typeof (rate_two_months));

const sum_rate_two_months = (((deposit / 100) * 100) * (rate_two_months * 100)) / 10000;
const ad_sum_rate_two_months = 'За депозитом 5% річних через 2 місяці ви отримаєте ' + sum_rate_two_months.toFixed(2) + ' грн.';
console.log(ad_sum_rate_two_months);

// 2. Що повернуть вирази:
//  2 && 0 && 3
0
//  2 || 0 || 3
2
// 2 && 0 || 3
3

// ==========================================================================================

// ЦИКЛИ

// Мінімум

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною(0 - 11),
// підлітком(12 - 17), дорослим(18_59) або пенсіонером(60 ...),
// передбач можливість введення невірних даних
const userAge = +prompt('Скільки вам років?');
let youAre;
if (userAge >= 0 && userAge <= 11) {
    youAre = 'ти дитина';
    console.log(youAre);
} else if (userAge >= 12 && userAge <= 17) {
    youAre = 'ти підліток';
    console.log(youAre);
} else if (userAge >= 18 && userAge <= 59) {
    youAre = 'ти дорослий';
    console.log(youAre);
} else if (userAge >= 60) {
    youAre = 'ти пенсіонер';
    console.log(youAre);
} else {
    youAre = 'ввів неправильні данні';
    console.log(youAre);
}


// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
const num = +prompt('введи число від 1 до 9');
switch (num) {
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
    sum_ = sum_ + e;
}

console.log('Сума всіх чисел в твоєму диапазоні ' + sum_)


// 3. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
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


// 4. Запитай у користувача число і виведи всі дільники цього числа.
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
let user_n;
do {
    user_n = prompt('Введи п\'ятирозрядне число');
} while (user_n.length != 5 || false);

const five_symbols_number = +user_n;
const fifth_n = five_symbols_number % 10;
const fourth_n = (~~(five_symbols_number / 10)) % 10;
const third_n = (~~(five_symbols_number / 100)) % 10;
const second_n = (~~(five_symbols_number / 1000)) % 10;
const first_n = ~~(five_symbols_number / 10000);
const revers_n = '' + fifth_n + fourth_n + third_n + second_n + first_n;
console.log(revers_n);

if (five_symbols_number === +revers_n) {
    console.log('Число ' + five_symbols_number + ' паліндром');
} else {
    console.log('Число ' + five_symbols_number + ' не паліндром');
}



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
let par = 0;
let nopar = 0;
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
        vid++;
    }
    if (input % 2) {
        nopar++;
    } else {
        par++;
    }
}
console.log('Додатніх чисел: ' + dod + '\nвід\'ємних чисел: ' + vid + '\nнулів: ' + zer + '\nпарних чисел: ' + par + '\nнепарних чисел: ' + nopar); 45

// 4. Зацикли відображення днів тижня таким чином:
// «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
do {
    for (let count = 0; count <= 6;) {
        switch (count) {
            case 0:
                confirm('Понеділок. Хочеш побачити який наступний день?');
                count++;
            case 1:
                confirm('Вівторок. Хочеш побачити який наступний день?');
                count++;
            case 2:
                confirm('Середа. Хочеш побачити який наступний день?');
                count++;
            case 3:
                confirm('Четвер. Хочеш побачити який наступний день?');
                count++;
            case 4:
                confirm('П\'ятниця. Хочеш побачити який наступний день?');
                count++;
            case 5:
                confirm('Субота. Хочеш побачити який наступний день?');
                count++;
            case 6:
                confirm('Неділя. Хочеш побачити який наступний день?');
                count++;
        }
        if (count > 6) {
            count = 0;
        }
    }
} while (confirm === true);




// Максимум

// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100
// і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
// записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?».
// Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50,
// то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач
// не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").
const moreSymbol = '>';
const lessSymbol = '<';
const equalsSymbol = '==';

for (let i = 0; i < 101; i++) {
    let max = 101;
    let min = 0;
    let middle;
    let resalt = 0;
    let answer;

    while (answer !== equalsSymbol) {
        middle = Math.floor((min + max) / 2);

        let question = 'Ваше число ' + moreSymbol + ' ' + middle + ', ';
        question = question + lessSymbol + ' ' + middle + ' або ';
        question = question + equalsSymbol + ' ' + middle;
        answer = i === middle ? '==' : i > middle ? '>' : '<'; //prompt(question, '');

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

    const message = 'Ви загадили ' + resalt;

    console.log(message, i);
}


// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
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

let table = 'Таблиця множення\n';

for (let i = 1; i < 10; i++) {
    for (let y = 1; y <= 10; y++) {
        const resalt = i * y;
        table = table + i + ' * ';
        table = table + (y < 10 ? '0' + y : y);
        table = table + ' = ';
        table = table + ((resalt < 10) ? '0' + resalt : resalt);
        table = table + '\n';
    }

    table = table + '\n';
}
console.log(table);


// 3. Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість
// переходу на наступний місяць, рік, а також високосний рік.


// 4. 
// #
// ##
// ###
// ####
// #####

const height = 5;

let piramid = '';
let piramid1 = '';
let piramid2 = '';

for (let i = 0; i <= height; i++) {

    for (let y = 0; y < i + 1; y++) {
        piramid = piramid + '#';
    }

    piramid = piramid + '\n';
}

for (let i = 0; i <= height; i++) {
    for (let h = height - i; h > 0; h--) {
        piramid1 = piramid1 + ' ';
    }

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

    piramid2 = piramid2 + '  ';

    for (let q = 0; q < i + 1; q++) {
        piramid2 = piramid2 + '#';
    }

    piramid2 = piramid2 + '\n';
}


console.log(piramid);

console.log(piramid1);

console.log(piramid2);

// =============================================================================
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
    let result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += 1;
    }

    return result;
}
console.log(quantityArguments('a', 'b', 'c', 'd', 'f'));


// Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
let num1 = +prompt('Перше число');
let num2 = +prompt('Друге число');

let compareNumber = (num1, num2) => {
    if (num1 < num2) {
        return '-1';
    } else if (num1 > num2) {
        return '1';
    } else {
        return '0';
    }
}
console.log(compareNumber(num1, num2));


// Напиши функцію, яка обчислює факторіал переданого їй числа.
let n = +prompt('Введи ціле додатне число', '0');
var factorial = function (n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        let fl = 1;
        for (let i = 1; i <= n; i++) {
            fl = fl * i;
        }
        return fl;
    }

};

console.log(n + '!' + ' = ' + factorial(n));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.Наприклад:
// цифри 1, 4, 9 перетворяться в число 149.
let hundreds = prompt('Перша цифра');
let dozens = prompt('Друга цифра');
let units = prompt('Третя цифра');
let numeric;
let numberValidate = function (number) {
    if ((number.length === 1) && (number !== '') && (number !== null)) {
        return true;
    } else {
        return false;
    }
}
console.log(numberValidate(hundreds));
function converter(hundreds, dozens, units) {
    if (numberValidate(hundreds) === true && numberValidate(dozens) === true && numberValidate(units) === true) {
        numeric = +hundreds * 100 + +dozens * 10 + +units;
    } else {
        numeric = console.log('Неправильно введені цифри');
    }
    return numeric;
}
console.log(converter(hundreds, dozens, units));
// Напиши функцію, яка приймає довжину і ширину прямокутника
// і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
let area;
function quadrangleArea() {
    if (arguments.length === 1) {
        area = ((arguments[0] * 100) ** 2) / 10000;
    } else if (arguments.length === 2) {
        area = ((arguments[0] * 100) * (arguments[1] * 100)) / 10000;
    }
    return area;
}
console.log(quadrangleArea(4, 5));


// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
let numf = +prompt('Введіть ціле додатне число');

let perfectNumber_ = function (numf) {
    let sum = 0;
    let is_perfect;
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
}

console.log(perfectNumber_(numf));


// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй
// написану раніше функцію, щоб дізнатися, чи є це число досконалим.
let perfectNumber = function (num) {
    let sum = 0;
    let is_perfect;
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
}

let numb1 = +prompt('Введіть перше ціле додатне число');
let numb2 = +prompt('Введіть друге ціле додатне число');
function searchPerfectNumber(numb1, numb2) {
    let num;
    let result = 'Досконалі числа із діапазону ' + numb1 + ' та ' + numb2 + ': ';
    for (let i = numb1; i < numb2; i++) {
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

// =============================================================================
// ОБ'ЄКТИ

// Мінімум

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску,
//     середня швидкість, обсяг паливного баку, середня витрата палива
//     на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1. Метод, який виводить на екран інформацію про автомобіль.
// 2. Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива
//      для подолання переданої відстані з середньою швидкістю.
//      Враховуй, що через кожні 4 години дороги водієві необхідно робити 
//      перерву на 1 годину.
const avto = {
    manufacturer: 'Peugeot',
    model: '1007',
    year_of_issue: '2005',
    average_speed: '130',
    fuel_volume: '1360',
    consumption_per_100_km: '6.6',
    drivers: 'Ivan',
    dispInformation() {
        return ("Виробник: " + this.manufacturer + "\n" +
            "Виробник: " +
            this.model + "\n" +
            "Рік випуска: " +
            this.year_of_issue + "\n" +
            "Середня швидкість: " +
            this.average_speed + "\n" +
            "Об'єм' топливного бака: " +
            this.fuel_volume + "\n" +
            "Витрати топлива на 100 км: " +
            this.consumption_per_100_km + "\n" +
            "Ім'я водія: " +
            this.drivers
        );
    },
    setName(name) {
        this.drivers = this.drivers + ', ' + name;
    },
    fuelOnDistance(distance) {
        let fuel = (((+this.consumption_per_100_km).toFixed(2)) * 100) * (this.rounded(distance) * 100) / 1000000;
        return 'На ' + distance + 'км витрачається ' + fuel.toFixed(2) + 'л палива';
    },
    rounded(number) {
        return +number.toFixed(2);
    },
    timeOnDistance(distance, breakdistance) {
        let timeclear = (this.rounded(distance) * 100) / this.average_speed * 100 / 10000;
        let timeOnDistance = +timeclear / breakdistance + +timeclear;
        return 'Для проходження ' + distance + 'км,' + "\n" +
            'з урахуванням часових зупинок ' + "\n" +
            'через кожні ' + breakdistance + 'км, потрібно ' + "\n" +
            timeOnDistance.toFixed(1) + ' годин часу';
    },
};
avto.setName('Ilya');
avto.setName('Oleg');
console.log(avto.dispInformation());
console.log(avto.fuelOnDistance(1));
console.log(avto.timeOnDistance(5000, 4));





// // // Норма

// Створити об'єкт, що описує час (години, хвилини, секунди),
//  і такі функції для роботи з цим об'єктом:

// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.

//     Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу,
//         може змінитися і інша.Наприклад: якщо до часу «20: 59: 45» додати 30 секунд,
//             то повинно вийти «21: 00: 15», а не «20: 59: 75». Також потрібно передбачити
// можливість того що користувач може передати 150 секунд, або 75 хвилин.
