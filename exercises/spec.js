const { expect } = require('chai');

describe('Project Euler', () => {
    it('1. Multiples of 3 and 5', () => {
        const multiplesOf3and5 = require('./1-multiples-of-3-and-5.js');
        expect(multiplesOf3and5(10)).to.equal(23);
    });
    it('2. Even Fibonacci Numbers', () => {
        const evenFibonacciNumbers = require('./2-even-fibonacci-sum.js');
        expect(evenFibonacciNumbers(4000000)).to.equal(4613732);
    });
    it('3. Largest prime factor', () => {
        const largestPrimeFactor = require('./3-largest-prime-factor.js');
        expect(largestPrimeFactor(13195)).to.equal(29);
    });
    it('4. Largest palindrome product', () => {
        const largestPalindromeProduct = require('./4-largest-palindrome-product.js');
        expect(largestPalindromeProduct(2)).to.equal(9009);
    });
    it('5. Smallest multiple', () => {
        const smallestMultiple = require('./5-smallest-multiple.js');
        expect(smallestMultiple(10)).to.equal(2520);
    });
    it('6. Sum square difference', () => {
        const sumSquareDifference = require('./6-sum-square-difference.js');
        expect(sumSquareDifference(13195)).to.equal(29);
    });
    it('7. 10001st prime', () => {
        const nthPrime = require('./7-10001st-prime.js');
        expect(nthPrime(10000)).to.equal(29);
    }); 
    it('8. Largest product in a series', () => {
        const largestProductInSeries = require('./8-largest-product-in-series.js');
        expect(largestProductInSeries(13195)).to.equal(29);
    }); 
    it('9. Special pythagorean triplet', () => {
        const specialPythagoreanTriplet = require('./9-special-pythagorean-triplet.js');
        expect(specialPythagoreanTriplet(13195)).to.equal(29);
    }); 
    it('10. Summation of primes', () => {
        const summationOfPrimes = require('./10-summation-of-primes.js');
        expect(summationOfPrimes(13195)).to.equal(29);
    }); 
});