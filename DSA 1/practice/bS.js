//find target
// function Bsearch(arr, tar) {
//     let start = 0
//     let end = arr.length - 1
//     while (end >= start) {
//         let mid = Math.floor((start + end) / 2)
//         if (arr[mid] == tar) {
//             return mid
//         } else if (arr[mid] >= tar) {
//             end = mid - 1
//         } else {
//             start = mid + 1
//         }
//     }
//     return -1
// }
// console.log(Bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 47));

// //RecursionInBInarySearch
// function BRsearch(arr, tar, start = 0, end = arr.length - 1) {
//     if (start > end) {
//         return -1
//     } else {
//         let mid = Math.floor((start + end) / 2)
//         if (arr[mid] == tar) {
//             return mid
//         } else if (arr[mid] > tar) {
//             return BRsearch(arr, tar, start, mid - 1)
//         } else {
//             return BRsearch(arr, tar, mid + 1, end)
//         }
//     }
// }

// console.log(BRsearch([1, 2, 3, 4, , 6, 7], 5));

// let vowels = [[a,0],[e,0],[i,0],[o,0],[u,0]]

// function vOwElS(str) {
//     let vowels = { 'a': 0, 'e': '0', 'i': 0, 'o': 0, 'u': 0 }
//     for (let char of str) {
//         if ('AEIOUaeiou'.includes(char)) {
//             vowels[char]++
//         }
//     }
//     return vowels
// }
// console.log(vOwElS('hahahahahhaha'));