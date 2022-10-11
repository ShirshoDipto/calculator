
// Global variables.
let num1 = '';
let num2 = '';
let operator = '';




const disp = document.querySelector('.display');
const resultDisplay = document.querySelector('.resultDisplay');

const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const negVal = document.querySelector('.neg-val');
const dot = document.querySelector('.dot');
const equals = document.querySelector('.equals');



numbers.forEach(number => {
    number.addEventListener('click', () => {
        displayStoreNumber(number);
    });
});

operators.forEach(oper => {
    oper.addEventListener('click', () => {
        displayStoreOperator(oper);
    });
});



clear.addEventListener('click', clearEverything);
del.addEventListener('click', backspace);
negVal.addEventListener('click', insertNegative);
dot.addEventListener('click', addDecimal);
equals.addEventListener('click', pressEquals);

const allButtons = Array.from(document.querySelectorAll('.butt'));
allButtons.forEach(key => key.addEventListener('click', addClass));
allButtons.forEach(key => key.addEventListener('transitionend', removeTransition));



window.addEventListener('keydown', runProperFunction);


function runProperFunction(e) {
    console.log(e);
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (!key) return;

    key.classList.add('transform');

    if (numbers.includes(key)) {
        displayStoreNumber(key);
    }
    else if (operators.includes(key)) {
        displayStoreOperator(key);
    }
    else if (key === clear) {
        clearEverything();
    }
    else if (key === del) {
        backspace();
    }
    else if (key === negVal) {
        insertNegative();
    }
    else if (key === dot) {
        addDecimal();
    }
    else if (key === equals) {
        pressEquals();
    }
}


function addClass(e) {
    e.target.classList.add('transform');
}

function removeTransition(e) {
    e.target.classList.remove('transform');
}


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


function addDecimal() {
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



function backspace() {
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
}


function insertNegative() {
    if (num1 === '') {
        num1 += ' -';
        disp.textContent += ' -';
    }
    else if (num2 === '' && operator !== '') {
        num2 += ' -';
        disp.textContent += ' -';
    }
}


function displayStoreNumber(numberDom) {
    const string = numberDom.textContent;
    if (operator === '') {
        if (num1 === '' && string === '0') {
            return;
        }
        else if (num1.length < 12) {
            num1 += string;
            disp.textContent += string;
        }
    }
    else {
        if (num2 === '' && string === '0') {
            return;
        }
        else if (num2.length < 12) {
            num2 += string;
            disp.textContent += string;
        }
    }
}


function displayStoreOperator(operatorDom) {
    if (num1 !== '' && operator === '') {
        operator = operatorDom.textContent;
        disp.textContent += operator;
    }
    else if (num1 !== '' && operator !== '' && num2 !== '') {
        let x = operate(operator, num1, num2);
        x = x.toString();
        resultDisplay.textContent = x;
        num1 = x;
        num2 = '';
        operator = operatorDom.textContent;
        disp.textContent = x+operator;
    }
}


function pressEquals() {
    if (num1 !== '' && operator !== '' && num2 !== '') {
        let x = operate(operator, num1, num2); // 2.000000012121212
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
    resultDisplay.textContent = '0';
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
    else if (operator === 'x') {
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






