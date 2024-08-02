const box = document.getElementById("container");

const numRow = 16;
for (let i=0; i<numRow; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    box.appendChild(row);
    for (let j=0; j<numRow; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
}
