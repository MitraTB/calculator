let currentResult = 0; 
console.log(userInput.value);
const logEntries = [];

/*function add ( number1, number2){
const result = number1 + number2;
return result;
}
*/
function transferInputToInt() {
    return parseInt(userInput.value);
}


function showEnteredValues (operator, inputNumber, prevResult){
    const showEntries = `${prevResult} ${operator} ${inputNumber}`;
    outputResult (currentResult, showEntries);
}


function CreateArraysOfEntries (operator, number, previousResult){
    const logEntry = {
    operator: operator , 
    number1 : number , 
    number2 : previousResult , 
    result : currentResult,
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}


function calculationResult(calculationType){
    enteredNumber = transferInputToInt();
    initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'add'){
        currentResult += enteredNumber;
        mathOperator = '+'
    }
    if (calculationType === 'subtract'){
        currentResult -= enteredNumber;
        mathOperator = '-'
    }
    if (calculationType === 'divide'){
        currentResult /= enteredNumber;
        mathOperator = '/'
    }
    if (calculationType === 'multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*'
    }
    showEnteredValues (mathOperator, enteredNumber, initialResult);
    CreateArraysOfEntries (mathOperator, enteredNumber, initialResult);
}


function add(){
    calculationResult('add');
}

function subtract(){
    calculationResult('subtract');
}

function divide(){
    calculationResult('divide');
}

function multiply(){
    calculationResult ('multiply');
}

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
subtractBtn.addEventListener('click', subtract);