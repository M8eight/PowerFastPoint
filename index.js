/*!
 *PowerPointCreator
 *By: m8eight
 *MIT Licensed
*/

var fileVerification = require('./lib/fileVerification.js');
var pptxFactory = require('./lib/pptxFactory.js');

const express = require('express');
const app = express();
const jsonParser = express.json();


app.use(express.static('./public'));

//route to form
app.get('/', function (request, response) {
    response.sendFile(__dirname + './public/index.html');
});

//route to download
app.get('/download', function (request, response) {
    let filePath = './storage/app.pptx';
    response.download(filePath);
});

//request route
app.post('/request', jsonParser, function (request, response) {
    let jsonRequest = request.body;
    let pptxPath = './storage/app.pptx';

    //check for the existence of a request
    if (!request.body) return response.send({
        condition: 'No request'
    });

    //delete old file if exist
    fileVerification.ifExistsDelete(pptxPath);

    /* DEBUG */
    // console.log('index: ');
    // console.dir(request.body);

    //give request and create presentation
    pptxFactory.get(jsonRequest, response);
});



app.listen(3000, function () {
    console.log('Start to 127.0.0.1:3000');
});
