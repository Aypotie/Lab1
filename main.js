const input = require('prompt-sync')();
const { trapezoidArea, trapezoidMiddleLine, trapezoidPerimeter } = require('./trapezoid.js')
const triangle = require('./triangle.js');

const menu = "=== MENU ===\n1. triangle\n2. trapezoid\n3. break\n============";

while (true) {
    console.log(menu);

    let choice = input('Введите фигуру: ');
    if (choice == 1){
        let aTriangle = Number(input('Введите основание треугольника:'));
        let bTriangle = Number(input('Введите левую сторону треугольника:'));
        let cTriangle = Number(input('Введите правую сторону треугольника:'));
        if (aTriangle + bTriangle > cTriangle && aTriangle + cTriangle > bTriangle && cTriangle + bTriangle > aTriangle){
            console.log('Периметр треугольника:', triangle.perimeter(aTriangle, bTriangle, cTriangle));
            console.log('Площадь треугольника:', triangle.area(aTriangle, bTriangle, cTriangle));
            console.log('проверка на равнобедренность треугольника:', triangle.isosceles(aTriangle, bTriangle, cTriangle));
        } else console.log('Треугольника задана неправильно');
    } else if (choice == 2){
        let a = Number(input('Введите большее основание трапеции:'));
        let b = Number(input('Введите меньшее основание трапеции:'));
        let c = Number(input('Введите первую боковую сторону трапеции:'));
        let d = Number(input('Введите вторую боковую сторону трапеции:'));
        if (a > b){
            console.log('Периметр трапеции:', trapezoidPerimeter(a, b, c, d));
            console.log('Площадь трапеции:', trapezoidArea(a, b, c, d));
            console.log('Длина средней линии:', trapezoidMiddleLine(a, b));
        } else console.log('Трапеция задана неправильно')
    } else if (choice == 3){
        break;
    }
    console.log('Hello');
}
