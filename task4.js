// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

spanWidth = document.getElementById('widthValue');
spanHeigh = document.getElementById('heightValue');

window.onresize = () => {
    spanWidth.textContent = window.innerWidth;
    spanHeigh.textContent = window.innerHeight;
}
