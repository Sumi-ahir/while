let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number : '));
let original=n;
let sum=0,dig;
let digit=n.toString().length;

while(n>0){
    dig=n%10;
    sum+=Math.pow(dig,digit);
    n=Math.floor(n/10)

}if(sum===original){
    console.log('Armstrong');
    
}else{
    console.log('! armstrong');
    
}