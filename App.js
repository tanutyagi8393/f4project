import React, { useState } from 'react';
import './index.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  const handleAddition = () => {
    setResult('');
    if (validateInputs()) {
      setResult(parseFloat(num1) + parseFloat(num2));
      setError('');
    }
  };

  const handleSubtraction = () => {
    setResult('');
    if (validateInputs()) {
      setResult(parseFloat(num1) - parseFloat(num2));
      setError('');
    }
  };

  const handleMultiplication = () => {
    setResult('');
    if (validateInputs()) {
      setResult(parseFloat(num1) * parseFloat(num2));
      setError('');
    }
  };

  const handleDivision = () => {
    setResult('');
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setError('Cannot divide by zero!');
        setResult('');
      } else {
        setResult(parseFloat(num1) / parseFloat(num2));
        setError('');
      }
    }
  };

  const validateInputs = () => {
    if (num1.trim() === '' && num2.trim() === '') {
      setError('Error :  Num1 and Num2 cannot be empty');
      setResult('');
      return false;
    }
    else if (num1.trim() === '') {
      setError('Error :  Num1 cannot be empty');
      setResult('');
      return false;
    }
    else if(num2.trim() === ''){
        setError('Error :  Num2 cannot be empty');
        setResult('');
        return false;
    } 
    else if (
      isNaN(parseFloat(num1)) ||
      isNaN(parseFloat(num2)) ||
      !isFinite(num1) ||
      !isFinite(num2)
    ) {
      setError('Please enter valid numbers!');
      setResult('');
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className='calculator'>
      <h1>React Calculator</h1>
      <div className='inputs'>
        <input type='text' placeholder='Num1' value={num1} onChange={handleNum1Change} />
        <br />
        <input type='text' placeholder='Num2' value={num2} onChange={handleNum2Change} />
      </div>
      <div className='buttons'>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      {console.log(num1,num2,result)}
      {error && <div className='error'>{error}</div>}
      {(result==="")?"": <div>
        <p className='ans'>Result = {result}</p> 
         <p className='result'>Success : Your result is shown above!</p>
        </div>
      }
    </div>
  );
}
export default App;
