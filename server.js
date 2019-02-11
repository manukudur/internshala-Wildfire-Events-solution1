const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./app')
const eventController = require('./eventControlers/eventController')

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

app.use('/event', eventController);