// define grid

const grid = document.querySelector('#grid');

// define number of cells

// let num = 16;
// let num = prompt('type the number', 16);

function defineGridSize() {
    let i;

    while (isNaN(i)) {
        i = prompt('define the grid size: enter the number up to 100', 16);

        if (!isNaN(i)) {
            if (i > 100) {
                i = 100;
                return i;
            } else {
                return i;
            }
        }
    }
}

let num = defineGridSize();

let numOfCells = Math.pow(num, 2);

// calculate cellSize

const gridArea = 768; // hard-code. can be parametrized in the future?
const cellSize = gridArea / num;

const cellArray = [];

// loop to create grid

function createGrid() {
    for (let cell = 0; cell < numOfCells; cell++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        grid.appendChild(cell);
        cell.setAttribute(`style`, `width: ${cellSize}px; height: ${cellSize}px;`);
        cellArray.push(cell);
    }
}

createGrid();

// draw version: creates new grids, but it's not what i need.
// const button = document.querySelector('button');
// button.addEventListener('click', createGrid);

cellArray.forEach((cell) => {
    cell.addEventListener('mouseover', hoverState);
});

function hoverState(event) {
    event.target.classList.add('cell_filled');
}

// information about the size of the grid
const gridSizeInfo = document.querySelector('#current-size');
gridSizeInfo.textContent = `current size of the grid: ${num} x ${num}`;
if (`${num}` == 100) {
    gridSizeInfo.textContent = `the maximum size ${num} x ${num} is reached.`;
}

