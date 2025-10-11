import './style.css'
import calculateHandler, { clearInputs } from './func/calculator.js'

// Explanation: 
// Create a simple calculator using the operators 

document.querySelector('#app').innerHTML = `
  <div>
    <form>
      <fieldset>
        <legend>Calculator</legend>
        <input type="text" id="firstNumber" name="inputNumber"><br>
        <p><!--This is empty for displaying only--></p>
        <input type="text" id="secondNumber" name="inputNumber"><br><br>
        <input type="button" value="Calculate" id="inptCalculate">
        <input type="button" value="Clear" id="inptClear">
      </fieldset>

      <!--This area is for computed -->
      <textarea name="computed" id="txtareaComputed" readonly></textarea>
    </form>
  </div>
`

const inptCalculate = document.getElementById("inptCalculate");
inptCalculate.addEventListener("click", () => {
    calculateHandler()
})

document.getElementById("inptClear").addEventListener("click", () => {
  clearInputs()
})
