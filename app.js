const numberStr = prompt('Please input your start number: ')
const numberStr2 = prompt('Please input your end number: ')
const numberStr3 = prompt('Please input the number you want to increment: ')

const number = Number(numberStr) + Number(numberStr2) + Number(numberStr3)
result = number

const bin = dec2bin(numberStr) + ', ' + dec2bin(numberStr2) + ', ' + dec2bin(numberStr3)
result = bin
writeOutput("The generated array is: " + '<br>' + "The sum is: " + number + '<br>' + "The binary of absolute element values are: " + result)

function writeOutput(result) {
    const h3Element = document.getElementById('output')
    h3Element.innerHTML = result
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2)
}