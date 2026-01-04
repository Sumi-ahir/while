let prompt=require('prompt-sync')();
let n1=Number(prompt('Enter value of n1 :'));
let n2=Number(prompt('Enter value of n2 :'));
let n;
do{
    console.log('press 1 for addition');
    console.log('press 2 for multiplication');
    n=Number(prompt('press a key u want to performd operation : '))
    switch (n) {
        case 1:
                console.log(n1+n2+"addition");
            break;
        case 2:
                console.log(n1*n2+"multiplication");
                
            break;
    
        default:console.log('enter valid');
        
            break;
    }
    n=Number(prompt("enter 10 for recontinue"))
}while(n==10);