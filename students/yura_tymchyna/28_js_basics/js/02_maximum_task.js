/* Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно. */

const citiesDistanceInput = prompt(
    "What distance between two cities you want to cover?",
    100
);
const userSpeedInput = prompt(
    "With what speed per hour you want to ride?",
    "60"
);

const tripTime = (citiesDistanceInput / userSpeedInput).toFixed(2);

alert("You will reach your destination point in a " + tripTime + " hour(s)");
