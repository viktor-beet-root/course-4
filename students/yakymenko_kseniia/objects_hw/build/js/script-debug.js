"use strict";

// Мінімум
//1)Створи об'єкт, що описує автомобіль (виробник, модель, 
// рік випуску, середня швидкість, обсяг паливного баку, 
// середня витрата палива на 100 км., водії), і наступні 
// методи для роботи з цим об'єктом:
// 1.Метод, який виводить на екран інформацію про автомобіль.
// 2.Додавання ім’я водія у список
// 3.Перевірка водія на наявність його ім’я у списку
// 4.Підрахунок необхідного часу та кількості палива для 
// подолання переданої відстані з середньою швидкістю. Враховуй, 
// що через кожні 4 години дороги водієві необхідно робити 
// перерву на 1 годину. 
(function () {
  var auto = {
    manufacturer: 'Tesla',
    model: 'S',
    manufacturedYear: 2022,
    averageSpeed: 200,
    tankVolume: 396,
    averageFuelConsumption: 30,
    drivers: {
      names: 'Volodymyr',
      license: 'Volodymyr 1'
    },
    // 1.Метод, який виводить на екран інформацію про автомобіль.
    autoInfo: function autoInfo() {
      console.log("Manufacturer:".concat(this.manufacturer, "\nModel: ").concat(this.model, "\nYear of manufacture: ").concat(this.manufacturedYear, " \nAverage speed: ").concat(this.averageSpeed, " km/h \nTank Volume: ").concat(this.tankVolume, " litres\nAverage fuel consumption per 100 km: ").concat(this.averageFuelConsumption, " km/h\nDrivers: ").concat(this.drivers.names));
    },
    // 3.Перевірка водія на наявність його ім’я у списку
    driverInfo: function driverInfo(driverName) {
      if (this.isDriver(driverName)) {
        console.log(this.getName(driverName) + '\n' + 'License: ' + this.getDrivingLicense(driverName));
      }
    },
    // 2.Додавання ім’я водія у список
    addDriver: function addDriver(driverName) {
      var driverLicense = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.isDriver(driverName)) {
        this.drivers.names = this.drivers.names + ', ' + driverName;

        if (this.isLicense(driverLicense)) {
          if (driverLicense) {
            this.drivers.license = this.drivers.license + ',' + driverName + ' ' + '1';
          } else {
            this.drivers.license = this.drivers.license + ',' + driverName + ' ' + '0';
          }
        }
      }
    },
    // 4.Підрахунок необхідного часу та кількості палива для 
    // подолання переданої відстані з середньою швидкістю. Враховуй, 
    // що через кожні 4 години дороги водієві необхідно робити 
    // перерву на 1 годину. 
    refuel: function refuel(fuel) {
      if (typeof fuel === 'number' && fuel > 0) {
        this.tankVolume = this.tankVolume + fuel;
      }
    },
    calculateTrip: function calculateTrip(distance, driverName) {
      if (this.validateTrip(driverName, distance)) {
        return this.getTripTime(distance);
      }
    },
    isDriver: function isDriver(driverName) {
      return typeof driverName === 'string' && driverName !== '';
    },
    isDistance: function isDistance(distance) {
      if (typeof distance === 'number' && distance > 0) return true;
      return console.log('Required distance');
    },
    isLicense: function isLicense(license) {
      return typeof license === 'boolean';
    },
    getName: function getName(driverName) {
      var dName = 0;
      var resultName = '';
      dName = this.drivers.names.indexOf(driverName);
      resultName = 'Driver: ' + this.drivers.names.slice(dName, dName + driverName.length);
      return resultName;
    },
    getDrivingLicense: function getDrivingLicense(driverName) {
      var licenseName = 0;
      var licenseResult = 0;
      licenseName = this.drivers.license.indexOf(driverName);
      licenseResult = this.drivers.license.slice(licenseName + driverName.length + 1, licenseName + driverName.length + 2);
      return +licenseResult;
    },
    checkingLicense: function checkingLicense(driverName) {
      return this.getLicense(driverName) ? 1 : console.log('Need license');
    },
    isMaxDistance: function isMaxDistance(distance) {
      if (distance < this.tankVolume / this.fuelAverage100 * 100) return true;
      return console.log('Car refueling is required');
    },
    getTripTime: function getTripTime(distance) {
      var temp = 0;
      var maxTrip = 4;
      temp = distance / this.speedAverage;

      if (temp > maxTrip) {
        for (var i = 1; i < temp; i++) {
          if (i % 4 == 0) {
            ++temp;
          }
        }

        console.log('Need ' + temp + ' hours');
        return temp;
      } else {
        console.log('Need ' + temp + ' hours');
        return temp;
      }
    },
    validateTrip: function validateTrip(driverName, distance) {
      return this.isDriver(driverName) && this.isDistance(distance) && this.isMaxDistance(distance) && this.checkingLicense(driverName);
    }
  };
  auto.autoInfo();
  auto.addDriver('New Driver', 1);
  auto.driverInfo('New Driver');
  auto.driverInfo('Volodymyr');
  auto.calculateTrip(300, 'Volodymyr');
})();