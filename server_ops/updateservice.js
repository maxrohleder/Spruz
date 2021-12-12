const express = require('express');
const shell = require('shelljs');

const app = express();
const port = 3000;

// sent from github to validate the request
const secret = 'asklbpwqiu3r[23oc32';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/update', (req, res) => {

    shell.exec('./restart_docker_container.sh')
    console.log("restarted docker container.")

    // send response
    res.status(200).send("accepted.");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

