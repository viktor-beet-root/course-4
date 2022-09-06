/* Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі. */

const hryvnasPerUSD = 39.74;
const userUSDInput = prompt("How much us dollars do you want?", 1000);
const hryvnasForOperation = (userUSDInput * hryvnasPerUSD).toFixed(2);

alert(
    "For " +
        userUSDInput +
        " US dollars you need to pay " +
        hryvnasForOperation +
        " hryvnas"
);
