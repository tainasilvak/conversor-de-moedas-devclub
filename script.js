const buttonClick = document.querySelector("button")
const currencySelected = document.querySelector(".currency-select")

function cliqueiNoButton() {
    const valueToConvert = document.querySelector("input").value
    const currencyReal = document.querySelector(".value")
    const currencyConverted = document.querySelector(".value2")

    const dolarToday = 4.91
    const euroToday = 5.38

    if (currencySelected.value == 'dolar') {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valueToConvert / dolarToday)

    }
    if (currencySelected.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valueToConvert / euroToday)

    }

    currencyReal.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valueToConvert)

}

function changeCurrency() {
    const currencyName = document.getElementsByClassName('currency-usa')

    if (currencySelected.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
    }

    if (currencySelected.value == 'euro') {
        currencyName.innerHTML = 'Euro'
    }

}
currencySelected.addEventListener('change', changeCurrency)
buttonClick.addEventListener("click", cliqueiNoButton)






