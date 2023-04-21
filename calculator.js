let register = "";
let inputA = "";
let inputB = "";
let operator = "";
let result = "";

const operate = function (a, b, operator) {
    switch (operator) {
        case '+':
            return parseFloat(a) + parseFloat(b);
        case '-':
            return parseFloat(a) - parseFloat(b);
        case '×':
            return parseFloat(a) * parseFloat(b);
        case '÷':
            return parseFloat(a) / parseFloat(b);
    }
};

const clear = function () {
    register = "0";
    result = "";
}

const clearAll = function () {
    register = "";
    inputA = "";
    inputB = "";
    operator = "";
}

const updateScreen = function (...args) {
    screen.textContent = args[0];
    subScreen.textContent = args[1];
}

const mainCalc = function (button) {
    if (button.classList.contains("number")) {
        if (register === "") {
            register = button.textContent;
            updateScreen(register);
        } else if (result !== "") {
            clear();
            register = button.textContent;
            updateScreen("0", register);

        } else {
            register += button.textContent;
            updateScreen(register);
        }
    } else if (button.classList.contains("dot")) {
        if (screen.textContent.includes(".")) {

        } else {
            register += "."
        }
    } else if (button.classList.contains("clear")) {
        clear();
        updateScreen(inputA);
    } else if (button.classList.contains("allclear")) {
        clearAll();
        updateScreen("0");
    } else if (button.classList.contains("operator")) {
        if (inputA === "") {
            inputA = register; 
            register = "";
            operator = button.textContent;
        } else {
            inputB = register;
            register = "";
            inputA = operate(inputA, inputB, operator);
            screen.textContent = inputA;
            operator = button.textContent;
        }
    } else if (button.classList.contains("equals")) {
        inputB = register;
        result = operate(inputA, inputB, operator);
        inputA = "";
        inputB = "";
        screen.textContent = result;
    }
};

const screen = document.body.querySelector("#digits");
const subScreen = document.body.querySelector("#sub-digits");
const buttons = document.body.querySelectorAll(".button");

screen.textContent = 0;

/* buttons.forEach((button) => {
    button.addEventListener('click', () => {
        mainCalc(button);
    })
}); */

const BUTTONS = document.body.querySelector("#buttons");

function clickedWhat(e) {
    console.log(`you clicked on: ${e.target.id}\n`);
    console.log(e);
    mainCalc(e.target);
};

BUTTONS.addEventListener('click', clickedWhat);

// Is it possible to have multiple Event Listeners and split up the mainCalc() code that way?
// Event Listener groups?
// - numbers
// - operators
// - clear / all clear