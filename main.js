// define grid

const grid = document.querySelector('#grid');

// define number of cells

// let num = 16;
// let num = prompt('type the number', 16);

function defineGridSize() {
    let i;

    while (isNaN(i)) {
        i = prompt('define the grid size: enter the number up to 100', randomGridSize());

        if (!isNaN(i)) {
            if (i > 100) {
                return i = 100;
            } else if (i < 0) {
                i *= -1;
                if (i > 100) {
                    return i = 100;
                } else {
                    return i;
                }
            } else if (!Number.isInteger(Number(i))) {
                if (i > 100) {
                    return i = 100;
                } else {
                    return Math.round(i);
                }
            } else if (i == 0) {
                return i += 1;
                // not good!
            } else if (i === null) {
                console.log('check');
                const message = document.querySelector('#message');
                message.textContent = 'Creation of the new grid was canceled by the user. Return to default values. To create a new grid click on the orange button.';
                message.style.display = 'block';
                
                return i = 16;
            } else {
                return i;
            }
        }
    }
}

function randomGridSize() {
    let range = 100;
    let randomNumber = Math.floor( Math.random() * range / 2 ) * 2;
    return randomNumber;
}

console.log(randomGridSize());

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

cellArray.forEach((cell) => {
    cell.addEventListener('mouseover', hoverState);
});

console.log(cellArray.length);

function hoverState(event) {
    event.target.classList.add('cell_filled');
}


// information for user about the size of the grid
const gridSizeInfo = document.querySelector('#current-size');
gridSizeInfo.textContent = `current size of the grid: ${num} x ${num}`;
if (`${num}` == 100) {
    gridSizeInfo.textContent = `the maximum size ${num} x ${num} is reached.`;
} 

// button 

const button = document.querySelector('button');

// remove grid

button.addEventListener('click', () => {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
});


