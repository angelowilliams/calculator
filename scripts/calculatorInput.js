let displayValue = 0;
let storedValue = 0;
let displayArray = [];
let currentOperator;

let displayContainer = document.getElementById('display');
let displayText = document.createElement('p');
displayText.classList.add('displayText');
displayText.textContent = displayValue;
displayContainer.appendChild(displayText);

function mouseDownBlack(buttonName) {
  buttonName.classList.add("blackButtonFlash")
}
function mouseUpBlack(buttonName) {
  buttonName.classList.remove("blackButtonFlash")
}

let numButtons = document.getElementsByClassName('numButton');
for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', (e) => {
    if (currentOperator === 'divide') {
      storedValue = displayValue;
      displayValue = 0;
      displayArray = [];
      currentOperator = 'divideReady'
    }
    else if (currentOperator === 'multiply') {
      storedValue = displayValue;
      displayValue = 0;
      displayArray = [];
      currentOperator = 'multiplyReady';
    }
    else if (currentOperator === 'subtract') {
      storedValue = displayValue;
      displayValue = 0;
      displayArray = [];
      currentOperator = 'subtractReady';
    }
    else if (currentOperator === 'add') {
      storedValue = displayValue;
      displayValue = 0;
      displayArray = [];
      currentOperator = 'addReady';
    }
    else if (currentOperator === 'equals') {
      displayValue = 0;
      displayArray = [];
      storedValue = 0;
      currentOperator = '';
    }
    displayArray.push(numButtons[i].id);
    displayValue = Number(displayArray.join(''));
    displayText.textContent = displayValue;
  });
  numButtons[i].addEventListener('mousedown', () => {
    numButtons[i].classList.add('blackButtonFlash');
  });
  numButtons[i].addEventListener('mouseup',() => {
    numButtons[i].classList.remove('blackButtonFlash');
  });
}


let clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', () => {
  storedValue = 0;
  displayValue = 0;
  currentOperator = '';
  displayArray = []
  divideButton.classList.remove("operatorClicked");
  multiplyButton.classList.remove("operatorClicked");
  minusButton.classList.remove("operatorClicked");
  plusButton.classList.remove("operatorClicked");
  displayText.textContent = displayValue;
});
clearButton.addEventListener('mousedown', () => {
  clearButton.classList.add('greyButtonFlash');
});
clearButton.addEventListener('mouseup',() => {
  clearButton.classList.remove('greyButtonFlash');
});

let negateButton = document.getElementById('negateButton');
negateButton.addEventListener('click', () => {
  if (displayArray[0] === '-') {
    displayArray.splice(0,1);
  }
  else {
    displayArray.splice(0,0,'-');
  }
  displayValue = displayValue - (displayValue * 2);
  if (displayArray[displayArray.length - 1] == '.') {
    displayText.textContent = displayValue + '.';
  }
  else {
    displayText.textContent = displayValue;
  }
  console.log(displayValue);
  console.log(displayArray);
});
negateButton.addEventListener('mousedown', () => {
  negateButton.classList.add('greyButtonFlash');
});
negateButton.addEventListener('mouseup',() => {
  negateButton.classList.remove('greyButtonFlash');
});

let percentButton = document.getElementById('percentButton');
percentButton.addEventListener('click', () => {
  displayValue = displayValue / 100;
  displayValueString = displayValue.toString();
  if ((displayArray[0] == '-' && displayArray[1] == '.' && displayArray.length == 2) ||
      (displayArray[0] == '-' && displayArray.length == 1)) {
    displayArray = ['-'];
    displayValue = 0;
  }
  else if ((displayArray[0] != '-') ||
      (displayArray[0] == '-' && displayArray.length > 1)) {
    displayArray = [];
    for (let i = 0; i < displayValueString.length; i++) {
      displayArray.push(displayValueString[i]);
    }
  }
  displayText.textContent = displayValue;
});
percentButton.addEventListener('mousedown', () => {
  percentButton.classList.add('greyButtonFlash');
});
percentButton.addEventListener('mouseup',() => {
  percentButton.classList.remove('greyButtonFlash');
});

let decimalButton = document.getElementById('decimalButton');
decimalButton.addEventListener('click', () => {
  if (currentOperator === 'divide') {
    storedValue = displayValue;
    displayValue = 0;
    displayArray = [];
    currentOperator = 'divideReady'
  }
  else if (currentOperator === 'multiply') {
    storedValue = displayValue;
    displayValue = 0;
    displayArray = [];
    currentOperator = 'multiplyReady';
  }
  else if (currentOperator === 'subtract') {
    storedValue = displayValue;
    displayValue = 0;
    displayArray = [];
    currentOperator = 'subtractReady';
  }
  else if (currentOperator === 'add') {
    storedValue = displayValue;
    displayValue = 0;
    displayArray = [];
    currentOperator = 'addReady';
  }
  else if (currentOperator === 'equals') {
    displayValue = 0;
    displayArray = [];
    storedValue = 0;
    currentOperator = '';
  }
  if (displayArray.indexOf('.') == -1) {
    displayArray.push('.');
    if (displayArray.length === 1) {
      displayValue = '.';
      displayText.textContent = '0' + displayValue;
    }
    else {
      displayValue = Number(displayArray.join(''));
      displayText.textContent = displayValue + '.';
    }
  }
});
decimalButton.addEventListener('mousedown', () => {
  decimalButton.classList.add('blackButtonFlash');
});
decimalButton.addEventListener('mouseup',() => {
  decimalButton.classList.remove('blackButtonFlash');
});

