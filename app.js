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

// get infromation from OpenWeather API

function get(place) {
    // connect to API
    try {
        const request = https.get('https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=58995803f1e377733571b4e0ffa6674e');
        console.log(request);
    }
    catch(error) {
        console.log(error)
    }
};

get('London');