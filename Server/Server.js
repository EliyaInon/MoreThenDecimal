
//Load HTTP module
const express = require('express')
const app = express();
const port = 5000;

//#region Algorithem
const ConvertNumber = (number, source, target, index = 0) => {
    if (number === 0) {
        return 0;
    }

    return ConvertNumber((number - number % target) / target, source, target, index + 1) +
        (number % target) * Math.pow(source, index)
}

// const DecimalToBinary = (number, index = 0) => {
//     if (number === 0) {
//         return 0
//     }

//     return DecimalToBinary((number - number % 2) / 2, index + 1) +
//         (number % 2) * Math.pow(10, index)
// }


// const BinaryToDecimal = (number, index = 0) => {
//     if (number === 0) {
//         return 0;
//     }

//     return BinaryToDecimal((number - number % 10) / 10, index + 1) +
//         (number % 10) * Math.pow(2, index)
// }

//#endregion

let BINARY_NUMBER = 110011001100
let DECIMAL_NUMBER = Math.round(Math.random() * 10000)

app.get('/', (req, res) => {
    res.send(`The binary of ${DECIMAL_NUMBER} is: ${ConvertNumber(DECIMAL_NUMBER, 10, 2)}, 
    The decimal of ${(BINARY_NUMBER)} is: ${ConvertNumber(BINARY_NUMBER, 2, 10)}`)
});

// var algoFile = require("./Algorithem.ts")

// console.log(algoFile.BinaryToDecimal(NUMBER).toString());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
