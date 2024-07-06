function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivotEle = arr[arr.length-1]
    let leftArr =  []
    let rightArr = []
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivotEle){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }
    return [...quickSort(leftArr),pivotEle,...quickSort(rightArr)]
}

//Time Complexity O(n^2) - worst case
// popular because its average Case COmplexity is O(nlogn)
console.log(quickSort([1,8,2,8,3,7,4,7,5,6]));
console.log(quickSort([0,9,8,7,6,5,4,3,2,1]));
console.log(quickSort([1,2,3,4,5,6,7,8,9]));

