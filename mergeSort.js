
function mergeSort(a) {
    console.log("This was printed recursively");

    if(a.length <= 1) {
        return a;
    } else {
        const mid = Math.floor(a.length / 2);
        const left = a.slice(0, mid);
        const right = a.slice(mid);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        return merge(sortedLeft, sortedRight);
    }
}

// This builds them up again into sorted arrays
function merge(left, right, array=[], leftIndex = 0, rightIndex = 0) {
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array.push(left[leftIndex]);
            leftIndex++;
        } else {
            array.push(right[rightIndex]);
            rightIndex++;
        }
    }
    
    return array.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))