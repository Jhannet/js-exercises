function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

const newStr = disemvowel("This website is for losers LOL!");
console.log(newStr);