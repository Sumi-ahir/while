// let prompt=require('prompt-sync')();
let prompt=require("prompt-sync")();
let n=Number(prompt("Enter a Number : "));
let sum=0;
let rem;
while(n>0){
    rem=n%10;
    n=Math.floor(n/10);
    sum+=rem
}console.log(sum);
