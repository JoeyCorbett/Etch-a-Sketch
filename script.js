const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    for (let i = 0; i < 16; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.width = "15px";
        div.style.height = "15px";
        container.appendChild(div);
    }
}