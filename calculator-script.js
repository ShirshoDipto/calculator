

let num1 = '2';
let num2 = '5';
let operator = '-';




const disp = document.querySelector('.display');
const resultDisplay = document.querySelector('.resultDisplay');
let mainDisplay = disp.textContent;
// const buttons = document.querySelectorAll('button');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const negVal = document.querySelector('.neg-val');
const dot = document.querySelector('.dot');
const equals = document.querySelector('.equals');
console.log(numbers);
// const numbers = ['0','1','2','3','4','5','6','7','8','9'];
// const operatorList = ['+', '-', '*', '/'];


numbers.forEach(number => {
    // button.addEventListener('click', displaytoreNumber);
});

operators.forEach(oper => {
    button.addEventListener('click', displaytoreOperator);
});


clear.addEventListener('click', clearEverything);
// del.addEventListener('click', backspace);
// negVal.addEventListener('click', insertNegative);
// dot.addEventListener('click', addDecimal);
equals.addEventListener('click', pressEquals);


function pressEquals() {
    if (num1 !== '' && operator !== '' && num2 !== '') {
        let x = operate(operator, num1, num2);
        x = x.toString();
        resultDisplay.textContent = x;
        num1 = x;
        num2 = '';
        mainDisplay = x;
        disp.textContent = x;
        operator = '';
    }
    console.log(`${num1} ${operator} ${num2}`);
}






function operate(operator, num1, num2) {
    if (operator === '+') {
        if (checkDecimal(num1) || checkDecimal(num2)) {
            return parseFloat(num1) + parseFloat(num2);
        }
        return parseInt(num1) + parseInt(num2);
    }
    else if (operator === '-') {
        if (checkDecimal(num1) || checkDecimal(num2)) {
            return parseFloat(num1) - parseFloat(num2);
        }
        return parseInt(num1) - parseInt(num2);
    }
    else if (operator === '*') {
        if (checkDecimal(num1) || checkDecimal(num2)) {
            return parseFloat(num1) * parseFloat(num2);
        }
        return parseInt(num1) * parseInt(num2);
    }
    else if (operator === '/') {
        if (checkDecimal(num1) || checkDecimal(num2)) {
            if (parseFloat(num2) === 0) {
                return 'Math Error!';
            }
            return parseFloat(num1) / parseFloat(num2);
        }
        else {
            if (parseInt(num2 === 0)) {
                return 'Math Error!';
            }
            return parseInt(num1) / parseInt(num2);
        }
    }
}


// test for 'operate'.
// let x = operate('-', 2, 3);
// console.log(x);
// x = operate('+', 3.2, 2);
// console.log(x);
// x = operate('/', 3, 0);
// console.log(x);
// x = operate('*', 3, 0);
// console.log(x);

// 22+12.5
// console.log(operate('+', '22', '12.5'));

// 0/123
// console.log(operate('/', '0', '123'));

// 0.00/123
// console.log(operate('/', '0.00', '123'));

// 12.22/0
// console.log(operate('/', '12.22', '0'));

// 12.22/00.00
// console.log(operate('/', '12.22', '00.00'));

// 20*2.69
// console.log(operate('*', '20', '2.69'));

// 2.5 - 3.5
// console.log(operate('-', '2.5', '3.5'));

// 12 * 13
// console.log(operate('*', '0', '13'));

// 8/5
// console.log(operate('/', '8', '5'))





// console.log(mainDisplay);



function checkDecimal(string) {
    if (string.indexOf('.') !== -1) {
        return true;
    }
    return false;
}


// tests for decimal check.
// console.log(checkDecimal('.012'));
// console.log(checkDecimal('23.08'));
// console.log(checkDecimal('23.08'));
// console.log(checkDecimal('23'));
// console.log(checkDecimal(''));
// console.log(checkDecimal('2.0000'));
// console.log(checkDecimal('.000'));
// console.log(checkDecimal('2888.000'));
// console.log(checkDecimal('55.000'));


function isOperatorPresent(string) {
    for (let char of string) {
        for (let key of operatorList) {
            if (char === key) {
                return true;
            }
        }
    }
    return false;
}


