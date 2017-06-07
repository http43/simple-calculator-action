'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended: true
}));

restService.use(bodyParser.json());

restService.post('/operate', function(req, res) {
    var number1 = req.body.result.parameters.number1
    var number2 = req.body.result.parameters.number2
    var operations = req.body.result.parameters.operations
    var answer
    
    /*
    if (characterName == "homer simpson"){
        answer = "He is the man of the house"
    }
    else if (characterName == "marge simpson"){
        answer = "She is the woman of the house"
    }
    else if (characterName == "bart simpson"){
        answer = "He is the naughty boy of the house"         
    }
    else if (characterName == "lisa simpson"){
        answer = "She is the good girl of the house"
    }
    else if (characterName == "maggie simpson"){
        answer = "She if the clever baby of the house"
    }
    else{
        answer = "Whatever!"
    }
    */
    
    return res.json({
        speech: number1,
        displayText: number1,
        source: 'operate'
    });
});

/*
restService.post('/google-action-test', function(req, res) {
    var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
    return res.json({
        speech: speech,
        displayText: speech,
        source: 'google-action-test-source'
    });
});
*/

restService.listen((process.env.PORT || 8000), function() {
    console.log("Server up and listening");
});
