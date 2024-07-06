// Bubble Sort
function BS(arr){
    let swapped
    do {
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    } while (swapped);
    return arr
}
console.log(BS([1,7,3,9,2]));

// // insertionSort
function IS(arr) {
    for(let i=0;i<arr.length;i++){
        let nti = arr[i]
        let j = i - 1
        while(j>=0 && arr[j]>nti){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j+1] = nti
    }
    return arr
}
console.log(IS([1,7,3,9,2]));

// merge sort
function MG(arr) {
    if(arr.length<2){
        return arr
    }else{
        let mid = arr.length/2
        let lArr = arr.slice(0,mid)
        let rArr = arr.slice(mid)
        return merge(MG(lArr),MG(rArr))
    }
}
function merge(lArr, rArr) {
    let sortedArr = []
    while (lArr.length && rArr.length) {
        if (lArr[0] < rArr[0]) {
            sortedArr.push(lArr.shift())
        } else {
            sortedArr.push(rArr.shift())
        }
    }
    return [...sortedArr, ...lArr, ...rArr]
}
console.log(MG([1, 7, 3, 9, 2]));

// // Qsort
function QS(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let pivot = arr[arr.length - 1]
        let lArr = []
        let rArr = []
        for (let i = 0; i < arr.length-1; i++) {
            if (arr[i] > pivot) {
                rArr.push(arr[i])
            } else {
                lArr.push(arr[i])
            }
        }
        return [...QS(lArr), pivot, ...QS(rArr)]

    }
}
console.log(QS([1, 7, 3, 9, 2]));

//selection Sort
function SS(arr){
    for(let i=0;i<arr.length;i++){
        let MinIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[MinIndex]>arr[j]){
                MinIndex = j
            }
        }
        if(MinIndex != i){
            [arr[i],arr[MinIndex]] = [arr[MinIndex],arr[i]]
        }
    }
    return arr
}
console.log(SS([1, 7, 3, 9, 2]));