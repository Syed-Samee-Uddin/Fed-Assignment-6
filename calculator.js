const prompt=require('prompt-sync')();
while(1){
    console.log('1.Addition\n2.Substraction\n3.Multiplication\n4.Division\n5.exit')
    let  choice =prompt('Enter your Choice:')
    if (choice==1){
        let a=prompt('enter First Number:')
        a=parseInt(a)
        let b=prompt('enter Second Number:')
        b=parseInt(b)
        let x=addition(a,b)
        console.log(x)
    }
    else if (choice==2){
        let a=prompt('enter First Number:')
        a=parseInt(a)
        let b=prompt('enter Second Number:')
        b=parseInt(b)
      let x=  substraction(a,b)
        console.log(x)

    }
    else if (choice==3){
        let a=prompt('enter First Number:')
        a=parseInt(a)
        let b=prompt('enter Second Number:')
        b=parseInt(b)
      let  x= multiplication(a,b)
        console.log(x)

    }
    else if (choice==4){
        let a=prompt('enter First Number:')
        a=parseInt(a)
        let b=prompt('enter Second Number:')
        b=parseInt(b)
      let x= division(a,b)
        console.log(x)

    }
    else
    return false
    function addition(a,b){
        return a+b;
    }
    function substraction(a,b){
        return a-b;
    }
    function multiplication(a,b){
        return a*b;
    }
    function division(a,b){
        return a/b;
    }

}
