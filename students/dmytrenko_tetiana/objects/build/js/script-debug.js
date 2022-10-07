"use strict";

// ОБ'ЄКТИ
// Мінімум
// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску,
//     середня швидкість, обсяг паливного баку, середня витрата палива
//     на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// 1. Метод, який виводить на екран інформацію про автомобіль.
// 2. Додавання ім’я водія у список
// 3. Перевірка водія на наявність його ім’я у списку
// 4. Підрахунок необхідного часу та кількості палива
//      для подолання переданої відстані з середньою швидкістю.
//      Враховуй, що через кожні 4 години дороги водієві необхідно робити 
//      перерву на 1 годину.
var avto = {
  manufacturer: 'Peugeot',
  model: '1007',
  year_of_issue: '2005',
  average_speed: '130',
  fuel_volume: '1360',
  consumption_per_100_km: '6.6',
  drivers: 'Ivan',
  displayInformation: function displayInformation() {
    return console.log("Виробник: " + this.manufacturer + "\n" + "Модель: " + this.model + "\n" + "Рік випуска: " + this.year_of_issue + "\n" + "Середня швидкість: " + this.average_speed + 'км/год' + "\n" + "Об\'єм топливного бака: " + this.fuel_volume + 'л' + "\n" + "Витрати топлива на 100 км: " + this.consumption_per_100_km + "\n" + "Ім'я водія: " + this.drivers);
  },
  setName: function setName(name) {
    this.drivers = this.drivers + ', ' + name;
  },
  fuelOnDistance: function fuelOnDistance(distance) {
    var fuel = (+this.consumption_per_100_km).toFixed(2) * 100 * (this.rounded(distance) * 100) / 1000000;
    return 'На ' + distance + 'км витрачається ' + fuel.toFixed(2) + 'л палива';
  },
  rounded: function rounded(number) {
    return +number.toFixed(2);
  },
  hasDriver: function hasDriver(name) {
    var message = this.drivers.includes(name) === true ? 'Ім\'я ' + name + ' присутнє в списку водіїв' : 'Ім\'я ' + name + ' відсутнє в списку водіїв';
    return message;
  },
  timeOnDistance: function timeOnDistance(distance, breaktime) {
    var timeclear = this.rounded(distance) * 100 / this.average_speed * 100 / 10000;
    var timeOnDistance = ~~(~~+timeclear / breaktime) + +timeclear;
    var allTime = 'Для проходження ' + distance + 'км,' + "\n" + 'з урахуванням часових зупинок ' + "\n" + 'через кожні ' + breaktime + ' години, потрібно ' + "\n" + timeOnDistance.toFixed(1) + ' годин часу';
    return allTime;
  }
};
avto.setName('Ilya');
avto.setName('Oleg');
avto.displayInformation();
console.log(avto.fuelOnDistance(51));
console.log(avto.hasDriver('Max'));
console.log(avto.timeOnDistance(5000, 4)); // // // Норма
// Створити об'єкт, що описує час (години, хвилини, секунди),
//  і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
//     Враховуйте, що в останніх 3 - х функціях, при зміні однієї частини часу,
//         може змінитися і інша.Наприклад: якщо до часу «20: 59: 45» додати 30 секунд,
//             то повинно вийти «21: 00: 15», а не «20: 59: 75». Також потрібно передбачити
// можливість того що користувач може передати 150 секунд, або 75 хвилин.

var time = {
  hours: 10,
  minutes: 15,
  seconds: 35,
  increaseSeconds: function increaseSeconds(seconds) {
    this.hours = this.hours + Math.round((this.seconds + seconds) / 3600);
    this.minutes = (this.minutes + Math.round((this.seconds + seconds) / 60)) % 60;
    this.seconds = (this.seconds + seconds) % 60;
    var message = 'Після збільшення на ' + seconds + ' секунд' + ' час становить ' + this.hours + '.' + this.minutes + '.' + this.seconds;
    return message;
  },
  increaseMinutes: function increaseMinutes(minutes) {
    this.hours = this.hours + Math.round((this.minutes + minutes) / 60);
    this.minutes = (this.minutes + minutes) % 60;
    var message = 'Після збільшення на ' + minutes + ' мінут' + ' час становить ' + this.hours + '.' + this.minutes + '.' + this.seconds;
    return message;
  },
  increaseHours: function increaseHours(hours) {
    this.hours = this.hours + hours;
    var message = 'Після збільшення на ' + hours + ' годин' + ' час становить ' + this.hours + '.' + this.minutes + '.' + this.seconds;
    return message;
  }
};

function displayTime() {
  var message = 'Наявний час ' + this.hours + '.' + this.minutes + '.' + this.seconds;
  return console.log(message);
}

displayTime.call(time);
console.log(time.increaseHours(3));
console.log(time.increaseMinutes(3570));
console.log(time.increaseSeconds(3570));