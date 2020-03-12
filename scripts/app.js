let currentNumber = 0; 
console.log(userInput);

/*function add ( number1, number2){
const result = number1 + number2;
return result;
}
*/

function add(){
    enteredNumber = transferInputToInt();
    currentNumber = currentNumber + enteredNumber;
    console.log(currentNumber);
}

function subtract(){
    enteredNumber = transferInputToInt();
    currentNumber = currentNumber - enteredNumber;
}



function divide(){
    enteredNumber = transferInputToInt();
    currentNumber = currentNumber / enteredNumber;
}

function multiply(){
    enteredNumber = transferInputToInt();
    currentNumber = currentNumber * enteredNumber;
}

addBtn.addEventListener('click', add);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
subtractBtn.addEventListener('click', subtract);