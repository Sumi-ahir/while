
let prompt=require('prompt-sync')();
let n=Number(prompt("Enter a number : "))
let copy=n;
let ans=0
let count=0
while(n>0){
    count++;
    n=Math.floor(n/10);
}if(count!==10)console.log('Invalid ISBN Number');
else{
    while(copy>0){
       let dig=copy%10;
        ans+=(dig*count);
        count--;
        copy=Math.floor(copy/10)
    }console.log(ans%11==0?'Valid ISBN':'Invalid ISBN');
    
}