const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


consign()
    .include('config/dbConection.js')
    .then('api/routes')
    .then('api/controllers')
    .then('api/models')
    .into(app);

module.exports = app;
