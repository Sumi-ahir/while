let prompt=require('prompt-sync')();
let num=Number(prompt("enter a number : "));
let sum=0;

for(let i=1;i<=num/2;i++){
    if(num%i===0){
        sum+=i
    }
}if(sum>num){console.log('abundant number');
}else{console.log('! abundant number')}

class Solution {
    is_abundant(nStr) {
        const n = parseInt(nStr, 10);
        let sum = 0;

        for (let i = 1; i <= n / 2; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }

        return sum > n ? "Yes" : "No";
    }
}

module.exports = Solution;
