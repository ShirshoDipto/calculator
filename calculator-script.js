
// Global variables.
let num1 = '';
let num2 = '';
let operator = '';




const disp = document.querySelector('.display');
const resultDisplay = document.querySelector('.resultDisplay');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const negVal = document.querySelector('.neg-val');
const dot = document.querySelector('.dot');
const equals = document.querySelector('.equals');


numbers.forEach(number => {
    number.addEventListener('click', displayStoreNumber);
});

operators.forEach(oper => {
    oper.addEventListener('click', displayStoreOperator);
});


clear.addEventListener('click', clearEverything);
del.addEventListener('click', backspace);
negVal.addEventListener('click', insertNegative);
dot.addEventListener('click', addDecimal);
equals.addEventListener('click', pressEquals);


function addDecimalhelper(num) {
    if (num === '') {
        return '0.'
    }
    else if (!checkString(num, '.')) {
        return '.';
    }
    else {
        return '';
    }
}


function addDecimal(e) {
    if (operator === '') {
        let decimal = addDecimalhelper(num1); 
        disp.textContent += decimal;
        num1 += decimal;
    }
    else {
        let decimal = addDecimalhelper(num2); 
        disp.textContent += decimal;
        num2 += decimal;
    }
}



function backspace(e) {
    disp.textContent = disp.textContent.slice(0, disp.textContent.length - 1);
    if (num2 !== '') {
        num2 = num2.slice(0, num2.length - 1);
    }
    else if (operator !== '') {
        operator = operator.slice(0, operator.length - 1);
    }
    else if (num1 !== '') {
        num1 = num1.slice(0, num1.length - 1);
    }

    console.log(`num1: ${num1} operator: ${operator} num2: ${num2}`);
}


function insertNegative(e) {
    if (num1 === '') {
        num1 += ' -';
        disp.textContent += ' -';
    }
    else if (num2 === '' && operator !== '') {
        num2 += ' -';
        disp.textContent += ' -';
    }
}


function displayStoreNumber(e) {
    const string = e.target.textContent;
    // console.log(string);
    if (operator === '') {
        if (num1 === '' && string === '0') {
            return;
        }
        num1 += string;
        disp.textContent += string;
    }
    else {
        if (num2 === '' && string === '0') {
            return;
        }
        num2 += string;
        disp.textContent += string;
    }
}


function displayStoreOperator(e) {
    if (num1 !== '' && operator === '') {
        operator = e.target.textContent;
        disp.textContent += operator;
    }
    else if (num1 !== '' && operator !== '' && num2 !== '') {
        let x = operate(operator, num1, num2);
        x = x.toString();
        resultDisplay.textContent = x;
        num1 = x;
        num2 = '';
        operator = e.target.textContent;
        disp.textContent = x+operator;
    }
}


function pressEquals() {
    if (num1 !== '' && operator !== '' && num2 !== '') {
        let x = operate(operator, num1, num2);
        x = x.toString();
        resultDisplay.textContent = x;
        num1 = x;
        num2 = '';
        operator = '';
        disp.textContent = x;
    }
}


function clearEverything() {
    disp.textContent = '';
    resultDisplay.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
}


function operate(operator, num1, num2) {
    if (operator === '+') {
        return parseFloat(num1) + parseFloat(num2);
    }
    else if (operator === '-') {
        return parseFloat(num1) - parseFloat(num2);
    }
    else if (operator === '*') {
        return parseFloat(num1) * parseFloat(num2);
    }
    else if (operator === '/') {
        if (parseFloat(num2) === 0) {
            return 'Math Error!';
        }
        return parseFloat(num1) / parseFloat(num2);
    }
}


function checkString(string, char) {
    if (string.indexOf(char) !== -1) {
        return true;
    }
    return false;
}


// console.log(checkString('', 'k'));







