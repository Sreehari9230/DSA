// // function linearSearch(arr,target){
// //     for(let i=0;i<arr.length;i++){
// //         if(arr[i] === target){
// //             return i
// //         }
// //     }
// //     return -1
// // }
// // //Time Complexity - O(n)
// // //Space Complexity - O(1)

// // console.log('the target is at index: ', linearSearch([1,2,3,4,5,6],2))


// //Global linear Search
// function GlobalLinearSearch(arr,target){
//     const result = []
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             result.push(i)
//         }
//     }
//     if(result.length == 0){
//         return -1
//     }else{
//         return result
//     }
// }
// // //Time Complexity - O(n)
// // //Space Complexity - O(n)
// console.log('the target is at index: ', GlobalLinearSearch([1,2,3,4,5,6,2],2))





//1539. Kth missing positive Number

// arr = [2,3,4,7,11], k = 5
function findKth(arr, k) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k + count) {
            count++
        }
    }
    return k + count
}
console.log(findKth([2, 3, 4, 7, 11], 6))



//2529. Maximum Count of Positive Integer and Negative Integer