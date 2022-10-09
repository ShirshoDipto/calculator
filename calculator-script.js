

const disp = document.querySelector('.display');
const resultDisplay = document.querySelector('.resultDisplay');
// console.log(resultDisplay);
let mainDisplay = disp.textContent;
const buttons = document.querySelectorAll('button');
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const operatorList = ['+', '-', '*', '/'];


let num1 = '';
let num2 = '';
let operator = '';


function operate(operator, num1, num2) {
    if (operator === '+') {
        return parseInt(num1) + parseInt(num2);
    }
    else if (operator === '-') {
        return parseInt(num1) - parseInt(num2);
    }
    else if (operator === '*') {
        return parseInt(num1) * parseInt(num2);
    }
    else if (operator === '/') {
        if (parseInt(num2) === 0) {
            return "Math Error!"
        }
        else {
            return parseInt(num1) / num2;
        }
    }
}

// function getFirstNumber()

// test for 'operate'.
// let x = operate('minus', 2, 3);
// console.log(x);
// x = operate('add', 3.2, 2);
// console.log(x);
// x = operate('divide', 3, 0);
// console.log(x);
// x = operate('multi', 3, 0);
// console.log(x);




// console.log(mainDisplay);



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
        return true
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
    if (!isOperatorPresent(mainDisplay)) {
        if (isEmpty(mainDisplay) && string === '0') {
            return;
        }
        else if (isEmpty(mainDisplay) && isStringOperator(string)) {
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
            mainDisplay += string;
            disp.textContent += string;
        }
    }
    else {
        if (isStringNumber(string)) {
            if (isEmpty(num2) && string === '0') {
                return;
            }
            else {
                num2 += string;
                mainDisplay += string;
                disp.textContent += string;
            }
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
        }
    }
    else {
        storeAndDisplay(e.target.textContent); // let's say '2'
    }
}



buttons.forEach(button => {
    // console.log(button);
    button.addEventListener('click', display);
});