let divideButton = document.getElementById('divideButton');
divideButton.addEventListener('click', () => {
  switch(currentOperator) {
    case 'multiplyReady':
      displayValue = +multiply(storedValue, displayValue).toFixed(3);
      break;
    case 'subtractReady':
      displayValue = +subtract(storedValue, displayValue).toFixed(3);
      break;
    case 'addReady':
      displayValue = +add(storedValue, displayValue).toFixed(3);
      break;
    case 'divideReady':
      displayValue = +divide(storedValue, displayValue).toFixed(3);
      break;
  }
  currentOperator = 'divide'
  divideButton.classList.add("operatorClicked");
  multiplyButton.classList.remove("operatorClicked");
  minusButton.classList.remove("operatorClicked");
  plusButton.classList.remove("operatorClicked");
  displayText.textContent = displayValue;
});

let multiplyButton = document.getElementById('multiplyButton');
multiplyButton.addEventListener('click', () => {
  switch(currentOperator) {
    case 'multiplyReady':
      displayValue = +multiply(storedValue, displayValue).toFixed(3);
      break;
    case 'subtractReady':
      displayValue = +subtract(storedValue, displayValue).toFixed(3);
      break;
    case 'addReady':
      displayValue = +add(storedValue, displayValue).toFixed(3);
      break;
    case 'divideReady':
      displayValue = +divide(storedValue, displayValue).toFixed(3);
      break;
  }
  currentOperator = 'multiply'
  divideButton.classList.remove("operatorClicked");
  multiplyButton.classList.add("operatorClicked");
  minusButton.classList.remove("operatorClicked");
  plusButton.classList.remove("operatorClicked");
  displayText.textContent = displayValue;
});

let minusButton = document.getElementById('minusButton');
minusButton.addEventListener('click', () => {
  switch(currentOperator) {
    case 'multiplyReady':
      displayValue = +multiply(storedValue, displayValue).toFixed(3);
      break;
    case 'subtractReady':
      displayValue = +subtract(storedValue, displayValue).toFixed(3);
      break;
    case 'addReady':
      displayValue = +add(storedValue, displayValue).toFixed(3);
      break;
    case 'divideReady':
      displayValue = +divide(storedValue, displayValue).toFixed(3);
      break;
  }
  currentOperator = 'subtract'
  divideButton.classList.remove("operatorClicked");
  multiplyButton.classList.remove("operatorClicked");
  minusButton.classList.add("operatorClicked");
  plusButton.classList.remove("operatorClicked");
  displayText.textContent = displayValue;
});

let plusButton = document.getElementById('plusButton');
plusButton.addEventListener('click', () => {
  switch(currentOperator) {
    case 'multiplyReady':
      displayValue = +multiply(storedValue, displayValue).toFixed(3);
      break;
    case 'subtractReady':
      displayValue = +subtract(storedValue, displayValue).toFixed(3);
      break;
    case 'addReady':
      displayValue = +add(storedValue, displayValue).toFixed(3);
      break;
    case 'divideReady':
      displayValue = +divide(storedValue, displayValue).toFixed(3);
      break;
  }
  currentOperator = 'add'
  divideButton.classList.remove("operatorClicked");
  multiplyButton.classList.remove("operatorClicked");
  minusButton.classList.remove("operatorClicked");
  plusButton.classList.add("operatorClicked");
  displayText.textContent = displayValue;
});

let equalsButton = document.getElementById('equalsButton');
equalsButton.addEventListener('click', () => {
  switch(currentOperator) {
    case 'multiplyReady':
      displayValue = +multiply(storedValue, displayValue).toFixed(3);
      break;
    case 'subtractReady':
      displayValue = +subtract(storedValue, displayValue).toFixed(3);
      break;
    case 'addReady':
      displayValue = +add(storedValue, displayValue).toFixed(3);
      break;
    case 'divideReady':
      displayValue = +divide(storedValue, displayValue).toFixed(3);
      break;
    case 'multiply':
      displayValue = +multiply(displayValue, displayValue).toFixed(3);
      break;
    case 'subtract':
      displayValue = +subtract(displayValue, displayValue).toFixed(3);
      break;
    case 'add':
      displayValue = +add(displayValue, displayValue).toFixed(3);
      break;
    case 'divide':
      displayValue = +divide(displayValue, displayValue).toFixed(3);
      break;
  }
  currentOperator = 'equals'
  divideButton.classList.remove("operatorClicked");
  multiplyButton.classList.remove("operatorClicked");
  minusButton.classList.remove("operatorClicked");
  plusButton.classList.remove("operatorClicked");
  displayText.textContent = displayValue;
});
equalsButton.addEventListener('mousedown', () => {
  equalsButton.classList.add('orangeButtonFlash');
});
equalsButton.addEventListener('mouseup',() => {
  equalsButton.classList.remove('orangeButtonFlash');
});
