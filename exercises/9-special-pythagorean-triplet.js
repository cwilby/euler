/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9+16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

module.exports = (product) => {
    for(let a = 0; a < Number.MAX_SAFE_INTEGER; a++) {
        for (let b = 0; b < Number.MAX_SAFE_INTEGER; b++) {
            for(let c = 0; c < Number.MAX_SAFE_INTEGER; c++) {
                if(Math.pow(a,2)+Math.pow(b,2) === Math.pow(c,2)) {
                    if(a+b+c === 1000) return a*b*c;
                }
            }
        }
    }
};