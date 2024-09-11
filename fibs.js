function fibs(n) {
    let array = [];
    for (i = 0; i < n; i++) {
        if (i <= 1) {
            array.push(i);
        } else {
            array.push(array[i - 1] + array[i - 2]);
        }
    }
    return array;
}

function fibsRec(n, fibs = [0, 1]) {
    console.log("This was printed recursively");

    if (n <= fibs.length) {
        return fibs.slice(0, n);
    } else {
        fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
        return fibsRec(n, fibs);
    }
}

console.log(fibsRec(8));