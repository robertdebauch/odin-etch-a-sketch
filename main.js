// define grid

const grid = document.querySelector('#grid');

// define number of cells

// let num = prompt('type the number', 16);
let num = 16;
let numOfCells = Math.pow(num, 2);

// calculate cellSize

const gridArea = 768; // hard-code. can be parametrized in the future?
const cellSize = gridArea / num;

const cellArray = [];

// loop to create grid

for (let cell = 0; cell < numOfCells; cell++) {
    let cell = document.createElement('div');
    cell.setAttribute('class', 'cell');
    grid.appendChild(cell);
    cell.setAttribute(`style`, `width: ${cellSize}px; height: ${cellSize}px;`);
    cellArray.push(cell);
}

// without function
// cellArray.forEach((cell) => {
//     cell.addEventListener('mouseover', () => {
//         cell.classList.add('cell_filled');
//     });
// });

// with named function

cellArray.forEach((cell) => {
    cell.addEventListener('mouseover', hoverState);
});

function hoverState(event) {
    event.target.classList.add('cell_filled');
}


// information about the size of the grid
const gridSizeInfo = document.querySelector('#current-size');
gridSizeInfo.textContent = `current size of the grid: ${num} x ${num}`;


// make button activate prompt

const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('hello');
})

// function newGrid() {
//     grid.setAttribute('style', 'background-color: red');
// }

// button.addEventListener('click', newGrid);