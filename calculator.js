let register = "";
let inputA = "";
let inputB = "";
let operator = "";
let result = "";

const add = function (a, b) {
    return parseFloat(a) + parseFloat(b);
};
const subtract = function (a, b) {
    return parseFloat(a) - parseFloat(b);
};
const multiply = function (a, b) {
    return parseFloat(a) * parseFloat(b);
};
const divide = function (a, b) {
    return parseFloat(a) / parseFloat(b);
};

const operate = function (a, b, operator) {
    switch(operator) {
        case '+':
            return add(a, b);
            break;
        case '-':
            return subtract(a, b);
            break;
        case '*':
            return multiply(a, b);
            break;
        case '/':
            return divide(a, b);
            break;
    }
};

const clear = function() {
    register = "";
    result = "";
}

const clearAll = function() {
    register = "";
    inputA = "";
    inputB = "";
    operator = "";
}

const updateScreen = function(value) {
    screen.textContent = value;
}

const mainCalc = function(button) {
    if(button.classList.contains("number")) {
        if(register == ""){
            register = button.textContent;
            updateScreen(register);
        }
        else if(result != "") {
            clear();
            register = button.textContent;
            updateScreen(register);
            
        }
        else {
            register += button.textContent;
            updateScreen(register);
        }
    }
    else if(button.classList.contains("dot")) {
        if(screen.textContent.includes(".")){

        }
        else {
            register += "."
        }
    }
    else if(button.classList.contains("clear")) {
        clear();
        updateScreen(inputA);
    }
    else if(button.classList.contains("allclear")) {
        clearAll();
        updateScreen("0");
    }
    else if(button.classList.contains("operator")) {
        if(inputA == "") {
            inputA = register;
            register = "";
            operator = button.textContent;
        }
        else { 
            inputB = register;
            register = "";
            inputA = operate(inputA, inputB, operator);
            screen.textContent = inputA;
            operator = button.textContent;
        }
    }
    else if(button.classList.contains("equals")) {
        inputB = register;
        result = operate(inputA, inputB, operator);
        inputA = "";
        inputB = "";
        screen.textContent = result;
    }
};

const screen = document.body.querySelector("#display");
const buttons = document.body.querySelectorAll(".button");

screen.textContent = 0;

buttons.forEach((button) => {  
    button.addEventListener('click', () => {
        mainCalc(button);
    })
});