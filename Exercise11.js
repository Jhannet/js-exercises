function isIsogram(str){
    const array = str.toLowerCase().split("");
    return array.every((character, index) => array.indexOf(character) === index);
}

console.log(isIsogram("Dermatoglyphics")); // true