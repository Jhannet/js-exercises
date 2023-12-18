function toWeirdCase(str){
    return str.split(' ').map(
        word => word.split('').map((letter, index) => {
            return index == 0 || index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
        }).join('')
    ).join(' ');
}

console.log(toWeirdCase('This is a test')); //'ThIs Is A TeSt'