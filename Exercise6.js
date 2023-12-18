function getGiftsToRefill(a1, a2, a3) {
    const res = [];

    for (let i = 0; i < a1.length; i++) {
        if (a2.indexOf(a1[i]) === -1 && a3.indexOf(a1[i]) === -1) {
            res.push(a1[i])
        }
    }

    for (let i = 0; i < a2.length; i++) {
        if (a1.indexOf(a2[i]) === -1 && a3.indexOf(a2[i]) === -1) {
            res.push(a2[i])
        }
    }

    for (let i = 0; i < a3.length; i++) {
        if (a1.indexOf(a3[i]) === -1 && a2.indexOf(a3[i]) === -1) {
            res.push(a3[i])
        }
    }

    return res.filter((gift, index) => res.indexOf(gift) === index);
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']
console.log(gifts)