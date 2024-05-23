const container = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".gridBtn");

let gridSize = 16;

function createGrid(size) {
    let boxSize = 500 / size;
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.style.outline = "1px solid black";
        div.style.height = `${boxSize}px`;
        div.style.width = `${boxSize}px`;
        div.classList.add("box")
        container.appendChild(div);
    }
    boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "black";
        });
    });
}

let boxes = document.querySelectorAll(".box");

createGrid(gridSize);

gridBtn.addEventListener("click", () => {
    let gridSize = prompt("Enter Grid Size: ");
    if (gridSize > 100) {
        alert("Maximum Size 100");
    } else if (isNaN(gridSize)) {
        alert("Must be a positive number")
    }
    else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }
});




