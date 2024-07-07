// script.js
const currentScreen = document.getElementById('currentOperationScreen');
const lastScreen = document.getElementById('lastOperationScreen');

let currentInput = '0';
let lastInput = '';
let operator = '';

function updateScreen() {
    currentScreen.textContent = currentInput;
    lastScreen.textContent = lastInput + (operator ? ' ' + operator : '');
}

function handleButtonClick(value) {
    if (value === 'C') {
        currentInput = '0';
        lastInput = '';
        operator = '';
    } else if (value === '=') {
        // Perform calculation based on operator
        // Update currentInput and lastInput
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
        lastInput = '';
        operator = '';
    } else if (value === '.') {
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
    } else if (value === 'del') {
        if (currentInput !== '0') {
            currentInput = currentInput.substring(0, currentInput.length - 1);
        }
// Commenting after testing a two liner to replace this code.
// } else if (value === 'x') {
//     currentInput += '*';
// } else if (value === '/') {
//     currentInput += '/';
// } else if (value === '-') {
//     currentInput += '-';
// } else if (value === '+') {
//     currentInput += '+';
// } else if (value === '0') {
//     currentInput += '0';
// } else if (value === '1') {
//     currentInput += '1';
// } else if (value === '2') {
//     currentInput += '2';
// } else if (value === '3') {
//     currentInput += '3';
// } else if (value === '4') {
//     currentInput += '4';
// } else if (value === '5') {
//     currentInput += '5';
// } else if (value === '6') {
//     currentInput += '6';
// } else if (value === '7') {
//     currentInput += '7';
// } else if (value === '8') {
//     currentInput += '8';
// } else if (value === '9') {
//     currentInput += '9';
//
    } else {
        currentInput = currentInput === '0' ? value : currentInput + value;
    }
    updateScreen();
}

// Add event listeners to your calculator buttons
// Example: document.getElementById('button1').addEventListener('click', () => handleButtonClick('1'));
document.getElementById('button1').addEventListener('click', () => handleButtonClick('1',updateScreen));
document.getElementById('button2').addEventListener('click', () => handleButtonClick('2'));
document.getElementById('button3').addEventListener('click', () => handleButtonClick('3'));
document.getElementById('button4').addEventListener('click', () => handleButtonClick('4'));
document.getElementById('button5').addEventListener('click', () => handleButtonClick('5'));
document.getElementById('button6').addEventListener('click', () => handleButtonClick('6'));
document.getElementById('button7').addEventListener('click', () => handleButtonClick('7'));
document.getElementById('button8').addEventListener('click', () => handleButtonClick('8'));
document.getElementById('button9').addEventListener('click', () => handleButtonClick('9'));
document.getElementById('button0').addEventListener('click', () => handleButtonClick('0'));
document.getElementById('button_add').addEventListener('click', () => handleButtonClick('+'));
document.getElementById('button_minus').addEventListener('click', () => handleButtonClick('-'));
document.getElementById('button_mult').addEventListener('click', () => handleButtonClick('*'));
document.getElementById('button_point').addEventListener('click', () => handleButtonClick('.'));
document.getElementById('button_div').addEventListener('click', () => handleButtonClick('/'));
// Below are special case handle cases and need to look into these separately
//document.getElementById('button_eq').addEventListener('click', () => handleButtonClick('eval the str fields created (Should end with a number)'));
//document.getElementById('button_reset').addEventListener('click', () => handleButtonClick('<clear the field>'));
//document.getElementById('button_del').addEventListener('click', () => handleButtonClick('remove last element of the str shown in the field'));
document.getElementById('button_eq').addEventListener('click', () => handleButtonClick('='));
document.getElementById('button_reset').addEventListener('click', () => handleButtonClick('C'));
document.getElementById('button_del').addEventListener('click', () => handleButtonClick('del'));