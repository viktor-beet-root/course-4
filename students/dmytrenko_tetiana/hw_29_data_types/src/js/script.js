// ТИПИ ДАНИХ ТА ОПЕРАТОРИ

// Мінімум

// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// const c = (0.1 * 10 + 0.2 * 10) / 10;
// console.log(c);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично
// правильної відповіді.
// const a = "1";
// const b = 2;
// const c = (+a + b);
// console.log(c);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб
// поміщається на флешку.
// const fileSize = 820;
// const flash_drive_size = prompt('Який обсяг флешки в Гб?');
// const flash_drive_size_Mb = (+flash_drive_size) * 1000;
// const number_of_files = flash_drive_size_Mb / 820;
// console.log(~~number_of_files);

// Норма

// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки
// шоколадок може купити користувач і скільки здачі у нього залишиться.
// const cash = +prompt('Скільки грошей у вас в гаманці?');
// const chocolate_price = +prompt('Скільки коштує одна шоколадка?');
// const number_of_chocolates = ~~((cash * 100) / (chocolate_price * 100));
// const summingCost = ((chocolate_price * 100) * number_of_chocolates) / 100;
// const rest = ((cash * 100) - (summingCost * 100)) / 100;
// const conclusion = 'Користувач може купити ' + number_of_chocolates + ' шоколадок і у нього залишиться ' + rest + ' грн.';
// console.log(conclusion);

// 2. Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
// Максимум
// const three_symbols_number = +prompt('Введи трицифрове число');
// const third_number = (three_symbols_number % 10);
// const second_number = (~~(three_symbols_number / 10)) % 10;
// const first_number = ~~(three_symbols_number / 100);
// const revers_number = '' + third_number + second_number + first_number;
// console.log(revers_number);


// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. 
// Вивести суму нарахованих відсотків.
// const deposit = +prompt('Введіть сумму вклада на 2 місяці');
// const rate = "5%";
// const rate_two_months = +(parseInt(rate) / 6).toFixed(2);
// console.log(rate_two_months);
// console.log(typeof (rate_two_months));

// const sum_rate_two_months = (((deposit / 100) * 100) * (rate_two_months * 100)) / 10000;
// const ad_sum_rate_two_months = 'За депозитом 5% річних через 2 місяці ви отримаєте ' + sum_rate_two_months.toFixed(2) + ' грн.';
// console.log(ad_sum_rate_two_months);

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
// const userAge = +prompt('Скільки вам років?');
// let youAre;
// if (userAge >= 0 && userAge <= 11) {
//     youAre = 'ти дитина';
//     alert(youAre);
// } else if (userAge >= 12 && userAge <= 17) {
//     youAre = 'ти підліток';
//     alert(youAre);
// } else if (userAge >= 18 && userAge <= 59) {
//     youAre = 'ти дорослий';
//     alert(youAre);
// } else if (userAge >= 60) {
//     youAre = 'ти пенсіонер';
//     alert(youAre);
// } else {
//     youAre = 'ввів неправильні данні';
//     alert(youAre);
// }


// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// const num = +prompt('введи число від 1 до 9');
// switch (num) {
//     case 1:
//         alert('!');
//         break;
//     case 2:
//         alert('@');
//         break;
//     case 3:
//         alert('#');
//         break;
//     case 4:
//         alert('$');
//         break;
//     case 5:
//         alert('%');
//         break;
//     case 6:
//         alert('^');
//         break;
//     case 7:
//         alert('&');
//         break;
//     case 8:
//         alert('*');
//         break;
//     case 9:
//         alert('(');
//         break;
// }

// let a = 0;
// let sum = 0;

// while (a < num) {

//     a++;
//     sum = sum + a;
// }

// alert('Сума всіх чисел в твоєму диапазоні ' + sum)


// 3. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// let first_number = +prompt("введіть перше число ", "9");
// let second_number = +prompt("введіть друге число ", "33");
// const answerString = "Найбільший спільний дільник чисел: ";
// do {
//     if (first_number > second_number) {
//         first_number = first_number - second_number;
//     } else {
//         second_number = second_number - first_number;
//     }
// }
// while (first_number !== second_number);