//test for isOperatorPresent(string)
// let x = 'hello world'
// console.log(isOperatorPresent('23+'));
// console.log(isOperatorPresent('23/'));
// console.log(isOperatorPresent('23-'));
// console.log(isOperatorPresent('2*'));
// console.log(isOperatorPresent(''));
// console.log(isOperatorPresent('23+21'));
// console.log(isOperatorPresent('+'));
// console.log(isOperatorPresent('23'));


function isEmpty(theString) {
    for (let key of theString) {
      // if the loop has started, there is a property
      return false;
    }
    return true;
  }

// test for isEmpty()
// console.log(isEmpty());


function isStringNumber(string) {
    if (numbers.find(x => x === string)) {
        return true;
    }
    else {
        return false;
    }
}

// tests for isStringNumber(string)
// console.log(isStringNumber('j'));
// console.log(isStringNumber('2'));
// console.log(isStringNumber('0'));
// console.log(isStringNumber('/'));
// console.log(isStringNumber('+'));


function isStringOperator(string) {
    for (let x of operatorList) {
        if (x === string) {
            return true
        }
    }
    return false;
}

// tests for isStringOperator(string)
// console.log(isStringOperator('j'));
// console.log(isStringOperator('2'));
// console.log(isStringOperator('0'));
// console.log(isStringOperator('/'));
// console.log(isStringOperator('+'));
// console.log(isStringOperator('*'));
// console.log(isStringOperator('-'));


function clearEverything() {
    disp.textContent = '';
    resultDisplay.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
    mainDisplay = '';
}


function storeAndDisplay(string) {
    if (isEmpty(operator)) {
        if (isEmpty(mainDisplay) && isStringOperator(string)) {
            return;
        }
        else if (!isEmpty(mainDisplay) && isStringOperator(string)) {
            operator = string;
            mainDisplay += string;
            disp.textContent += string;
        }
        else if (!isEmpty(resultDisplay.textContent) && isStringNumber(string)) {
            clearEverything();
            storeAndDisplay(string);
        }
        else {
            num1 += string;
            mainDisplay = num1;
            disp.textContent = num1;
        }
    }
    else {
        if (isStringNumber(string)) {
            if (num2 === ' -') {
                mainDisplay += ' -';
                disp.textContent += ' -';
            }
            num2 += string;
            mainDisplay += string;
            disp.textContent += string;
        }
    }
}


// test for storeAndDisplay(string)
// storeAndDisplay('2');
// console.log(disp.textContent);
// console.log(mainDisplay);
// console.log(num1);

// storeAndDisplay('0');
// console.log(disp.textContent);
// console.log(mainDisplay);
// console.log(num1);

// storeAndDisplay('1');
// storeAndDisplay('1');
// storeAndDisplay('+');
// storeAndDisplay('2');
// console.log(mainDisplay);
// console.log(operator);
// console.log(num1);


function display(e) {
    // console.log(e.target.textContent);
    if (e.target.textContent === 'clear') {
        clearEverything();
    }
    else if (e.target.textContent === 'del') { // have to work on it properly.
        // delete only the last char of the string inside the div display.
        let displayString = disp.textContent;
        const newString = displayString.slice(1);
        disp.textContent = newString;
    }
    else if ((e.target.textContent === '=' || isStringOperator(e.target.textContent) && num2 !== '')) {
        console.log(num1);
        console.log(num2);
        console.log(operator);
        let x = operate(operator, num1, num2);
        x = x.toString();
        resultDisplay.textContent = x;
        num1 = x;
        num2 = '';
        if (isStringOperator(e.target.textContent)) {
            operator = e.target.textContent;
            mainDisplay = x+operator;
            disp.textContent = x+operator;
        }
        else {
            mainDisplay = x;
            disp.textContent = x;
            operator = '';
        }
    }
    else if (e.target.textContent === '(-)') {
        if (isEmpty(num1)) {
            num1 += ' -';
        }
        else if (isEmpty(num2)) {
            num2 += ' -';
        }
    }
    else {
        storeAndDisplay(e.target.textContent); // let's say '2'
    }
}




