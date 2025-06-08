const express = require('express');
const app = express();
const port = 3000;

// Built-in JSON parser middleware
app.use(express.json());

app.post('/api/data', (req, res) => {
  console.log(req.body); // JSON data yahan milega
  res.send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
