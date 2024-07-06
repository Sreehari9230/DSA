function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
        console.log(swapped)
    } while (swapped);
    return arr
}
//Time Complexity  O(n^2)
console.log(bubbleSort([9, 8, 7, 6, 5])) //asending
// console.log(bubbleSort([5, 6, 7, 8, 9])) //desending
// console.log(bubbleSort([2, 7, 99, 8, 55])) //unsorted
