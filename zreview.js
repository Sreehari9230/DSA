// // class Node{
// //     constructor(value) {
// //         this.value = value
// //         this.next = null
// //         this.prev = null
// //     }
// // }


// // class Linkedlist{
// //     constructor() {
// //         this.head = null
// //         this.size = 0
// //     }

// //     getSize(){
// //         return this.size
// //     }

// //     isEmpty(){
// //         return this.size ===0
// //     }

// //     insertion(index,value){
// //         const node = new Node(value)
// //         if(index>this.size || index<0){
// //             return null
// //         }else if(index == 0){
// //             this.head = node
// //              node.next = this.head.next 
// //             node.prev = null
// //             node.next.prev = this.head
// //         }else{
// //             let prevele = this.head
// //             for(let i=0;i<index-1;i++){
// //                 prevele = prevele.next
// //             }
// //             if(prevele.next){
// //                 prevele.next = node
// //                 node.prev = prevele
// //                 node.next = prevele.next.next
// //             }
// //         }
// //         this.size++
// //     }
// // }



// // function binarySearch(arr,target){
// //     let start = 0
// //     let end = arr.length-1
// //     while(end>=start){
// //         let middle = Math.floor((start+end)/2)
// //         if(arr[middle] == target){
// //             return middle
// //         }else if(arr[middle]>target){
// //             end = middle - 1
// //         }else{
// //             start = middle + 1
// //         }
// //     }
// //     return -1
// // }

// // console.log(binarySearch([1,2,sreeharim'

// let str = 'my name is sreehari'
// let strArr = str.split('')
// let output = 0
// for(let i=0;i<strArr.length;i++){
//     if('AEIOUaeiou'.includes(strArr[i])){
//         output++
//     }
// }
// console.log(output);


// function sum(ll){
//     if(ll.size < 0){
//         return 0
//     }else{
//         return ll.tail.value + sum(ll.slice(0,ll.length-1))
//     }
// }
// console.log(sum([1,2,3,4]));




//sum of values of linked list using recursion
// insersion in a doubly linked list
//there is a string we need to find the number of each vowels in it   like a:1,b:2
//implement recursion in biry search