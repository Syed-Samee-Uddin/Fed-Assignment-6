const prompt=require('prompt-sync')();
function multiply(a,b) {
    return a * b;}
let a=prompt('enter the value of a')
console.log('a='+a)
let b=prompt('enter the value of b')
console.log('b='+b)
mvl=multiply(a,b)
console.log('The Multiplication of two numbers is '+mvl)
