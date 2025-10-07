import './style.css'

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
        <input type="submit" value="Calculate" id="inptCalculate">
      </fieldset>

      <!--This area is for computed -->
      <textarea name="computed" id="txtareaComputed" readonly></textarea>
    </form>
  </div>
`
