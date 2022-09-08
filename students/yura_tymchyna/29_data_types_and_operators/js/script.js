"use strict";

/**
 *	Завдання 1(Мінімум)
 *	Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
 */

console.log("(0.1 * 10 + 0.2 * 10) / 10 =", (0.1 * 10 + 0.2 * 10) / 10);

//++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Завдання 2(Мінімум)
 * Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в 				змінних), добийся математично правильної відповіді. *
 */

const string = "1";
const number = 2;

const result = Number(string) + number;
console.log("1 + 2 =", result);

//++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Завдання 3(Мінімум)
 * Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
 */

const userCardSizeInput = Number(prompt("Введіть обсяг флешки в Гб", 0));
const megabytesInGigabytes = 1024;
const fileSize = 820;
const cardFileQuantity = Number.parseInt(
    (userCardSizeInput * megabytesInGigabytes) / fileSize
);

const remainder =
    userCardSizeInput * megabytesInGigabytes - cardFileQuantity * fileSize;

console.log(
    "Карта обсягом " +
        userCardSizeInput +
        "GB може містити " +
        cardFileQuantity +
        " файлів обсягом " +
        fileSize +
        "MB. Вільного місця залишається " +
        remainder +
        "MB"
);

//++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Завдання 1(Норма)
 * Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
 */

const userWalletMoneyAmount = Number(
    prompt("Вкажіть кількість грошей у вашому гаманці", 0)
);
const chocolatePriceInput = Number(
    prompt("Вкажіть вартість однієї шоколадки", 0)
);

const chocolateQuantity = Number.parseInt(
    userWalletMoneyAmount / chocolatePriceInput
);

const remainderAfterPurchase =
    userWalletMoneyAmount - chocolateQuantity * chocolatePriceInput;

console.log(
    "З наявними у вашому гаманці " +
        userWalletMoneyAmount +
        "грн., і вартістю " +
        chocolatePriceInput +
        "грн. за шоколадку, ви можете купити " +
        chocolateQuantity +
        " шоколадки. Решта після покупки буде складати " +
        remainderAfterPurchase +
        "грн."
);

//++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Завдання 2(Норма)
 * Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).
 */

const userNumberInput = Number(prompt("введіть тризначне число", 111));
let changableNumber = userNumberInput;
const futureNumberHundreds = Number.parseInt(changableNumber % 10);
changableNumber /= 10;
const futureNumberDecimals = Number.parseInt(changableNumber % 10);
changableNumber /= 10;
const futureNumberUnits = Number.parseInt(changableNumber % 10);
const reverseNumber =
    futureNumberHundreds * 100 + futureNumberDecimals * 10 + futureNumberUnits;

console.log(
    "Число " +
        userNumberInput +
        ",яке ви ввели, задом не перед буде мати вигляд " +
        reverseNumber
);

//++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Завдання 1(Максимум)
 * Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
 */

const userDepositInput = Number(prompt("Введіть суму вкладу"));
const yearInterestRate = 5;
const twoMonthAccruedInterest =
    ((userDepositInput * (1 + yearInterestRate / 100) - userDepositInput) * 2) /
    12;
const roundedTwoMonthAccruedInterest = Number(
    twoMonthAccruedInterest.toFixed(2)
);

console.log(
    "При вкладі у " +
        userDepositInput +
        "грн. і відсотковою річною ставкою у " +
        yearInterestRate +
        "% сума нарахованих відсотків за 2 місяці складатиме " +
        roundedTwoMonthAccruedInterest +
        "грн.."
);

//++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++

/**
 * Завдання 2(Максимум)
 * Що повернуть вирази:
 *
 * 2 && 0 && 3 // 0
 * 2 || 0 || 3 // 2
 * 2 && 0 || 3 // 3
 */
