const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/transactions', (req, res) => {
  res.json([
    { id: 1, description: 'Grocery', amount: -50 },
    { id: 2, description: 'Salary', amount: 5000 },
  ]);
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});
