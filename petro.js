//uncomment for quokka tests
//import fetch from 'node-fetch';
//import { json } from 'stream/consumers';
let perro,gato =0
let data = {
    "coins":["PTR"],
    "fiats": ["USD", "BS"]
}

fetch('https://petroapp-price.petro.gob.ve/price/',{
method: "POST",
body: JSON.stringify(data),
headers: {"Content-Type": "application/json"}
}).then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))

fetch("https://api.exchangedyn.com/markets/quotes/usdves/bcv?fbclid=IwAR0VKRtIIlO3tthfNKJ2tu9EUmtujb-6VuxfwfrKgMbaY1fAE8et8w1jQuM",{
    method: "GET",
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err))