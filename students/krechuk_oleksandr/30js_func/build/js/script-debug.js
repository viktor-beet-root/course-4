"use strict";

// Мінімум
// 1. Напиши всі можливі варіанти створення функцій.
// function func() {
//     // }
// const func = function (a, b) {
//     return a + b;
// }
// const func = (a, b) => {
//     return a + b;
// }
// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function length() {
  var argLeng = 'кількість переданих аргументів ' + arguments.length;
  console.log(argLeng);
}

length(1, 5, 756, 345, 76, 134, 6574, 846, 134, 6435, 735); // 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

function compar(num1, num2) {
  if (num1 > num2) {
    console.log(1);
  } else if (num1 < num2) {
    console.log(-1);
  } else {
    console.log(0);
  }
}

compar(-5, -10); // 4  Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(num) {
  var i = 1;

  while (num) {
    i = i * num--;
  }

  console.log(i);
}

factorial(9); // 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function numberOf3(num1, num2, num3) {
  var result = num1 * 100 + num2 * 10 + num3;
  console.log(result);
}

numberOf3(9, 5, 8); // 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function square(num1) {
  var num2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : num1;
  var result = 'Площа квадрата ' + num1 * num2;
  console.log(result);
}

square(9, 5); // Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function ideal(num) {
  var j = 0;

  for (var i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      j = j + i;
    }
  } // if (j === num && j !== 0) {
  //     console.log('число досконале')
  // } else {
  //     console.log('число не досконале')
  // }


  if (j === num && j !== 0) {
    return num;
  } else {
    return 0;
  }
}

ideal(28); // 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function idealOf(num1, num2) {
  for (var i = num1; i <= num2; i++) {
    if (i === ideal(i)) {
      console.log(i);
    }
  }
}

idealOf(6, 1000);