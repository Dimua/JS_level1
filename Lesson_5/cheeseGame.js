'use strict';

let cheeseMap = [
    ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья'],
    ['Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка'],
    [],
    [],
    [],
    [],
    ['Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка', 'Пешка'],
    ['Ладья', 'Конь', 'Слон', 'Ферзь', 'Король', 'Слон', 'Конь', 'Ладья']
];

function cheeseGame() {
    let container = document.querySelector('.container');
    let flag = true;

    for (let col = 0; col < 8; col++) {
        for (let row = 0; row < 8; row++) {
            if (row === 0) flag = !flag;

            let block = document.createElement('div');
            let nameCheeseFigure = document.createElement('h4');

            nameCheeseFigure.textContent = cheeseMap[col][row];

            if (flag) block.className = ('block grey');
            else block.className = ('block white');

            if (col < 2 || col > 5) block.appendChild(nameCheeseFigure);

            container.appendChild(block);
            flag = !flag;
        }
    }
}
cheeseGame();

