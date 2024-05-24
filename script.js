const container = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".gridBtn");
const sizeTag = document.querySelector(".size-tag");
const toggleSlider = document.querySelector(".grid-toggle input");
const clearBtn = document.querySelector(".clearGrid");
let gridActive = false;

let gridSize = 16;

function createGrid(size) {
    let boxSize = 500 / size;
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.style.height = `${boxSize}px`;
        div.style.width = `${boxSize}px`;
        div.classList.add("box")
        container.appendChild(div);
    }
    sizeTag.textContent = `${size} X ${size}`

    boxes = document.querySelectorAll(".box");
    
    if (gridActive) addGrid();

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "black";
        });
    });
}

function addGrid() {
    boxes.forEach((box) => {
        box.style.outline = "black solid 1px";
    });
    gridActive = true;
}

let boxes = document.querySelectorAll(".box");

createGrid(gridSize);

gridBtn.addEventListener("click", () => {
    let gridSize = prompt("Enter Grid Size: ");
    if (gridSize > 100 || gridSize < 1) {
        alert("Grid Size: 1-100");
    } else if (isNaN(gridSize)) {
        alert("Must be a positive number")
    } else if (gridSize === null || gridSize === "") {
        return;
    }
    else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }
});


toggleSlider.addEventListener("change", () => {
    let firstBox = container.firstElementChild;
    if (firstBox.style.outline === "black solid 1px") {
        boxes.forEach((box) => {
           box.style.outline = "";
           gridActive = false;
        });
    } else {
        addGrid();
    }
});

clearBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = "White";
    })
})




