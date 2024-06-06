// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './Calculator';
import LoanCalculator from './LoanCalculator';
import MortgageCalculator from './MortgageCalculator';

function App ()  {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calculator/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/loan-calculator" element={<LoanCalculator/>} />
          <Route path="/mortgage-calculator" element={<MortgageCalculator/>} />
          <Route path="/home" element={<Calculator/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
