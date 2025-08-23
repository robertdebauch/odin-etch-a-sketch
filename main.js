// define grid

const grid = document.querySelector('#grid');

// define number of cells

// let num = 16;
let num = prompt('type the number', 16);
let numOfCells = Math.pow(num, 2);

// calculate cellSize

const gridArea = 768; // hard-code. can be parametrized in the future?
const cellSize = gridArea / num;

// var 1: for loop

for (let cell = 0; cell < numOfCells; cell++) {
    const cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    grid.appendChild(cell);
    cell.setAttribute(`style`, `width: ${cellSize}px; height: ${cellSize}px;`);
}

console.log(numOfCells);

// information about the size of the grid
const gridSizeInfo = document.querySelector('#current-size');
gridSizeInfo.textContent = `current size of the grid: ${num} x ${num}`;



// make button activate prompt

const button = document.querySelector('button');
function changeGrid() {
    grid.setAttribute('style', 'background-color: red');
}
button.addEventListener('click', changeGrid);