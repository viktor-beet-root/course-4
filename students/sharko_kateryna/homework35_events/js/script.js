// 1.Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". 
// Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

const modalOpenBtn = document.querySelector('.open-modal');
const modalCloseBtn = document.querySelector('.close-modal');
const modalWind = document.querySelector('.modal')

modalOpenBtn.addEventListener('click', function () {
    modalWind.style.display = 'flex';
})

modalCloseBtn.addEventListener('click', function () {
    modalWind.style.display = 'none';
})

// 2.Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const btnNextColor = document.querySelector('.next-color-btn');
const redTrafficLight = document.querySelector('.color-red');
const yellowTrafficLight = document.querySelector('.color-yellow');
const greenTrafficLight = document.querySelector('.color-green');
let currentColor = 'red';
let previousColor = 'yellow';

btnNextColor.addEventListener('click', function () {
    if (currentColor === 'red' && previousColor === 'yellow') {
        currentColor = 'yellow';
        previousColor = 'red';
        yellowTrafficLight.style.background = 'yellow';
        redTrafficLight.style.background = 'grey';
        return;
    }
    if (currentColor === 'yellow' && previousColor === 'red') {
        currentColor = 'green';
        previousColor = 'yellow';
        yellowTrafficLight.style.background = 'grey';
        greenTrafficLight.style.background = 'green';
        return;
    }
    if (currentColor === 'green' && previousColor === 'yellow') {
        currentColor = 'yellow';
        previousColor = 'green';
        yellowTrafficLight.style.background = 'yellow';
        greenTrafficLight.style.background = 'grey';
        return;
    }
    if (currentColor === 'yellow' && previousColor === 'green') {
        currentColor = 'red';
        previousColor = 'yellow';
        yellowTrafficLight.style.background = 'grey';
        redTrafficLight.style.background = 'red';
        return;
    }
})
