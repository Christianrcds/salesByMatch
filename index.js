'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
   let valuesArray = {
    array: [],
    counterOfEqualNumbers: [],
    };
    


    ar.map(value => {
        if(valuesArray.array.find(element => element === value) === undefined){
            valuesArray.array.push(value);    
            valuesArray.counterOfEqualNumbers.push(ar.filter(item => item === value).length);
        }
    });


    let counter = 0;
    valuesArray.counterOfEqualNumbers.map(item => {if(item%2 === 0) counter += item/2});    
    valuesArray.counterOfEqualNumbers.map(item => {if(item%2 !== 0 && item > 1) counter+=Math.trunc(item/2)});    
    
    return counter;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
