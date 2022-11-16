//uncomment for quokka tests
//import fetch from 'node-fetch';
const urlPetro = 'https://petroapp-price.petro.gob.ve/price/' //API url
window.onload = async() =>{
    //params sended to API
    const data = {
        "coins":["PTR"],
        "fiats": ["USD", "BS"]
    }
    //api request
    const response = await fetch(urlPetro,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
        })
    const retrievedData = await response.json()//save in const response from API call
    init(retrievedData)
}

//Selector of DOM Elements
const tasaElement = document.getElementById('tasa')// Fill with rate 
const valueElement = document.getElementById('value') //Input of currency
const selectElement = document.getElementById('selectOpt') // Option Element
const totalElement = document.getElementById('total')//Total Element

//Init function that recieves retrievedData
const init = (retrievedData) =>{
    const bsValue = retrievedData.data.PTR.BS
    const usdValue = retrievedData.data.PTR.USD
    //Fill tasaElement with first value (usd)
    tasaElement.value = usdValue
    //Onchange Event that changes tasaElement
    selectElement.addEventListener('change',()=>{
        if(selectElement.value == '$'){
            tasaElement.value = usdValue
            totalElement.value = valueElement.value * tasaElement.value
        }
        else{
            tasaElement.value = bsValue
            totalElement.value = valueElement.value * tasaElement.value
        }
    },false)
    //Keydown Event that calculates the total amount of the operation
    valueElement.addEventListener('keyup',()=>{
        totalElement.value = valueElement.value * tasaElement.value
    },false)
}