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
    const auto = {
        manufacturer: 'Tesla',
        model: 'S',
        manufacturedYear: 2022,
        averageSpeed: 200,
        tankVolume: 396,
        averageFuelConsumption: 30,
        drivers: {
            names: 'Volodymyr',
            license: 'Volodymyr 1',
        },
        // 1.Метод, який виводить на екран інформацію про автомобіль.
        autoInfo() {
            console.log(`Manufacturer:${this.manufacturer}
Model: ${this.model}
Year of manufacture: ${this.manufacturedYear} 
Average speed: ${this.averageSpeed} km/h 
Tank Volume: ${this.tankVolume} litres
Average fuel consumption per 100 km: ${this.averageFuelConsumption} km/h
Drivers: ${this.drivers.names}`
            )
        },
        // 3.Перевірка водія на наявність його ім’я у списку
        driverInfo(driverName) {
            if (this.isDriver(driverName)) {
                console.log(this.getName(driverName) + '\n'
                    + 'License: ' + this.getDrivingLicense(driverName));
            }
        },
        // 2.Додавання ім’я водія у список
        addDriver(driverName, driverLicense = false) {
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
        refuel(fuel) {
            if (typeof fuel === 'number' && fuel > 0) {
                this.tankVolume = this.tankVolume + fuel;
            }
        },
        calculateTrip(distance, driverName) {
            if (this.validateTrip(driverName, distance)) {
                return this.getTripTime(distance);
            }
        },
        isDriver(driverName) {
            return (typeof driverName === 'string' && driverName !== '');
        },
        isDistance(distance) {
            if (typeof distance === 'number' && distance > 0) return true;
            return console.log('Required distance');
        },
        isLicense(license) {
            return (typeof license === 'boolean');
        },
        getName(driverName) {
            let dName = 0;
            let resultName = '';
            dName = this.drivers.names.indexOf(driverName);
            resultName = 'Driver: ' + this.drivers.names.slice(dName, dName + driverName.length);
            return resultName;
        },
        getDrivingLicense(driverName) {
            let licenseName = 0;
            let licenseResult = 0;
            licenseName = this.drivers.license.indexOf(driverName);
            licenseResult = this.drivers.license.slice(licenseName + driverName.length + 1, licenseName + driverName.length + 2);
            return +licenseResult;
        },
        checkingLicense(driverName) {
            return this.getLicense(driverName) ? 1 : console.log('Need license');
        },
        isMaxDistance(distance) {
            if (distance < (this.tankVolume / this.fuelAverage100) * 100) return true;
            return console.log('Car refueling is required');
        },

        getTripTime(distance) {
            let temp = 0;
            const maxTrip = 4;
            temp = distance / this.speedAverage;
            if (temp > maxTrip) {
                for (let i = 1; i < temp; i++) {
                    if (i % 4 == 0) {
                        ++temp;
                    }
                }
                console.log(('Need ' + temp + ' hours'));
                return temp;
            } else {
                console.log(('Need ' + temp + ' hours'));
                return temp;
            }
        },
        validateTrip(driverName, distance) {
            return (this.isDriver(driverName) &&
                this.isDistance(distance) &&
                this.isMaxDistance(distance) &&
                this.checkingLicense(driverName))
        }
    }

    auto.autoInfo();
    auto.addDriver('New Driver', 1);
    auto.driverInfo('New Driver');
    auto.driverInfo('Volodymyr');
    auto.calculateTrip(300, 'Volodymyr');
})();
