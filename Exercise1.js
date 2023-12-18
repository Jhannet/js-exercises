function wrapping(gifts) {
    return gifts.map(gift => {
        let wrapSide = "**";
        for(let index = 0; index < gift.length; index++){
            wrapSide += "*";
        }
        return `${wrapSide}\n*${gift}*\n${wrapSide}`;
    });
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(gifts)
console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */