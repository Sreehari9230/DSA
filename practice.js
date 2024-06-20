// //BINARY SEARCH

// function BinarySearch(arr,target) {
//     let start = 0
//     let end = arr.length-1
//     while(end>=start){
//         let middle = Math.floor((start+end)/2)
//         if(arr[middle] == target){
//             return middle
//         }else if(arr[middle]>target){
//             end = middle - 1
//         }else{
//             start = middle + 1
//         }
//     }
//     return -1
// }

// console.log(BinarySearch([1,2,3,4],20));



// //recur sum  od arr

// function SumofArr(arr){
//     if(arr.length<=0){
//         return 0
//     }else{
//         return arr[arr.length-1] + SumofArr(arr.slice(0,arr.length-1))
//     }
// }

// console.log(SumofArr([1,2,3,4,5,6,7,8,9,10]))


// //recur product of Arr

// function PofArr(arr){
//     if(arr.length <= 0){
//         return 1
//     }else{
//         return arr[arr.length-1] * PofArr(arr.slice(0,arr.length-1))
//     }
// }
// console.log(PofArr([1,2,3,4,10]))


// //fibonacci

// function  fib(n){
//     if(n <= 1){
//         return n
//     }else{
//         return fib(n-1) + fib(n-2)
//     }
// }
// console.log(fib(6))



//factorial

// function fact(n){
//     if(n<=1){
//         return 1
//     }else{
//         return n*fact(n-1)
//     }
// }

// console.log(fact(5));


//rVowel

// function Rvowels(str){
//     if(str == ''){
//         return str
//     }
//     let fChar = str.substr(0,1)
// if('AEIOUaeiou'.includes(fChar))
//     fChar = ''
// return fChar + Rvowels(str.substr(1))
// }

// console.log(Rvowels('helloohowareyou'));



// singlylinkedlist
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     getSize() {
//         return this.size
//     }

//     isEmpty() {
//         return this.size === 0
//     }


//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let curr = this.head
//             while (curr.next) {
//                 curr = curr.next
//             }
//             curr.next = node
//         }
//         this.size++
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }
    

//     print() {
//         if (this.isEmpty()) {
//             console.log('ll is empty');
//         } else {
//             let curr = this.head
//             let ll = ''
//             while (curr) {
//                 ll += `${curr.value} `
//                 curr = curr.next
//             }
//             console.log(ll)
//         }
//     }
// }



// let list = new LinkedList()

// list.append(10)
// list.prepend(0)
// list.print()
// console.log(list.getSize());