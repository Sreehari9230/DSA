function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

//time Complexity we rersivly divide arr to half so  O(log n) in the fist function
// second part is a while loop so linear O(n)
// so the total is O(n log n)  //one of the best time complexuty u can get when dorting
console.log(mergeSort([1,0,2,9,2,8,3,8,4,8,4,7,5,6]));
console.log(mergeSort([1,2,3,4,5,6,7,8,9]));
console.log(mergeSort([9,8,7,6,5,4,3,2,1]));