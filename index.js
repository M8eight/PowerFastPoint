/*!
 *PowerPointCreator
 *By: m8eight
 *MIT Licensed
 */

const pptxFactory = require('./lib/pptxFactory.js');
const separatorHandle = require('./lib/separatorHandle.js');

const fsPromises = require('fs/promises');
const fs = require('fs');
const express = require('express');
const app = express();
const jsonParser = express.json();

app.use(express.static('./public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + './public/index.html');
});

app.post('/request', jsonParser, function (request, response) {

    if (!request.body) return response.json({
        'success': 'false',
        'error': 'No request'
    });

    let headersForm = request.body.headersList;
    let textForm = request.body.textsList;
    let urlsForm = request.body.urlsList;

    let data = separatorHandle.separateElement(headersForm, textForm, urlsForm, response);
    pptxFactory.get(data);

});

app.listen(3000, function () {
    console.log('Start to 127.0.0.1:3000');
});