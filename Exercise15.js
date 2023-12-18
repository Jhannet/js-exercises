function candies(kids){
    if (kids.length <= 1)
        return -1;
    
    return kids.sort((n1, n2) => n2 - n1).reduce((result, candyCount) =>  result + (kids[0] - candyCount), 0);
}

console.log(candies([5,8,6,4]));