const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = "25px";
        div.style.height = "25px";
        div.classList.add("box")
        container.appendChild(div);
    }
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = "black";
    });
});