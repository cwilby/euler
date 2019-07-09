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
        expect(sumSquareDifference(10)).to.equal(2640);
    });
    xit('7. 10001st prime', () => {
        const nthPrime = require('./7-10001st-prime.js');
        expect(nthPrime(10001)).to.equal(13);
    }); 
    it('8. Largest product in a series', () => {
        const largestProductInSeries = require('./8-largest-product-in-series.js');
        expect(largestProductInSeries(4, '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450')).to.equal(5832);
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