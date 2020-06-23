const https = require("https");
const axios = require("axios");

const weatherMap = (loc, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&APPID=b987f0ada526729cfc3c4b55390693fa`;
    https.get(url,(res) => {
        res.on('data', (d) => {
            if(res.statusCode === 200) {
                const jsonData = JSON.parse(d);
                callback(undefined, jsonData);
            } else {
                callback("Unable to find location. Try another search.", undefined);    
            }
        });
    }).on('error', (e) => {
        callback("Connection Error. Please check your network.", undefined);
    });
}

module.exports = {weatherAPI: weatherMap};