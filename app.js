// Require https module

const https = require('https');

// Require http module for status code 

const http = require('http');

// Funcitons

// message 

function printMessage(place, degree) {
    const msg = `Current temperature in ${place} is ${degree}`;
    console.log(msg);
}

