const buttonConvert = document.querySelector(".button-to-convert")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrency = document.querySelector(".currency-value").value
    const currencyValueToConvert = document.querySelector(".value")
    const currencyValueConverted = document.querySelector(".value2")

    const dolarToday = 4.99
    const euroToday = 5.42
    const libraToday = 6
    const bitcoinToday = 123

    if(currencySelect.value == 'dolar'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputCurrency / dolarToday)
    }
    if(currencySelect.value == 'euro'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(inputCurrency / euroToday)
    }
    if(currencySelect.value == 'libra'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {style: 'currency', currency: 'GPB'}).format(inputCurrency / libraToday)
    }
    if(currencySelect.value == 'bitcoin'){
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'BTC'}).format(inputCurrency / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputCurrency)
}

function changeCurrency(){
   const flagImage = document.querySelector(".flag-usa")
   const currencyName = document.querySelector(".currency-usa")

   if(currencySelect.value == 'dolar'){
    flagImage.src = './assets/usa-dolar.png'
    currencyName.innerHTML = 'Dólar'
   }
   if(currencySelect.value == 'euro'){
    flagImage.src = './assets/euro.png'
    currencyName.innerHTML = 'Euro'
   }
   if(currencySelect.value == 'libra'){
    flagImage.src = './assets/libra.png'
    currencyName.innerHTML = 'Libra'
   }
   if(currencySelect.value == 'bitcoin'){
    flagImage.src = './assets/bitcoin.png'
    currencyName.innerHTML = 'Bitcoin'
   }

   convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
buttonConvert.addEventListener('click', convertValues)


    
