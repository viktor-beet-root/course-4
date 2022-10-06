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
const avto = {
    manufacturer: 'Peugeot',
    model: '1007',
    year_of_issue: '2005',
    average_speed: '130',
    fuel_volume: '1360',
    consumption_per_100_km: '6.6',
    drivers: 'Ivan',
    dispInformation() {
        return ("Виробник: " + this.manufacturer + "\n" +
            "Виробник: " +
            this.model + "\n" +
            "Рік випуска: " +
            this.year_of_issue + "\n" +
            "Середня швидкість: " +
            this.average_speed + "\n" +
            "Об'єм' топливного бака: " +
            this.fuel_volume + "\n" +
            "Витрати топлива на 100 км: " +
            this.consumption_per_100_km + "\n" +
            "Ім'я водія: " +
            this.drivers
        );
    },
    setName(name) {
        this.drivers = this.drivers + ', ' + name;
    },
    fuelOnDistance(distance) {
        let fuel = (((+this.consumption_per_100_km).toFixed(2)) * 100) * (this.rounded(distance) * 100) / 1000000;
        return 'На ' + distance + 'км витрачається ' + fuel.toFixed(2) + 'л палива';
    },
    rounded(number) {
        return +number.toFixed(2);
    },
    timeOnDistance(distance, breakdistance) {
        let timeclear = (this.rounded(distance) * 100) / this.average_speed * 100 / 10000;
        let timeOnDistance = +timeclear / breakdistance + +timeclear;
        return 'Для проходження ' + distance + 'км,' + "\n" +
            'з урахуванням часових зупинок ' + "\n" +
            'через кожні ' + breakdistance + 'км, потрібно ' + "\n" +
            timeOnDistance.toFixed(1) + ' годин часу';
    },
};
avto.setName('Ilya');
avto.setName('Oleg');
// console.log(avto.dispInformation());
// console.log(avto.fuelOnDistance(1));
// console.log(avto.timeOnDistance(5000, 4));





// // // Норма

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
