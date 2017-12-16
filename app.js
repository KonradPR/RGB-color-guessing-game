var numberOfBoxes = 9;
var colors = [];
var pickedColor;
var boxes = document.querySelectorAll(".colorBox");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var mBtns = document.querySelectorAll(".mode");

start();
// function starting the game
function start() {
    setMBtns();
    setBoxes();
    reset();
}
//reseting colors and state of the game
function reset() {
    colors = generateColors(numberOfBoxes);
    pickedColor = colors[randomNum(colors.length)];
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.display = "block";
            boxes[i].style.backgroundColor = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    message.textContent = "";
}

//setting evetn listener for reset button
resetButton.addEventListener("click", function () {
    reset();
});
//preparing mode buttons
function setMBtns() {
    for (var i = 0; i < mBtns.length; i++) {
        mBtns[i].addEventListener("click", function () {
            mBtns[0].classList.remove("selected");
            mBtns[1].classList.remove("selected");
            mBtns[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numberOfBoxes = 3;
            } else if(this.textContent === "Medium") {
                numberOfBoxes = 6;
            }else{
                numberOfBoxes = 9;
            }
            reset();

        });
    }
}
//preparing colorBoxes for game
function setBoxes() {
    for (var i = 0; i < boxes.length; i++) {

        //event listeners
        boxes[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?";
                message.textContent = "Correct!";
            } else {
                this.style.backgroundColor = "rgb(50,50,50)";
                message.textContent = "Try Again"
            }
        });

    }
}

//changes the colors of all colorBoxes to color
const changeColors = function (color) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = color;
    }
}
//generates a random number from 0 to a
function randomNum(a) {
    return Math.floor(Math.random() * a);
}
//creating array of random colors
function generateColors(a) {
    //make an array
    var arr = [];
    //add random colors to array
    for (var i = 0; i < a; i++) {
        arr.push(randColor());
    }
    //return array
    return arr;
}
//generating randomColor
function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}