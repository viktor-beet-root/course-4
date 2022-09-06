//Мінімум
//Завдання 2 
//Тобі потрібно зберігати ім’я та прізвище в змінній,
//придумай до 4-х імен змінних, що потрібні тобі для даної задачі.
//Також напиши до 5 неправильних імен 
//(неправильні імена повинні бути закоментовані);

// Правильні
//const userName;
// const userSurname;
// const FirstName;
// const last_name;

// Неправильні
// const Name - при змінному використанні деяких слів може викликати помилку,
//адже їх використовує браузер.

// const First+name; - використання математичних операторів забороняється.
// const last-Name;

// const SuRnAmE; - не раціональне використання Camel Case.
//Необхідно логічно використовувати верхній регістр.
//Найчастіше верхній регістр використовують для великої
//літери наступного слова у назві змінної.

// const first Name; - пробілів у змінній не повинно бути.

// const 1name; - змінна не повинна починатися з цифр.


//Завдання 3
// Вкажи всі можливі способи коментування коду;
//

/**
 * 
 */

/**/

//Завдання 4
//Які стилі написання імен змінних ти знаєш?

//camelCase 
//let = firstName;

// snake_case
// let first_name;

//Норма
//Завдання 1
//Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;
const userName = prompt('Enter your name');
const userNameResult = ('Hello, ' + userName);
console.log(userNameResult);
/*---------------------------------------*/
//Завдання 2
//Запитай рік народження користувача, порахуй його/її вік 
//і виведи результат. Поточний рік вкажи в коді як константу;
const userYearOfBirth = +prompt('Enter year of your birth');
const currentYear = 2022;
const userAge = 'Your age is ' + (currentYear - userYearOfBirth) + ' years.';
console.log(userAge);
/*---------------------------------------*/
//Завдання 3
//Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата
const userSquareLength = +prompt('Enter a length of your square');
const sidesCount = 4;
const squarePerimetr = 'Perimetr of your sqare is ' + (userSquareLength * sidesCount);
console.log(squarePerimetr);
