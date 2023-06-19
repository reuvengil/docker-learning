// get the environment variables fron docker
require('dotenv').config();

// including the express libs 
const express = require('express');
const app = express();

// get the port variables
const port = process.env.PORT;

app.use(express.static('public'))
app.get('/', function (req, res) {
    res.send(`You did it, your application running on port ${port}, now drag the file monkey.html to ./public folder, then navigate to <a href="/monkey.html">http://localhost:${port}/monkey.html</a>`)
})
app.listen(port,()=>console.log(`application running on port ${port}`))