"use strict";

var request = require('request');
request = request.defaults({jar: true});

var cookieParser = require('cookie-parser')
var fs = require('fs');


var formData = {
    __RequestVerificationToken: "0AUBWcbRCPaoMiLKSvAQfjIJsJMK6ozVZux1gZlKEpM",
    Username: "quantrihoabinh",
    Password: "55556666",
    LoginFailTime: "",
    Captcha: "",
    RememberMe: true
};

request.post('https://taxi3.binhanh.vn/Auth/Auth',{form: formData}).on('response', function(response){
    var cookies = response.headers[`set-cookie`];
    var optionsGet = { 
        method: 'GET',
        url: 'https://taxi3.binhanh.vn/Online/RequestInit',
        headers: 
        { 
            'postman-token': '5db3c3ed-61e7-eafa-6b4c-0b9e377e39b9',
            'cache-control': 'no-cache',
            'Cookie': cookies
        } 
    };

    request(optionsGet, function (error, response, body) {
    if (error) throw new Error(error);
        console.log(body);
    });

  });



