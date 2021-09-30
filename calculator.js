let register = "";
let inputA = "";
let inputB = "";
let operator = "";

const add = function (a, b) {
    return a + b;
};
const subtract = function (a, b) {
    return a - b;
};
const multiply = function (a, b) {
    return a * b;
};
const divide = function (a, b) {
    return a / b;
};

const operate = function (a, b, operator) {
    switch(operator) {
        case '+':
            screen.textContent = add(a, b);
            break;
        case '-':
            screen.textContent = subtract(a, b);
            break;
        case '*':
            screen.textContent = multiply(a, b);
            break;
        case '/':
            screen.textContent = divide(a, b);
            break;
    }
};

const updateScreen = function(button) {
    if(button.classList.contains("number")) {
        if(screen.textContent == "0"){
            screen.textContent = button.textContent;
        }
        else if(inputB != "") {
            screen.textContent = button.textContent;
            inputA = "";
            inputB = "";
            operator = "";
        }
        else {
            screen.textContent += button.textContent;
        }
    }
    else if(button.classList.contains("dot")) {
        if(screen.textContent.includes(".")){

        }
        else {
            screen.textContent += "."
        }
    }
    else if(button.classList.contains("operator")) {
        register = screen.textContent;
        operator = button.textContent;
        screen.textContent = "";
    }
    else if(button.classList.contains("equals")) {
        inputA = register;
        inputB = screen.textContent;
        operate(parseFloat(inputA), parseFloat(inputB), operator);
    }
};

const screen = document.body.querySelector("#display");
const buttons = document.body.querySelectorAll(".button");

screen.textContent = 0;

buttons.forEach((button) => {  
    button.addEventListener('click', () => {
        updateScreen(button);
    })
});