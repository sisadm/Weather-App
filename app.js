//require weather.js
const weather = require('./weather');

// Join multiple values passed as arguments and replace all spaces with underscore
const query = process.argv.slice(2);

weather.get(query);