import React, {useState} from 'react';
import './App.css';

const arrOfObj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function App() {
  const [value, setValue] = useState('');
  const addInput = (evt)=>{
    setValue(value + evt.target.innerText);
  }
  const changeHandler = (evt) => {
  setValue(evt.target.value.replace(/[^0-9*÷+\-!x/]/g, ''));
  }
  const calculate = () => {
    let expression = value.replace(/[÷x]/g, (a) => {
      if (a === 'x') return '*';
      return '/';
    });
    const factorial = (value) => {
      let result = Number(value);
      let product = 1;
      for(let i = 1; i <= result; i++) {
        product *= i;
      }
      return product;
    }
    expression = expression.replace(/([\d.]+)!/g, "factorial($1)");
    console.log(expression);
    setValue(eval(expression));
  }
  
  return (
    
    <div className="App">
      <div className="container">
        <div className="calculatorBox">
          <input type="text" placeholder="Enter equation here..." value={value} onChange={changeHandler}></input>
          <button class="one" onClick={addInput}>1</button>
          <button class="two" onClick={addInput}>2</button>
          <button class="three" onClick={addInput}>3</button>
          <button class="div" onClick={addInput}>/</button>
          <button class="four" onClick={addInput}>4</button>
          <button class="five" onClick={addInput}>5</button>
          <button class="six" onClick={addInput}>6</button>
          <button class="mult" onClick={addInput}>*</button>
          <button class="seven" onClick={addInput}>7</button>
          <button class="eight" onClick={addInput}>8</button>
          <button class="nine" onClick={addInput}>9</button>
          <button class="sub" onClick={addInput}>-</button>
          <button class="zero" onClick={addInput}>0</button>
          <button class="dot" onClick={addInput}>.</button>
          <button class="equals" onClick={calculate}>=</button>
          <button class="add" onClick={addInput}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;