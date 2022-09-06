// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата

const squareSideInput = prompt(
    "Give me one side measure of a square in meter and i will calculate its perimeter"
);

const squarePerimeter = squareSideInput * 4;

alert(
    "Perimeter of a square with a side " +
        squareSideInput +
        " is " +
        squarePerimeter +
        " meters"
);
