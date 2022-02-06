/*!
 *PowerPointCreator
 *By: m8eight
 *MIT Licensed
*/

const express = require('express');
const app = express();
const jsonParser = express.json();
var pptxFactory = require('./lib/pptxFactory.js');
var fileVerification = require('./lib/fileVerification.js');


app.use(express.static('./public'));

app.get('/', function (request, response) {
    response.sendFile(__dirname + './public/index.html');
});

app.post('/request', jsonParser, function (request, response) {
    if (!request.body) return response.send({
        condition: 'No request'
    });

    let jsonRequest = request.body;
    let pptxPath = './storage/app.pptx';
    
    fileVerification.ifExistsDelete(pptxPath);

    /* DEBUG */
    // console.log('index: ');
    // console.dir(request.body);

    pptxFactory.get(jsonRequest, response);
});

app.get('/download', function (request, response) {
    const filePath = './storage/app.pptx';
    response.download(filePath);
});

app.listen(3000, function () {
    console.log('Start to 127.0.0.1:3000');
});
