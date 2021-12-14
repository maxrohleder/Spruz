const express = require('express');
const shell = require('shelljs');

// ust express app with json middleware
const app = express();
app.use(express.json());


const port = 3000;

// sent from github to validate the request
const secret = '<insert-on-server>';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/update', (req, res) => {
  console.log(req.body);
  if (req.body.user == 'mr' && req.body == secret){
    shell.exec('./restart_docker_container.sh')
    console.log("restarted docker container.")
    res.sendStatus(200);
  } else {
    res.sendStatus(503);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

