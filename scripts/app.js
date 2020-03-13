let currentResult = 0; 
console.log(userInput.value);

/*function add ( number1, number2){
const result = number1 + number2;
return result;
}
*/
function transferInputToInt() {
    return parseInt(userInput.value);
}

function showEnteredValues (operator, inputNumber, prevResult){
    const showEntries = `${inputNumber} ${operator} ${prevResult}`;
    outputResult (currentResult, showEntries);
}

function add(){
    enteredNumber = transferInputToInt();
    initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    console.log(currentResult);
    showEnteredValues('+', enteredNumber, initialResult);
}

function subtract(){
    enteredNumber = transferInputToInt();
    initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    showEnteredValues ('-', enteredNumber, initialResult);
}



function divide(){
    enteredNumber = transferInputToInt();
    initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    showEnteredValues ('/', enteredNumber, initialResult);
    
}

function multiply(){
    enteredNumber = transferInputToInt();
    initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    showEnteredValues('*', enteredNumber, initialResult);
}

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
subtractBtn.addEventListener('click', subtract);