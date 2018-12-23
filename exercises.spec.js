const { expect } = require('chai');
const exercises = require('./exercises');

describe('Project Euler', () => {
    it('should calculate multiples of 3 and 5', () => {
        const { sumMultiplesOf3And5 } = exercises;
        expect(sumMultiplesOf3And5(10)).to.equal(23);
    });
});