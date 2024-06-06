// src/LoanCalculator.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoanCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [numOfPayments, setNumOfPayments] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateLoan = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseInt(numOfPayments);

    if (isNaN(P) || isNaN(r) || isNaN(n) || n <= 0) {
      setMonthlyPayment('Error');
      return;
    }

    const payment = (P * r) / (1 - Math.pow(1 + r, -n));
    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="loan-calculator">
      <h2>Loan Calculator</h2>
      <div>
        <label>
          Principal:
          <input type="text" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Annual Interest Rate (%):
          <input type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Number of Payments (Months):
          <input type="text" value={numOfPayments} onChange={(e) => setNumOfPayments(e.target.value)} />
        </label>
      </div>
      <button onClick={calculateLoan}>Calculate</button>
      <div>
        <label>
          Monthly Payment:
          <input type="text" value={monthlyPayment} readOnly />
        </label>
      </div>
      <div className="home-link">
        <Link to="/home">Go Back to Calculator</Link>
      </div>
    </div>
  );
};

export default LoanCalculator;
