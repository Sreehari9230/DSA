


// //change every vowel in the string to0

// //hellohowareyousreehari

// function vowelsTo0(str) {
//     if (str == '') {
//         return str
//     }
//     let firstChar = str.substr(0, 1)
//     if ('AEIOUaeiou'.includes(firstChar)) {
//         firstChar = 0
//     }
//     return firstChar + vowelsTo0(str.substr(1))
// }
// console.log(vowelsTo0('hellohowareyousreehari'));

// function SumofArr(arr) {
//     if (arr.length == 0) {
//         return 0
//     }
//     return arr[arr.length - 1] + SumofArr(arr.slice(0, arr.length - 1))
// }
// console.log(SumofArr([1, 2, 3, 4]))

// function ProductofArr(arr) {
//     if (arr.length == 0) {
//         return 1
//     }
//     return arr[arr.length - 1] * ProductofArr(arr.slice(0, arr.length - 1))
// }
// console.log(ProductofArr([1, 2, 3, 4]));

// function FibNum(n) {
//     if (n <= 1) {
//         return n
//     }
//     return FibNum(n-1) + FibNum(n-2)
// }
// console.log(FibNum(10))



// let obj = { a: 1, b: 82, c: 92, d: 2, e: 0 };

// let sorted = Object.entries(obj).sort(([, value1], [, value2]) => value1 - value2)
// let objectified = Object.fromEntries(sorted)
// console.log(objectified);



let str = 'sreehari has just lost his 13th week review and he has to pay 1000 within a week'
let vowels = 'aeiou'
let count = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 }
for (let char of str) {
    if (vowels.includes(char)) {
        count[char]++
    }
}
console.log(count);
let sorted = Object.entries(count).sort(([, v1], [, v2]) => v1 - v2)
let onjectified = Object.fromEntries(sorted)
console.log(onjectified);