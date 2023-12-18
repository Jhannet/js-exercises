function filter_list(list) {
    return list.filter(elment => typeof elment === 'number');
}

console.log(filter_list([1,'a','b',0,15])) // [1,0,15]