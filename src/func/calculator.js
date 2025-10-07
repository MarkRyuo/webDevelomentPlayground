

/**
 * Calculate the input 
 * 
 * @param {num} firstNumber 
 * @param {num} secondNumber
 * @returns {num} txtareaComputed
 * 
 */

const getInputFirstNumber = (num) => {
    const FIRST_NUMBER = document.getElementById("firsNumber");
    const value = FIRST_NUMBER.value.trim().innerHTML = num ;
    
    return value ;
}


// Main 

function calculateHandler() {

    const firstNumber = getInputFirstNumber() ;
    
}

export default calculateHandler ;