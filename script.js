const grid = document.querySelector('.grid');
const inputs = document.querySelectorAll('.controls input');
const sizeInput = document.getElementById('sizing');

const defaultSize = 16;

window.onload = () => {
    setupGrid(defaultSize);
}

function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalGridSize = size**2;

    for (let i = 0; i < totalGridSize; i++) {
        const gridElement = document.createElement('div');
        gridElement.className ='cell';
        grid.appendChild(gridElement);
    }
}

//Changing the grid size
function handleUpdate() {
    gridSize = this.value;
    refreshGrid();
    setupGrid(gridSize);
}

function refreshGrid() {
    grid.innerHTML ='';
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousedown', () => {
    inputs.forEach(input => input.addEventListener('mousemove', moveMouse));
}));

// function downMouse () {
//     console.log('Down Mouse');
//     inputs.forEach(input => input.addEventListener('mousemove', moveMouse));
// }

function moveMouse () {
    console.log(this.value);
}