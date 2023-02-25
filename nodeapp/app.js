const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1 style="color: #2196F3;">Hello From Paula 🚀</h1>');
});

app.listen(port, () => {
  console.log(`🚀 Example app listening at http://localhost:${port}`);
});
