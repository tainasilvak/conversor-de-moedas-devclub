// variável que vai pegar o botão no HTML
const buttonClick = document.querySelector("button") 

function cliqueiNoButton(){
    // valor que vai ser pego quando o usuário digitar
    const valueToConvert = document.querySelector("input").value
    // valor do R$ 0,00
    const currencyReal = document.querySelector("value")
    // valor do US$ 0.0
    const currencyDolar = document.querySelector("value2")
    // valor do dólar
    const dolarToday = 5
    // resultado da divisão entre o valor que o usuário digitou e o valor do dólar
    const currencyToConvert = valueToConvert / dolarToday
    // valor que o usuário digitou vai ser mostrado no R$
    currencyReal.innerHTML = valueToConvert
    // vai ser mostrado na tela o valor adicionado no R$
    console.log(currencyToConvert)
}







// evento que vai verificar toda vez que o botão for clicado
buttonClick.addEventListener("click", cliqueiNoButton)
