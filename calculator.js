const add = function (a, b) {
    return a + b;
}
const subtract = function (a, b) {
    return a - b;
}
const multiply = function (a, b) {
    return a * b;
}
const divide = function (a, b) {
    return a / b;
}

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
}