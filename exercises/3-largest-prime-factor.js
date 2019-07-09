/*
The prime factors of 13195 are 5*7*13*29.
What is the largest prime factor of the number 600851475143?
*/

module.exports = function (n) {
    const series = [false,false,false,...new Array(n-3).fill(true)];

    for (let i = 2; i <= n; i++) {
        for (let j = i+i; j <= n; j += i) {
            series[j] = false;
        }
    }

    const factors = series
        .map((isPrime, i) => isPrime ? i : null)
        .filter(index => index !== null)
        .filter(prime => (n / prime) % 1 === 0);

    return factors[factors.length-1];
};