/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

module.exports = (n) => {
    let nthPrime = null;
    let primeCount = 0;

    for (let i = 2; i < n; i++) {
        let isPrime = true;
        for(let j = 2; j < 8; j++) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            primeCount++;
            nthPrime = i;
        }
    }

    return nthPrime;
};