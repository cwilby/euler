module.exports = (adjancency, number) => {
    const numberString = number.toString();
    let largestProduct = 0;
    for(var i = 0; i < numberString.length; i++) {
        const number = numberString.substring(i, i+adjancency);
        const digits = number.split('');
        const product = digits.reduce((product, digit) => product * digit, 1);
        largestProduct = product > largestProduct ? product : largestProduct;
    }
    return largestProduct;
};