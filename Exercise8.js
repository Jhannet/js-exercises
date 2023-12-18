function squareDigits(num){
    const digits = num.toString().split('');
    const resultNumber = digits.reduce((result, element) => `${result}${element * element}`, "");
    return +resultNumber;
}

console.log(squareDigits(9119));


