function distributeGifts(packOfGifts, reindeers) {
    const capacity = reindeers.reduce((partialSum, reindeer) => partialSum + reindeer.length * 2, 0)
           / packOfGifts.reduce((partialSum, pack) => partialSum + pack.length, 0);
    return Math.trunc(capacity);
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
console.log(distributeGifts(packOfGifts, reindeers)) // 2