const express = require('express');
const JSON = require('json');

const app = express();
const port = 3000;

// sent from github to validate the request
const secret = 'asklbpwqiu3r[23oc32';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/update', (req, res) => {
    const msg = JSON.parse(req.body.read);
    console.log(msg);
    res.status(200);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

