// Мінімум

// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
const auto = {
    manufacturer: 'Nissan',
    model: 'Juke',
    yearOfManufacture: '2016',
    averageSpeed: 100,
    fuelTankVolume: 50,
    averageFuel100Km: 7,
    drivers: 'Olga, Nikita, Anton',

    getInfo: function () {
        const infoAboutCar = 'Машина ' + this.manufacturer + ' ' + this.model + ' ' + this.yearOfManufacture +
            ' года. ' + 'Средняя скорость - ' + this.averageSpeed + ' км/час, объем бака - ' + this.fuelTankVolume +
            ', расход - ' + this.averageFuel100Km + ' литров на 100км. Зарегистрированніе водители: ' + this.drivers + '.';
        console.log(infoAboutCar);
    },

    addDriver: function (name) {
        this.drivers = this.drivers + ', ' + name;
    },

    checkDriver: function (name) {
        return this.drivers.includes(name);
    },

    calcTimeInRoad: function (distance) {
        const time = distance / this.averageSpeed;
        const allTime = time + Math.floor(time / 4);
        return allTime;
    },

    calcfuelQuantity: function (distance) {
        const fuelQuantity = distance / 100 * this.averageFuel100Km;
        return fuelQuantity;
    }
}

// 1.1 Метод, який виводить на екран інформацію про автомобіль.
auto.getInfo();

// 1.2 Додавання ім’я водія у список
auto.addDriver('Sasha');
console.log(auto);

// // 1.3 Перевірка водія на наявність його ім’я у списку
console.log(auto.checkDriver('Olga'));

// 1.4 Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години
// дороги водієві необхідно робити перерву на 1 годину.
console.log(auto.calcTimeInRoad(500));
console.log(auto.calcfuelQuantity(600));

// Норма

// 1. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
const timeDescription = {
    hours: 18,
    minutes: 25,
    seconds: 45,
}

// 1.1 Для виведення часу на екран.
function timeOnScreen(timeDescription) {
    console.log(timeDescription.hours + ' часов ' + timeDescription.minutes + ' минут ' + timeDescription.seconds + ' секунд.');
};

timeOnScreen(timeDescription);

// 1.2 Зміни часу на передану кількість секунд.

function validateTime(timeDescription) {
    if (timeDescription.seconds >= 60) {
        timeDescription.minutes = timeDescription.minutes + Math.floor(timeDescription.seconds / 60);
        timeDescription.seconds = timeDescription.seconds % 60;
    }

    if (timeDescription.minutes >= 60) {
        timeDescription.hours = timeDescription.hours + Math.floor(timeDescription.minutes / 60);
        timeDescription.minutes = timeDescription.minutes % 60;
    }

    if (timeDescription.hours >= 24) {
        timeDescription.hours = timeDescription.hours % 24;
    }
}

function changedSeconds(timeDescription, seconds) {
    timeDescription.seconds = +seconds + timeDescription.seconds;
    validateTime(timeDescription);
}
changedSeconds(timeDescription, 2849);
console.log(timeDescription);

// 1.3 Зміни часу на передану кількість хвилин.

function changedMinutes(timeDescription, minutes) {
    timeDescription.minutes = +minutes + timeDescription.minutes;
    validateTime(timeDescription);
}
changedMinutes(timeDescription, 133);
console.log(timeDescription);

// 1.4 Зміни часу на передану кількість годин.

function changedHours(timeDescription, hours) {
    timeDescription.hours = +hours + timeDescription.hours;
    validateTime(timeDescription);
}
changedHours(timeDescription, 6);
console.log(timeDescription);

// 1.5 Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75».
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.
