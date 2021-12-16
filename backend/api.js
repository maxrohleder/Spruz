const express = require('express');

// ust express app with json middleware
const app = express();
app.use(express.json());

// define constants
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`SpruzAPI available at http://localhost:${PORT}`)
})
