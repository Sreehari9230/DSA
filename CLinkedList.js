class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }
    geSize() {
        return this.size
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            this.tail.next = this.head
        } else {
            this.tail.next = node
            this.tail = node
            this.tail.next = this.head
        }
        this.size++

    }
    deletebyValue(value) {
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head
            let prev = null

            if (curr.value == value) {
                if (this.head == this.tail) {
                    this.head = null
                    this.tail = null
                } else {
                    this.head = this.head.next
                    this.tail.next = this.head
                }
                this.size--
                return value
            }

            do {
                prev = curr
                curr = curr.next
            } while (curr != this.head && curr.value != value)

                if(curr.value == value){
                    prev.next = curr.next

                    if(curr == this.tail){
                        this.tail = prev
                    }
                    this.size--
                }
        }
    }

    display() {
        if (this.isEmpty()) {
            console.log('The List is empty')
        } else {
            let curr = this.head
            let ll = []
            do {
                ll.push(curr.value)
                curr = curr.next
            } while (curr != this.head);
            console.log(ll)
        }
    }

    isCirular(){
        if(this.isEmpty()){
            console.log('List is empty');
        }else{
            let slow = this.head
            let fast = this.head

            while(fast!=null && fast.next!=null){

                if(slow === fast){
                    return true
                }
            }
            return false

        }
    }


}


const list = new LinkedList()

console.log(list.geSize());
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
console.log(list.geSize());
list.display()
// list.deletebyValue(1)
// list.deletebyValue(5)
console.log(list.geSize());
list.display()
// console.log(list.deleteMiddle())
list.display()
console.log(list.isCirular());

