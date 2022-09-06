/* Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу; */

const currentYear = 2022;
const userBirthYear = prompt("What year do you born?", 2000);
const userCurrentAge = currentYear - userBirthYear;

alert("You are " + userCurrentAge + " years old");
