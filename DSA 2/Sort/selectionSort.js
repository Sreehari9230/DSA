function selectionSort(arr) {
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (minIndex !== i) {
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
            // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]  //or u can do this insted of that
        }
    }

    return arr
}

//time complexity  O(n^2)
//space Conplexyty O(1)
console.log(selectionSort([ 9, 8, 7, 6, 5, 4, 3, 2, 1]));