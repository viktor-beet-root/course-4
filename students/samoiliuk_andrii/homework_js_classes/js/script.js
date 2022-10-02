// Завдання 1
// Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.
// Продемонструй роботу властивостей і методів.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(r) {
        let radius = +r;
        if (radius > 0 && !isNaN(radius)) { this._radius = radius; } else throw 'wrong type';
    }

    get diameter() {
        return this.radius * 2;
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    length() {
        return 2 * Math.PI * this.radius;
    }
}

const circles = [];

const addCircleButton = document.querySelector(".circle__display");
addCircleButton.addEventListener("click", addCircle);

function addCircle(event) {
    if (event.target === event.currentTarget) {
        event.preventDefault();
        try {
            const circle = new Circle(document.querySelector(".circle__radius").value);
            circles.push(circle);
            displayCircles();
        } catch { alert("Невірні дані, радіус має бути додатнім числом.") }
    }
}

function displayCircles() {
    const row = document.querySelector(".task1");
    row.innerHTML = "";
    circles.forEach(element => {
        const answerCard = document.createElement("div");
        answerCard.classList.add("col-3");
        answerCard.innerHTML = `
        <div class="circleCard">
    <div class="circleCard__container">
            <div class="circleCard__circle" style="width:${element.diameter.toFixed(0)}mm; height:${element.diameter.toFixed(0)}mm;">
            </div>
    </div>
        <div class="circleCard__params">
            <p>Параметри кола:</p>
            <ul>
                <li>Радіус: ${element.radius.toFixed(2)} мм</li>
                <li>Діаметр: ${element.diameter.toFixed(2)} мм</li>
                <li>Довжина: ${element.length().toFixed(2)} мм</li>
                <li>Площа: ${element.area().toFixed(2)} мм<sup>2</sup></li>
            </ul>
        </div>
    </div>`;
        row.appendChild(answerCard);
    });
}

// Завдання 2
// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться до тих пір, поки в маркері є чорнило; один не пробільний символ — це 0,5% чорнил у маркері).

class Marker {
    constructor(name, color = name) {
        this.name = name;
        this.color = color;
        this.tank = 100;
    }

    write(string) {
        if (this.tank > 0) {
            let maxLetters = this.tank / 0.5;
            const letters = string.length - (string.split(" ").length - 1);
            if (letters <= maxLetters) {
                this.tank = this.tank - letters * 0.5;
                return string;
            } else if (letters > maxLetters) {
                this.tank = 0;
                let cutString = [];
                let i = 0;
                do {
                    cutString.push(string[i]);
                    if (string[i] === " ") {
                        maxLetters++;
                    }
                    i++
                } while (i < maxLetters);
                const answer = cutString.join("");
                return answer;
            }
        } else if (this.tank === 0) {
            alert("Маркер порожній");
            return "";
        }
    }
}

// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера і додай метод для заправки.
// Продемонструй роботу написаних методів.

class FillMarker extends Marker {
    constructor(name, color = name) {
        super(name, color = name);
    }

    fill(amount) {
        if (!isNaN(amount) && amount > 0) {
            this.tank = this.tank + amount;
            if (this.tank > 100) {
                this.tank = 100;
            }
        }
    }
}

// Продемонструй роботу написаних методів.

const markers = [
    new FillMarker("red", "#D22B2B"),
    new FillMarker("orange", "#F28C28"),
    new FillMarker("yellow", "#FDDA0D"),
    new FillMarker("green", "#097969"),
    new FillMarker("lightblue", "#ADD8E6"),
    new FillMarker("blue", "#0047AB"),
    new FillMarker("purple", "#702963")];

const writeButton = document.querySelector(".marker__button");
writeButton.addEventListener("click", writeWithMarker);

function getIndex(array, name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === name) {
            return i;
            break;
        };
    }
    return -1
}

function writeWithMarker(event) {
    if (event.target === event.currentTarget) {
        event.preventDefault();
        const answer = document.querySelector(".task2");
        const marker = getIndex(markers, document.querySelector(".marker__color").value);
        const newString = document.createElement('span');
        newString.innerHTML = markers[marker].write(document.querySelector(".marker__textarea").value) + " ";
        newString.style = `color:${markers[marker].color}`;
        answer.appendChild(newString);
    }
}

const fillButton = document.querySelector(".markerFill__button");
fillButton.addEventListener("click", fillMarker);

function fillMarker(event) {
    if (event.target === event.currentTarget) {
        event.preventDefault();
        const marker = getIndex(markers, document.querySelector(".markerFill__color").value);
        markers[marker].fill(+document.querySelector(".markerFill__amount").value);
    }
}




// Завдання 3

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().

// Виконаю після зауважень.
