// src/Calculator.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calculator.css'; // Optional: Create a CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '.' && input.slice(-1) === '.') {
      return;
    }

    if (/[+\-*/.]/.test(value) && /[+\-*/.]$/.test(input)) {
      setInput((prev) => prev.slice(0, -1) + value);
    } else {
      setInput((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      let sanitizedInput = input.replace(/[+\-*/.]$/, '');
      const evaluatedResult = Function(`'use strict'; return (${sanitizedInput})`)();
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const handleScientificClick = (func) => {
    try {
      let sanitizedInput = input.replace(/[+\-*/.]$/, '');
      let evaluatedResult = Function(`'use strict'; return (${sanitizedInput})`)();
      let result;
      switch (func) {
        case 'sqrt':
          result = Math.sqrt(evaluatedResult);
          break;
        case 'square':
          result = Math.pow(evaluatedResult, 2);
          break;
        case 'exp':
          result = Math.exp(evaluatedResult);
          break;
        case 'log':
          result = Math.log(evaluatedResult);
          break;
        case 'log10':
          result = Math.log10(evaluatedResult);
          break;
        case 'sin':
          result = Math.sin(evaluatedResult);
          break;
        case 'cos':
          result = Math.cos(evaluatedResult);
          break;
        case 'tan':
          result = Math.tan(evaluatedResult);
          break;
        case 'asin':
          result = Math.asin(evaluatedResult);
          break;
        case 'acos':
          result = Math.acos(evaluatedResult);
          break;
        case 'atan':
          result = Math.atan(evaluatedResult);
          break;
        case 'sinh':
          result = Math.sinh(evaluatedResult);
          break;
        case 'cosh':
          result = Math.cosh(evaluatedResult);
          break;
        case 'tanh':
          result = Math.tanh(evaluatedResult);
          break;
        case 'pow':
          const base = parseFloat(prompt('Enter the base:'));
          result = Math.pow(base, evaluatedResult);
          break;
        case 'cbrt':
          result = Math.cbrt(evaluatedResult);
          break;
        case 'factorial':
          result = factorial(evaluatedResult);
          break;
        default:
          result = 'Error';
      }
      setResult(result);
      setInput(result.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const factorial = (n) => {
    if (n < 0) return 'Error';
    if (n === 0) return 1;
    return n * factorial(n - 1);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleScientificClick('sqrt')}>√</button>
        <button onClick={() => handleScientificClick('square')}>x²</button>
        <button onClick={() => handleScientificClick('exp')}>exp</button>
        <button onClick={() => handleScientificClick('log')}>ln</button>
        <button onClick={() => handleScientificClick('log10')}>log</button>
        <button onClick={() => handleScientificClick('sin')}>sin</button>
        <button onClick={() => handleScientificClick('cos')}>cos</button>
        <button onClick={() => handleScientificClick('tan')}>tan</button>
        <button onClick={() => handleScientificClick('asin')}>asin</button>
        <button onClick={() => handleScientificClick('acos')}>acos</button>
        <button onClick={() => handleScientificClick('atan')}>atan</button>
        <button onClick={() => handleScientificClick('sinh')}>sinh</button>
        <button onClick={() => handleScientificClick('cosh')}>cosh</button>
        <button onClick={() => handleScientificClick('tanh')}>tanh</button>
        <button onClick={() => handleScientificClick('pow')}>pow</button>
        <button onClick={() => handleScientificClick('cbrt')}>³√</button>
        <button onClick={() => handleScientificClick('factorial')}>n!</button>
      </div>
      <div className="home-link">
        <div>
        <Link to="/loan-calculator">Loan Calculator</Link>
        </div>
        <div>
        <Link to="/mortgage-calculator">Mortgage Calculator</Link>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
