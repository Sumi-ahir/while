class Solution {
    primeFactors(n) {
        let result = [];

        for (let i = 2; i * i <= n; i++) {
            while (n % i === 0) {
                result.push(i);
                n = n / i;
            }
        }

        if (n > 1) {
            result.push(n);
        }

        return result;
    }
}

module.exports = Solution;
