'use strict'

const fibonacci = () =>{
    let sequenceFib = [];
    const size = 350;
    let currentNumber = 0;
    let previousNumber = 0;

    for (let i = 0; currentNumber<=size; i++) {
        if(i == 1)
            currentNumber = 1;
        else {
        currentNumber += previousNumber;
        previousNumber = currentNumber - previousNumber;
        }
        sequenceFib.push(currentNumber);
    }
    return sequenceFib;
}

const isFibonnaci = (num) =>{
    let result;
    if(typeof(num) == 'number'){
        result = fibonacci().includes(num);
    } 
    else {
        result = "Digite apenas números";
    }
    return result;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
