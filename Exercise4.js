function fitsInOneBox(boxes) {
    boxes.sort((first, next) => first.l - next.l);
    return boxes.every(
        (box, index) => index < boxes.length-1 ? box.l < boxes[index+1].l && box.w < boxes[index+1].w && box.h < boxes[index+1].h : true
        );
}

const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes)) // true