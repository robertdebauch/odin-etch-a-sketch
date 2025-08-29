const grid = document.querySelector('#grid');
const button = document.querySelector('button');

function randomGridSize(min = 1, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function deleteGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}

function createGrid(num) {
    let gridArea = 768;
    let gridGap = 1;
    let cellSize = (gridArea - gridGap * (num - 1)) / num;
    let numOfCells = Math.pow(num, 2);
    let cellArray = [];

    for (let cell = 0; cell < numOfCells; cell++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        grid.appendChild(cell);
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cellArray.push(cell);
    }

    const randomColor = (event) => {
        const randColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = "#" + randColor;

        let opacity = parseFloat(event.target.style.opacity) || 0;
        opacity = Math.min(opacity + 0.1, 1);
        event.target.style.opacity = opacity;
    }

    cellArray.forEach((cell) => {
        cell.addEventListener('mouseover', randomColor);
    });

    let gridSizeInfo = document.querySelector('#current-size');
    gridSizeInfo.textContent = `current size of the grid: ${num} x ${num}`;
}

function defineGridSize() {
    const message = document.querySelector('#message');
    message.style.display = 'none';

    while (true) {
        const initialValue = prompt('define the grid size: enter the number up to 100', randomGridSize());

        if (initialValue === null) {
            message.textContent = 'You have cancelled the grid creation. The grid has been reset to its default state.';
            message.style.display = 'block';
            return 16;
        }

        const trimmedValue = initialValue.trim();
        let i = parseInt(trimmedValue, 10);

        if (isNaN(i)) {
            continue;
        }

        if (i == 0) {
            message.textContent = 'You entered 0. The grid has been reset to its default state.';
            message.style.display = 'block';
            i = 16;
        }

        if (i < 0) {
            message.textContent = 'You entered a negative value. It has been changed to positive.';
            message.style.display = 'block';
            i *= -1;
        }

        if (i > 100) {
            message.textContent = 'You entered a value that is too large. It has been truncated to 100.';
            message.style.display = 'block';
            i = 100;
        }

        return i;
    }
}


button.addEventListener('click', () => {
    deleteGrid();
    createGrid(defineGridSize());
});

createGrid(randomGridSize());
