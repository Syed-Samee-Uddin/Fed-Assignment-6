const prompt=require('prompt-sync')();
let a=prompt('enter the value of a')
if (a==0)
    console.log('Entered Number is Zero')
else if(a>0)
    console.log('Entered Number is a Positive Number')
else
    console.log('Negative  Nummber')
