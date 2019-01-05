/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

module.exports = (n) => {
    let primeCount = 0;
    let index = 1;
    let currentPrime = null;

    while(primeCount < n) {
        index++;
        let isPrime = true;
        for(let i = 2; i < index; i++) {
            if (index % i === 0) {
                isPrime = false;
            }
        }
        if(isPrime) {
            primeCount++;
            currentPrime = index;
        }
    }

    return currentPrime;
};