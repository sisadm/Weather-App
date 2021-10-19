// Require https module

const https = require('https');

// Require http module for status code 

const http = require('http');

// Funcitons

// message 

function printMessage(place, degree) {
    const msg = `Current temperature in ${place} is ${degree}F`;
    console.log(msg);
}

// get infromation from OpenWeather API

function get(place) {
    // connect to API
    try {
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=58995803f1e377733571b4e0ffa6674e`, response => {
            response.on('data', (d) => {
                d = JSON.parse(d);
                // convert Kelvin to Fahrenheit and add two decimal number after that
                let temp = ((Number(d.main.temp) - 273).toFixed(2) * 9 / 5 + 32);
                printMessage(place, temp);
                // console.log(d.main.temp);
            })
            
        });
        
    }
    catch(error) {
        console.log(error)
    }
};

get('Beverly Hills');