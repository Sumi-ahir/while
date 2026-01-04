let prompt=require('prompt-sync')()
let user;
let computer=Math.floor((Math.random()*100)+1)
do{
    
    let user=Number(prompt("Enter a number :"))
    if(user>computer){
        console.log("too large");
        
    }else if(user<computer){
        console.log('too small');
        
    }else if(user==computer){
        console.log(`Congratulation`);
        break;
        
    }else{console.log('Enter valid number');
    }

}while(user !=computer)