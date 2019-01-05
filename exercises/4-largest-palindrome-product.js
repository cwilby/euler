/*
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

module.exports = (n) => {
    const min = Math.pow(10, n-1);
    const max = Math.pow(10, n);
    
    let largestPalindrome = 0;
    for(let a = min; a < max; a++) {
        for (let b = min; b < max; b++) {
            const result = a * b;
            if(result > largestPalindrome && result == result.toString().split('').reverse().join('')) {
                largestPalindrome = result;
            }
        }
    }
    return largestPalindrome;
};