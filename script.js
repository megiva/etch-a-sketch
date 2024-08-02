const gridContainer = document.getElementById("container");

let numRow = 16;
makeGrid(numRow);

const btnContainer = document.getElementById("buttons");
const newGridBtn = document.createElement("button");
const resetBtn = document.createElement("button");
btnContainer.appendChild(newGridBtn);
btnContainer.appendChild(resetBtn);
newGridBtn.textContent = 'New Grid';
resetBtn.textContent = 'Reset Grid';

resetBtn.addEventListener('click', () => {
    makeGrid(16);
});

newGridBtn.addEventListener('click', () => {
    let userInput = prompt("Input a number (1-64):")
    while (userInput < 1 || userInput > 64) {
        userInput = prompt("Input a number (1-64):");
    }
    makeGrid(userInput);
})

function clearGrid() {
    const allRows = document.querySelectorAll('.row');
    allRows.forEach(gridRow => {
        gridRow.remove();
    })
}

function makeGrid(numRow) {
    clearGrid();
    for (let i=1; i<=numRow; i++) {
        const gridRow = document.createElement("div");
        gridRow.className = 'row';
        gridContainer.appendChild(gridRow);
        for (let j=1; j<=numRow; j++) {
            const gridCell = document.createElement("div");
            gridRow.appendChild(gridCell);
            gridCell.className = 'cell'
            gridCell.addEventListener('mouseenter', () => {
                gridCell.style.backgroundColor = 'pink';
            });
        }
    }
}
