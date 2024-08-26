function createGrid(size) {
    const container = document.querySelector(".container");

    for(let i = 0; i < size; i++) {
        const div = document.createElement("div");
        div.textContent = i;
        div.style.cssText = "border: 3px solid black; width: 200px; height: 200px";
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        })
        container.appendChild(div);
        }
}

for(let i = 0; i < 16; i++) {
    
}

const resizeButton = document.querySelector("#resize");

resizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new size between 16 and 100: "));
    while(newSize < 16 || newSize > 100) {
        newSize = parseInt(prompt("The new grid size must be between 16 and 100: "));
    }

    createGrid(newSize);
});