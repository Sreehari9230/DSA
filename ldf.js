class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
        this.tail = null
    }

    getSize(){
        return LinkedList.size
    }

    isEmpty(){
        return this.size === null
    }

    insert(value,index){
        if(this.isEmpty()){
            this.head = value
            this.tail = value
            this.tail.next = this.head

        }else if(index === 0){
            this.head.next = this.head
            this.head.value = value
            this.tail = this.head.next
            this.tail.next = this.head
        }else{
            let t
        }
    }
}

// // 1,4,5,6,,8,10,22,34
// function Binary(arr,value){
//     let start = 0
//     let end = arr.length-1
//     while(end>start){
//         let middle = Math.floor((start+end)/2)
//         if(arr[middle] == value){
//             arr[middle] = 0
//             return arr
//         }else if(arr[middle]>value){
//             end = middle - 1
//         }else{
//             start = middle+1
//         }
//     }
// }

// console.log(Binary([1,4,5,6,8,10,22,34],22))


// hellosreeharihowareyou

// function rec(str){
//     if(str = ''){
//         return str
//     }
//     return string.substr(0,1)
// }

let str = 'hellosreeharihowareyou'
let strArr = str.split('')
let output = []
for(let i=0;i<strArr.length;i++){
    if(strArr[i] == 'o'){
        strArr[i] = 'k'
    }
     output.push(strArr[i])
}
console.log(output.join(''))
