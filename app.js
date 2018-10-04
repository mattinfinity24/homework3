const numberStr = prompt('Please input your start number: ')
const numberStr2 = prompt('Please input your end number: ')
const numberStr3 = prompt('Please input the number you want to increment: ')

const arr = Number(numberStr) + ', ' + (numberStr2) + ', ' + (numberStr3)

/* const arr = Number(numberStr) + ', ' + (numberStr2) + ', ' + (numberStr3) // Array */
const number = Number(numberStr) + Number(numberStr2) + Number(numberStr3) // Total Sum of Inputs

const bin = dec2bin(numberStr) + ', ' + dec2bin(numberStr2) + ', ' + dec2bin(numberStr3) // Absolute Elements
result = bin
writeOutput("The generated array is: " + arr + '<br>' + "The sum is: " + number + '<br>' + "The binary of absolute element values are: " + result)

function writeOutput(result) {
    const h3Element = document.getElementById('output')
    h3Element.innerHTML = result
}

function dec2bin(dec) {
    return (dec >>> 0).toString(2)
}

function incrementValue()
{
    const value = 
    parseInt(document.getElementById('numberStr').value, 10)
        value = isNan(value) ? 0 :value;
        value++;
        document.getElementById('numberStr').value = value;
}

