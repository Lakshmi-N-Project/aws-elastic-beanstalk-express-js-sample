const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!....This is my first hand on aws..Hey..!!I have created the first Pipeline on AWS..'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
