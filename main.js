const input = require('prompt-sync')();
const { trapezoidArea, trapezoidMiddleLine, trapezoidPerimeter } = require('./trapezoid.js')

const menu = "=== MENU ===\n1. triangle\n2. trapezoid\n3. break\n============";

while (true) {
    console.log(menu);

    let choice = input('Введите фигуру: ');
    if (choice == 1){
        // TODO: create triangle
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
}
