const container = document.querySelector(".grid-container");
const gridBtn = document.querySelector(".gridBtn");
const sizeTag = document.querySelector(".size-tag");
const toggleSlider = document.querySelector(".grid-toggle input");
const rgbBtn = document.querySelector(".rgbBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const clearBtn = document.querySelector(".clearGrid");
const drawButtons = document.querySelectorAll("#drawTools");
const colorBtn = document.querySelector(".colorBtn")

let value = "black";

let gridActive = false;
let penActive = false;
let firstVisit = true;

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
    removeSelected();
    penAdd(value);
}

function addGrid() {
    boxes.forEach((box) => {
        box.style.outline = "black solid 1px";
    });
    gridActive = true;
}

function randomize() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

function removeSelected() {
    drawButtons.forEach((btn) => btn.classList.remove('selected'));
}

function penAdd(value) {
    if (firstVisit) {
        value = "black";
        colorBtn.style.backgroundColor = value;
    } 
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = value;
        });
    });
    firstVisit = false;
    window.value = colorBtn.value;
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


rgbBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            let randomColor = randomize();
            box.style.backgroundColor = "#" + randomColor;
        });
    });
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
    });
});

drawButtons.forEach((button) => {
    button.addEventListener("click", () => {
        drawButtons.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

colorBtn.addEventListener("change", () => {
    removeSelected();
    colorBtn.style.backgroundColor = colorBtn.value;
    penAdd(colorBtn.value);
});




