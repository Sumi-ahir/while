let prompt=require('prompt-sync')();
let num=Number(prompt("enter a number : "));
let sum=0,dig;
let org=num;
while(num>0){
    dig=num%10;
    sum+=dig;
    num=Math.floor(num/10)}
    if(org%dig===0){
        
        console.log('harshad number');
        
    }else{
        console.log('not harshad number');
        
    }


//     class Solution {
//     is_harshad(nStr) {
//         // Write your code here
//         const n=parseInt(nStr,10);
//         let digsum=0;
        
//         for(const ch of nStr){
//             digsum+=parseInt(ch,10)
//         }if(digsum!==0 && n%digsum===0){
//             return 'Harshad Number'
//         }
//  return 'Not Harshad Number'
//     }
// }

// module.exports = Solution;
