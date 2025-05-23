import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/transactions`)
      .then(res => setTransactions(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>💸 Personal Finance Tracker</h1>
      <ul>
        {transactions.map(tx => (
          <li key={tx.id}>{tx.description}: ₹{tx.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
