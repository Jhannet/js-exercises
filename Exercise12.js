String.prototype.toJadenCase = function () {
    const str = this;
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); // "How Can Mirrors Be Real If Our Eyes Aren't Real"