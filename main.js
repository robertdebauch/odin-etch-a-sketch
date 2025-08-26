// define grid

const grid = document.querySelector('#grid');

let num = randomGridSize();

function randomGridSize() {
    let range = 100;
    let randomNumber = Math.floor(Math.random() * range / 2) * 2;
    if (randomNumber == 0) {
        console.log(randomNumber);
        return randomNumber += 1;
    } else {
        return randomNumber;
    }
}

function createGrid() {
    let gridArea = 768;
    let cellSize = gridArea / num;
    let numOfCells = Math.pow(num, 2);
    let cellArray = [];

    for (let cell = 0; cell < numOfCells; cell++) {
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        grid.appendChild(cell);
        cell.setAttribute(`style`, `width: ${cellSize}px; height: ${cellSize}px;`);
        cellArray.push(cell);
    }

    const randomColor = (event) => {
        const randColor = Math.floor(Math.random() * 16777215).toString(16);
        event.target.style.backgroundColor = "#" + randColor;
    }

    cellArray.forEach((cell) => {
        cell.addEventListener('mouseover', randomColor);
    });

    let gridSizeInfo = document.querySelector('#current-size');
    gridSizeInfo.textContent = `current size of the grid: ${num} x ${num}`;
    if (`${num}` == 100) {
        gridSizeInfo.textContent = `the maximum size ${num} x ${num} is reached.`;
    }
}

createGrid();


const button = document.querySelector('button');

button.addEventListener('click', () => {

    function deleteGrid() {
        while (grid.firstChild) {
            grid.firstChild.remove();
        }
    }

    deleteGrid();

    num = defineGridSize();
    createGrid();
});

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



