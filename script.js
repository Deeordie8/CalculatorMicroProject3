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
    } else {
        currentInput = currentInput === '0' ? value : currentInput + value;
    }
    updateScreen();
}

// Add event listeners to your calculator buttons
// Example: document.getElementById('button1').addEventListener('click', () => handleButtonClick('1'));