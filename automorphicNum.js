
let prompt=require('prompt-sync')();
let n=Number(prompt("Enter a number : "))
let count=0;
let copy=n
let sq=n*n;
while(n>0){
    count++;
    n=Math.floor(n/10)
}
if(sq%Math.pow(10,count)==copy){
    console.log('automorphic');
    
}else{
    console.log('not automorphic');
}
    