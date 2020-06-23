
const weatherForm = document.querySelector('form');
const search = document.getElementById('loc_search');
const info = document.getElementById("info");

const msg = document.getElementById("msg");

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = "Loading...";
    fetch('/weather?loc='+search.value)
        .then((res) => {
            res.json().then(json => {
                if(json.err) {
                    msg.classList.add('error-msg');
                    msg.textContent = json.err;
                } else {
                    const loc = json.data.name;
                    const lat = json.data.coord.lat;
                    const lon = json.data.coord.lon;
                    const temp = json.data.main.temp;
                    const hum = json.data.main.humidity;
                    msg.classList.add('success-msg');
                    msg.textContent = `${loc} with latitude of ${lat} and longitude of ${lon} has temperature of ${temp} degree celcius and humidity of ${hum}%.`
                }
                
            })
        });
})