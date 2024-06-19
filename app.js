// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    const euroToDollar = oneEuroIs.USD;
    const euroToYen = oneEuroIs.JPY;
    const valueInYen = (valueInDollar / euroToDollar) * euroToYen;
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    const euroToYen = oneEuroIs.JPY;
    const euroToPound = oneEuroIs.GBP;
    const valueInPound = (valueInYen / euroToYen) * euroToPound;
    return valueInPound;
}

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


// He realizado todo los pasos y me da el resultado del ejercicio. 