// console.log(answerString + first_number);


// 4. Запитай у користувача число і виведи всі дільники цього числа.
// const num = +prompt('Введи число');
// let divider = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         divider = divider + i + ' ';
//     } else {
//         continue;
//     }
// }
// const alldividers = 'Всі дільники твого числа ' + num + ': ' + divider;
// console.log(alldividers);


// Норма

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
// let user_number;
// do {
//     user_number = prompt('Введи п\'ятирозрядне число');
// } while (user_number.length != 5 || false);

// const five_symbols_number = +user_number;
// const fifth_number = five_symbols_number % 10;
// const fourth_number = (~~(five_symbols_number / 10)) % 10;
// const third_number = (~~(five_symbols_number / 100)) % 10;
// const second_number = (~~(five_symbols_number / 1000)) % 10;
// const first_number = ~~(five_symbols_number / 10000);
// const revers_number = '' + fifth_number + fourth_number + third_number + second_number + first_number;
// console.log(revers_number);

// if (five_symbols_number === +revers_number) {
//     alert('Число ' + five_symbols_number + ' паліндром');
// } else {
//     alert('Число ' + five_symbols_number + ' не паліндром');
// }



// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3 %;
// від 300 до 500 - 5 %;
// від 500 і вище - 7 %.
// const summing = +prompt('Скільки коштує твоя покупка?');
// let discounted_amount;
// let res;
// if (summing >= 200 && summing < 300) {
//     res = (summing * 100 - (summing / 100 * 3).toFixed(2) * 100) / 100;
//     discounted_amount = 'Твоя сума до сплати зі знижкою 3% - ' + res;
// } else if (summing >= 300 && summing < 500) {
//     res = (summing * 100 - (summing / 100 * 5).toFixed(2) * 100) / 100;
//     discounted_amount = 'Твоя сума до сплати зі знижкою 5% - ' + res;
// } else if (summing >= 500) {
//     res = (summing * 100 - (summing / 100 * 7).toFixed(2) * 100) / 100;
//     discounted_amount = 'Твоя сума до сплати зі знижкою 7% - ' + res;
// } else if (summing > 0 && summing < 200) {
//     discounted_amount = 'Твоя сума до сплати без знижки ' + summing;
// } else {
//     discounted_amount = 'Ти не повідомив сумму';
// }
// alert(discounted_amount);

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів.При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран.Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.
// let dod = 0;
// let vid = 0;
// let zer = 0;
// let par = 0;
// let nopar = 0;
// let input;
// for (let i = 1; i < 11; i++) {
//     input = +prompt('введіть число №' + i);
//     if (input > 0) {
//         dod++;
//     }
//     if (input === 0) {
//         zer++;
//     }
//     if (input < 0) {
//         vid++;
//     }
//     if (input % 2) {
//         nopar++;
//     } else {
//         par++;
//     }
// }
// console.log('Статистика:\nВведено додатніх чисел: ' + dod + '\nВведено від\'ємних чисел: ' + vid + '\nВведено нулів: ' + zer + '\nВведено парних чисел: ' + par + '\nВведено непарних чисел: ' + nopar); 45

// 4. Зацикли відображення днів тижня таким чином:
// «День тижня.Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.
// let count = 0;
// const dict = [
//     'Понеділок',
//     'Вівторок',
//     'Середа',
//     'Четвер',
//     'П\'ятниця',
//     'Субота',
//     'Неділя']

// while (confirm(dict[count] + '. Хочеш побачити наступний день?')) {
//     count++;
//     if (count > 6) {
//         count = 0;
//     }
// }




// Максимум

// 1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100
// і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
// записуй результат в N і питай у користувача «Ваше число > N, <N або == N ?».
// Залежно від того що вказав користувач, зменшуй діапазон.Початковий діапазон від 0 до 100,
// поділи навпіл і отримай 50. Якщо користувач вказав, що його число > 50,
// то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач
// не вибере == N(буде корисним почитати про алгоритм: "бінарний пошук").



// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.



// 3. Запитай дату(день, місяць, рік) і виведи наступну за нею дату.Враховуй можливість
// переходу на наступний місяць, рік, а також високосний рік.




// =============================================================================
// ФУНКЦІЇ

// Мінімум

// Напиши всі можливі варіанти створення функцій.
// function name(parametrs) {
//     code
// }
// name(arguments);

// let name = function(parametrs){code};

// name(arguments);

// let name = (parametrs) => code;
// let name = par =>  code;
// let name = () => code;
// let name = (parametrs) => {
//     code
//     code
//     return x;
// }
// name();

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
// function quantityArguments() {
//     let result = 0;

//     for (var i = 0; i < arguments.length; i++) {
//         result += 1;
//     }

//     return result;
// }
// console.log(quantityArguments('a', 'b', 'c', 'd', 'f'));


// Напиши функцію, яка приймає 2 числа і повертає:
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
// let num1 = +prompt('Перше число');
// let num2 = +prompt('Друге число');

// let compareNumber = (num1, num2) => {
//     if(num1 < num2) {
//         return '-1';
//     } else if(num1 > num2) {
//         return '1';
//     } else {
//         return '0';
//     }
// }
// alert(compareNumber(num1, num2));


// Напиши функцію, яка обчислює факторіал переданого їй числа.
// let n = +prompt('Введи ціле додатне число', '0');
// var factorial = function (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         let fl = 1;
//         for (let i = 1; i <= n; i++) {
//             fl = fl * i;
//         }
//         return fl;
//     }

// };

// alert(n + '!' + ' = ' + factorial(n));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.Наприклад:
// цифри 1, 4, 9 перетворяться в число 149.
// function converter() {
//     let a = prompt('Перша цифра');
//     let b = prompt('Друга цифра');
//     let c = prompt('Третя цифра');
//     // зробити перевірку на одноцифровість
//     let num = a + b + c;
//     return +num;
// }
// alert(converter());

// Напиши функцію, яка приймає довжину і ширину прямокутника
// і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
// let area;
// function quadrangleArea() {
//     if (arguments.length === 1) {
//         area = ((arguments[0] * 100) ** 2) / 10000;
//     } else if (arguments.length === 2) {
//         area = ((arguments[0] * 100) * (arguments[1] * 100)) / 10000;
//     }
//     return area;
// }
// alert(quadrangleArea(4, 5));


// Норма

// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.
// let num = +prompt('Введіть ціле додатне число');

// let perfectNumber = function (num) {
//     let sum = 0;
//     let is_perfect;
//     for (var i = 1; i < num; i++) {
//         if (!(num % i)) {
//             sum += i;
//         }
//     }
//     if (sum === num && sum !== 0) {
//         is_perfect = 'Число ' + num + ' досконале';
//     } else {
//         is_perfect = 'Число ' + num + ' не досконале';
//     }
//     return is_perfect;
// }

// alert(perfectNumber(num));


// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.Використовуй
// написану раніше функцію, щоб дізнатися, чи є це число досконалим.
// let a = +prompt('Введи мінімальне число діапазону');
// let b = +prompt('Введи максимальне число діапазону');
// let sum;
// function getPerfect(a, b) {
//     let result = [];
//     for (let i = a; i < b; i++) {
//         sum = 0;
//         for (var i = 1; i < num; i++) {
//             if (!(num % i)) {
//                 sum += i;
//             }
//         }
//         if (sum === num && sum !== 0) {
//             is_perfect = 'Число ' + num + ' досконале';
//         } else {
//             is_perfect = 'Число ' + num + ' не досконале';
//         }
//         return is_perfect;
//         for (let n = 1; n <= i / 2; n++) {
//             if (i % n === 0) sum += n;
//         }
//         if (i === sum) result.push(i);
//     }
//     return result;
// }

// console.log(getPerfect(1, 1000));
