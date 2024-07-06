//bubble sort  O(n^2)
function bS(arr) {
    let swapping
    do {
        swapping = false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapping = true
            }
        }
    } while (swapping);
    return arr
}

console.log(bS([2,1,3,1,4,1,5,1,6,1]));


// insertion Sort 
function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
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
console.log(insertionSort([2,1,3,1,4,1,5,1,6,1]));

// Quick Sort
function Qsort(arr) {
    if(arr.length<2){
        return arr
    }
    let lArr = []
    let rArr = []
    let pEle = arr[arr.length-1]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pEle){
            rArr.push(arr[i])
        }else{
            lArr.push(arr[i])
        }
    }
    return [...Qsort(lArr),pEle,...Qsort(rArr)]

}
console.log(Qsort([2,1,3,1,4,1,5,1,6,1]));


// merge sort
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    } else {
        let mid = arr.length / 2
        let lArr = arr.slice(0, mid)
        let rArr = arr.slice(mid)
        return merge(mergeSort(lArr), mergeSort(rArr))
    }
}

function merge(lArr, rArr) {
    let sortedArr = []
    while (lArr.length && rArr.length) {
        if (lArr[0] <= rArr[0]) {
            sortedArr.push(lArr.shift())
        } else {
            sortedArr.push(rArr.shift())
        }
    }
    return [...sortedArr, ...lArr, ...rArr]
}
console.log(mergeSort([2, 1, 3, 1, 4, 1, 5, 1, 6, 1]));

// Selection Sort
function SelectionSort(arr) {
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let minIndex = i
        for(let j=i+1;j<n;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }
        if(minIndex != i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
            // [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

console.log(SelectionSort([2, 1, 3, 1, 4, 1, 5, 1, 6, 1]));


