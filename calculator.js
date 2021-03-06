let register = "";
let inputA = "";
let inputB = "0";
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

const clear = function() {
    inputA = "";
    inputB = "";
    operator = "";
}

const clearAll = function() {
    register = "";
    inputA = "";
    inputB = "";
    operator = "";
}

const updateScreen = function(button) {
    if(button.classList.contains("number")) {
        if(screen.textContent == "0" || ["*","/","+","-"].indexOf(screen.textContent) !== -1){
            screen.textContent = button.textContent;
        }
        else if(inputB != "") {
            screen.textContent = button.textContent;
            clear();
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
        inputA = screen.textContent;
        operator = button.textContent;
        screen.textContent = operator;
    }
    else if(button.classList.contains("equals")) {
        //inputA = register;
        inputB = screen.textContent;
        operate(parseFloat(inputA), parseFloat(inputB), operator);
    }
};

const clearScreen = function() {
    screen.textContent = "";
    inputA = "";
    inputB = "0";
    operator = "";
}

const screen = document.body.querySelector("#display");
const buttons = document.body.querySelectorAll(".button");

screen.textContent = 0;

buttons.forEach((button) => {  
    button.addEventListener('click', () => {
        updateScreen(button);
    })
});