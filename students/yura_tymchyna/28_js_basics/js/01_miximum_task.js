// Запитай у користувача радіус кола і виведи площу такої окружності.

const circleRadiusInput = prompt(
    "Give me a circle radius in inches and i will calculate its area"
);

const PI = Math.PI;

const circleArea = (2 * PI * Math.pow(circleRadiusInput, 2)).toFixed(2);

alert(
    "Area of a circle with radius " +
        circleRadiusInput +
        " is " +
        circleArea +
        " square inches"
);
