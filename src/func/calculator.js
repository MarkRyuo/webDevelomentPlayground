

/**
 * Calculate the input 
 * 
 * @param {num} firstNumber 
 * @param {num} secondNumber
 * @returns {num} txtareaComputed
 * 
 */

export function clearInputs(){
    
    const FIRST_NUMBER = document.getElementById("firstNumber");
    const SECOND_NUMBER = document.getElementById("secondNumber");


    FIRST_NUMBER.value = ""
    SECOND_NUMBER.value = ""
}


// Main 

function calculateHandler() {

    const FIRST_NUMBER = document.getElementById("firstNumber");
    const SECOND_NUMBER = document.getElementById("secondNumber");
    const textArea = document.querySelector("textarea[name=computed]");


    const firstValue = parseFloat(FIRST_NUMBER.value.trim());
    const secondValue = parseFloat(SECOND_NUMBER.value.trim());

    const total = firstValue + secondValue ;


    if(total){
        textArea.innerHTML = total ;
    }

    
}

export default calculateHandler ;
