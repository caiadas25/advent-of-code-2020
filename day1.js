function findSpecificSum(numbers, specificSum){

    let storeTwoNumbers = [];
    for(let currentNumber of numbers) {
        if(storeTwoNumbers[currentNumber]){
            let firstNumber = specificSum-currentNumber;
            let secondNumber = currentNumber;
            return firstNumber * secondNumber;
        }
        storeTwoNumbers[specificSum-currentNumber] = true;
    }
    return false;
 }