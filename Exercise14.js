function isValidWalk(walk) {
    if (walk.length != 10)
        return false;

    let nCount = 0;
    let sCount = 0;
    let wCount = 0;
    let eCount = 0;

    walk.forEach(element => {
        switch (element) {
            case "n": nCount++;
                break;
            case "s": sCount++;
                break;
            case "w": wCount++;
                break;
            case "e": eCount++;
                break;
        }
    });
    return nCount === sCount && wCount === eCount;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));