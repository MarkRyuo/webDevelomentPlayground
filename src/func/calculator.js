

/**
 * Calculate the input 
 * 
 * @param {num} firstNumber 
 * @param {num} secondNumber
 * @returns {num} txtareaComputed
 * 
 */


// Main 

function calculateHandler() {

    const FIRST_NUMBER = document.getElementById("firstNumber");
    const SECOND_NUMBER = document.getElementById("secondNumber");

    const firstValue = parseFloat(FIRST_NUMBER.value.trim());
    const secondValue = parseFloat(SECOND_NUMBER.value.trim());

    const total = firstValue + secondValue ;

    const textArea = document.querySelector("[name=computed]");

    if(total){
        textArea.innerHTML = total ;
    }

    
}

export default calculateHandler ;
