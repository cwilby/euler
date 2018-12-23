
module.exports = {
    sumMultiplesOf3And5(input) {    
        let sum = 0;
        for (let i = 0; i < input; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    },
    findEvenFibSum(max) {
        let sum = 0;
        (function fib(a=0,b=1) {
            const next = a+b;
            if(next % 2 == 0) sum += next;
            return next < max ? fib(b,next) : next;
        })()
        return sum;
    }
};

module.exports.findEvenFibSum(400000);