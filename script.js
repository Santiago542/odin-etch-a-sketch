function createGrid(size) {
    const container = document.querySelector(".container");
    const computedStyle = window.getComputedStyle(container);
    const squareSize = (parseInt(computedStyle.width) - parseInt(computedStyle.padding) * 2 - parseInt(computedStyle.borderWidth) * 2) / size;

    container.innerHTML = "";

    for(let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        let opacity = 0.1;
        
        square.classList.add("squares");
        square.style.cssText = `width: ${squareSize}px; height: ${squareSize}px`;
        square.addEventListener("mouseenter", (event) => {
            if(!isMouseDown) {
                return;
            }
            
            square.style.backgroundColor = randomColor ? createRandomColor(): colorPickerButton.value;
            square.style.opacity = opacityMode ? opacity: 1;
            opacity += 0.1;
        });
        container.appendChild(square);
    }
}

function createRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

createGrid(16);

const container = document.querySelector(".container");
const resizeButton = document.querySelector("#resize-button");
const colorPickerButton = document.querySelector("#color-picker");
const rainbowButton = document.querySelector("#rainbow-button");
const opacityButton = document.querySelector("#opacity-button");
const clearButton = document.querySelector("#clear-button");
let randomColor = false;
let opacityMode = false;
let isMouseDown = false;

container.addEventListener("mousedown", () => isMouseDown = true);
container.addEventListener("mouseup", () => isMouseDown = false);

document.addEventListener('dragstart', function(event) {
    event.preventDefault();
});

resizeButton.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter new grid size between 16 and 100: "));
    while(newSize < 4 || newSize > 100) {
        newSize = parseInt(prompt("The new grid size must be between 16 and 100: "));
    }

    if(isNaN(newSize)) {
        newSize = 16;
    }

    createGrid(newSize);
});

clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".squares");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
        square.style.opacity = 1;
    });
});

rainbowButton.addEventListener("click", () => {
    rainbowButton.style.backgroundColor = "lightgray";
    
    if(randomColor === false) {
        randomColor = true;
    } else {
        rainbowButton.style.backgroundColor = "white";
        randomColor = false;
    }
});

opacityButton.addEventListener("click", () => {
    opacityButton.style.backgroundColor = "lightgray";
    
    if(opacityMode === false) {
        opacityMode = true;
    } else {
        opacityButton.style.backgroundColor = "white";
        opacityMode = false;
    }
});