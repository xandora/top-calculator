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

const updateScreen = function (...args) {
    screen.textContent = args[0];
    // subScreen.textContent = args[1];
}

const mainCalcSwitch = function (event, actionType) {
    switch (actionType) {

        case "number":
            if (register === "") {
                updateScreen(register = event.target.textContent);
            } else if (result !== "") {
                result = "";
                updateScreen(register = event.target.textContent);
            } else {
                updateScreen(register += event.target.textContent);
            };
            break;

        case "dot":
            if (!screen.textContent.includes(".")) {
                updateScreen(register += ".");
            };
            break;

        case "clear":
            result = "";
            register = "";
            break;

        case "allclear":
            register = "";
            inputA = "";
            inputB = "";
            operator = "";
            updateScreen("0");
            break;

        case "operator":
            if (inputA == "") { 
                inputA = register;
                operator = event.target.textContent;
            } else {
                inputB = register;
                inputA = operate(inputA, inputB, operator);
                updateScreen(inputA);
                operator = event.target.textContent;
            };
            register = "";
            break;

        case "equals":
            if (inputA == "") {
                updateScreen(register);
                break;
            }
            inputB = register;
            result = operate(inputA, inputB, operator);
            updateScreen(result);
            inputA = result;
            break;
        default:
            break;
    }
}

/* const mainCalc = function (button) {
    if (button.classList.contains("number")) {
        if (register === "") {
            register = button.target.textContent;
            updateScreen(register);
        } else if (result !== "") {
            clear();
            register = button.target.textContent;
            updateScreen("0", register);

        } else {
            register += button.target.textContent;
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
            operator = button.target.textContent;
        } else {
            inputB = register;
            register = "";
            inputA = operate(inputA, inputB, operator);
            screen.textContent = inputA;
            operator = button.target.textContent;
        }
    } else if (button.classList.contains("equals")) {
        inputB = register;
        result = operate(inputA, inputB, operator);
        inputA = "";
        inputB = "";
        screen.textContent = result;
    }
};
 */

const screen = document.body.querySelector("#digits");
const subScreen = document.body.querySelector("#sub-digits");
const buttons = document.body.querySelectorAll(".button");

updateScreen(0);

/* buttons.forEach((button) => {
    button.addEventListener('click', () => {
        mainCalc(button);
    })
}); */

//const BUTTONS = document.body.querySelector("#buttons");
const actionTypes = ['number', 'operator', 'dot', 'equals', 'clear', 'allclear']

function clickedWhat(e) {
    const actionType = [...e.target.classList]
    .find( (className) =>  actionTypes.includes(className));
    mainCalcSwitch(e, actionType);
};

document.body.addEventListener('click', clickedWhat);

// Is it possible to have multiple Event Listeners and split up the mainCalc() code that way?
// Event Listener groups?
// - numbers
// - operators
// - clear / all clear