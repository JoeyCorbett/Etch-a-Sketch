const container = document.querySelector(".grid-container");
const gridSlider = document.querySelector(".slider-grid");
const sizeTag = document.querySelector(".size-tag");
const toggleSlider = document.querySelector(".grid-toggle input");
const rgbBtn = document.querySelector(".rgbBtn");
const eraserBtn = document.querySelector(".eraserBtn");
const clearBtn = document.querySelector(".clearGrid");
const drawButtons = document.querySelectorAll("#drawTools");
const colorBtn = document.querySelector(".colorBtn")

let value;

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
        colorBtn.style.color = value;
    } 
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = value;
        });
    });
    firstVisit = false;
}

let boxes = document.querySelectorAll(".box");

createGrid(gridSize);

gridSlider.addEventListener("input", () => {
    let v = gridSlider.value;
    sizeTag.textContent = `${v} X ${v}`;
});

gridSlider.addEventListener("change", () => {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    createGrid(gridSlider.value);
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
    value = colorBtn.value;
    penAdd(colorBtn.value);
});




