
module.exports = {
    sumMultiplesOf3And5(input) {    
        let sum = 0;
        for (let i = 0; i < input; i++) {
            if(i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
};