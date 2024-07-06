function insertionSort(arr) {
    for(let i=0;i<arr.length;i++){
        let nti = arr[i]  //number to insert
        let j = i-1
        while(j>=0 && arr[j]>nti){
            arr[j+1] = arr[j]
            j = j-1

        }
        arr[j+1] = nti
    }
    return arr
}

//Time Complexity O(n^2)
console.log(insertionSort([1,7,2,9,2,0,3,7,5,8]));
console.log(insertionSort([1,2,3,4,5,6,7,8]));
console.log(insertionSort([8,7,6,5,4,3,2,1]));
