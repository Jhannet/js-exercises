function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let result = 0;
    let counter = 0;
    
    giftsCities.sort((first, next) => next - first);
    giftsCities.forEach((giftsCount, index) => {
        if (result + giftsCount <= maxGifts && counter < maxCities) {
            result += giftsCount;
            counter++;
        }
    });

    return result;
}

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20 (12 + 3 + 5)