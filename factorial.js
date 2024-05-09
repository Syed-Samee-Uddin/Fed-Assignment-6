const prompt=require('prompt-sync')();
function fact(a) {
    if (a==0)
        return 1
    else
    return a*fact(a-1);}
let a=prompt('enter the value of a')
console.log('a='+a)
f=fact(a)
console.log('The Factorial of '+a+' is '+f)
