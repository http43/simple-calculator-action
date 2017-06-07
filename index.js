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
    
    
    if (operations == "plus"){
        answer = number1 + number2
    }
    else if (operations == "minus"){
        answer = number1-number2
    }
    else if (operations == "multiply"){
        answer = number1*number2         
    }
    else if (operations == "divide"){
        answer = number1/number2
    }
    else{
        answer = "Whatever!"
    }
    
    
    return res.json({
        speech: answer,
        displayText: answer,
        source: 'operate-source'
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
