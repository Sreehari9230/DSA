///find target in an array

function BinarySearch(arr,target){
    let start = 0
    let end = arr.length-1
    while(start<=end){
        let middle = Math.floor((start+end)/2)
        if(arr[middle] == target){
            arr[middle] = 0
            return arr
        }else if(arr[middle] < target){
            start = middle + 1
        }else{
            end = middle - 1
        }
    }
    return 'target dosnt exist'
}

console.log(BinarySearch([1,2,3,4,5],33))


//change every vowel in the string to0

//hellohowareyousreehari

function vowelsTo0(str) {
    if (str == '') {
        return str
    }
    let firstChar = str.substr(0, 1)
    if ('AEIOUaeiou'.includes(firstChar)) {
        firstChar = 0
    }
    return firstChar + vowelsTo0(str.substr(1))
}
console.log(vowelsTo0('hellohowareyousreehari'));

function SumofArr(arr) {
    if (arr.length == 0) {
        return 0
    }
    return arr[arr.length - 1] + SumofArr(arr.slice(0, arr.length - 1))
}
console.log(SumofArr([1, 2, 3, 4]))

function ProductofArr(arr) {
    if (arr.length == 0) {
        return 1
    }
    return arr[arr.length - 1] * ProductofArr(arr.slice(0, arr.length - 1))
}
console.log(ProductofArr([1, 2, 3, 4]));

function FibNum(n) {
    if (n <= 1) {
        return n
    }
    return FibNum(n-1) + FibNum(n-2)
}
console.log(FibNum(10))