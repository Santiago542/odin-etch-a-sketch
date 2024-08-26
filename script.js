function createGrid(size) {
    const container = document.querySelector(".container");
    const computedStyle = window.getComputedStyle(container);
    const squareSize = (parseInt(computedStyle.width) - parseInt(computedStyle.padding) * 2 - parseInt(computedStyle.borderWidth) * 2) / size;
    
    container.innerHTML = "";

    for(let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.cssText = `border: 1px solid black; width: ${squareSize}px; height: ${squareSize}px`;
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = colorPickerButton.value;
        });
        container.appendChild(div);
    }
}

createGrid(16);

const resizeButton = document.querySelector("#resize-botton");
const colorPickerButton = document.querySelector("#color-picker");

resizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size between 16 and 100: "));
    while(newSize < 4 || newSize > 100) {
        newSize = parseInt(prompt("The new grid size must be between 16 and 100: "));
    }

    createGrid(newSize);
});