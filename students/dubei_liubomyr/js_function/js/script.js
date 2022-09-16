// Мінімум

// 1. Напиши всі можливі варіанти створення функцій.
function first(a, b) {
    console.log();
}

const second = function (c, d) {
    console.log(c - d);
}

const third = (k, l) => k + l;


// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function getArgumentsLength() {
    return (arguments.length);
}


// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function getNumber(firstNumb, secondNumb) {
    if (firstNumb < secondNumb) {
        return -1;
    }
    if (firstNumb > secondNumb) {
        return 1;
    }
    if (firstNumb === secondNumb) {
        return 0;
    }
}


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function calcFactorial(userNumber) {
    let factorialNumb = userNumber;
    for (let i = userNumber - 1; i > 0; i--) {
        factorialNumb = factorialNumb * i;
    }
    return factorialNumb;
}

// 5.Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function getAllNumber(numberOne, numberTwo, numberThree) {
    return +('' + numberOne + numberTwo + numberThree);
}

// 6.Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calcSquare(length, width) {
    if (width !== undefined) {
        return length * width;
    } else {
        return length ** 2;
    }
}
