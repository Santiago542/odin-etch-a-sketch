function createGrid(size) {
    const container = document.querySelector(".container");
    const computedStyle = window.getComputedStyle(container);
    const squareSize = (parseInt(computedStyle.width) - parseInt(computedStyle.padding) * 2 - parseInt(computedStyle.borderWidth) * 2) / size;
    
    container.innerHTML = "";

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("squares");
        square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = colorPickerButton.value;
        });
        container.appendChild(square);
    }
}

createGrid(16);

const resizeButton = document.querySelector("#resize-button");
const colorPickerButton = document.querySelector("#color-picker");
const clearButton = document.querySelector("#clear-button");

resizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size between 16 and 100: "));
    while(newSize < 4 || newSize > 100) {
        newSize = parseInt(prompt("The new grid size must be between 16 and 100: "));
    }

    createGrid(newSize);
});

clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});