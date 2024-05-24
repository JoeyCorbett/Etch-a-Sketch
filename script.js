const container = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".gridBtn");
const sizeTag = document.querySelector(".size-tag");
const toggleSlider = document.querySelector(".grid-toggle input");
const penBtn = document.querySelector(".penBtn");
const eraserBtn = document.querySelector(".eraserBtn");
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

    addPen();
}

function addGrid() {
    boxes.forEach((box) => {
        box.style.outline = "black solid 1px";
    });
    gridActive = true;
}

function addPen() {
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "black";
        });
    });
}

let boxes = document.querySelectorAll(".box");

createGrid(gridSize);

gridBtn.addEventListener("click", () => {
    while (true) {
        let gridSize = prompt("Enter Grid Size (1-100): ");
        if (gridSize === null || gridSize === "") {
            return;
        }
        else if (gridSize > 100 || gridSize < 1) {
            alert("Grid Size: 1-100");
        } else if (isNaN(gridSize)) {
            alert("Must be a positive number")
        }
        else {
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild);
            }
            createGrid(gridSize);
            return;
        }
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

penBtn.addEventListener("click", () => {
    addPen();
});

eraserBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = "white";
        });
    });
});

clearBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = "White";
    })
})




