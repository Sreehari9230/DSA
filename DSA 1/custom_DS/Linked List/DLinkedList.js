class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }
    getSize() {
        return this.size
    }
    insert(value, index) {
        if (index > this.size || index < 0) {
            return null
        } else if (index == 0) {
            this.prepend(value)
        } else if (index == this.size - 1) {
            this.append(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let next = prev.next
            prev.next = node
            node.next = next
            next.prev = node
            node.prev = prev
            this.size++
        }
    }
    removebyIndex(index) {
        if(index == this.size-1){
            this.removeFromEnd()
        }else if(index == 0){
            this.removeFromFront()
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
            prev.next.prev = prev
            this.size--
        }
    }
    removebyValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (value === this.head.value) {
            this.head = this.head.next
            this.size--
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                let rNode = prev.next
                prev.next = rNode.next
                this.size--
                return rNode
            }
        }
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print() {
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head
            let list = []
            while (curr) {
                list.push(curr.value)
                curr = curr.next
            }
            console.log(list)
        }
    }

    LLreverese() {
        if (this.isEmpty()) {
            console.log('list is empty');
            return null
        } else {
            let curr = this.head
            let prev = null
            this.tail = this.head
            while (curr) {
                let next = curr.next
                curr.next = prev
                curr.prev = next
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    removeFromFront() {
        if(this.size == 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }
    removeFromEnd() {
        if(this.size == 1){
            this.head = null
            this.tail  = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    sumofLL(node = this.head){
        if(node == null){
            return 0
        }else{
            return node.value + this.sumofLL(node.next)
        }
    }
}


let List = new DLinkedList()

// List.append(1)
// List.prepend(2)
// List.append(3)
// List.prepend(4)
// List.append(5)
// List.prepend(6)
// List.print()
// List.LLreverese()
// List.print()
// console.log(List.getSize());
List.append(1)
List.append(2)
List.append(3)
List.append(5)
// List.print()
List.insert(0,0)
// List.print()
List.insert(6,4)
// List.print()
List.insert(4,4)
List.print()
console.log(List.getSize());
// List.removeFromFront()
// List.removebyIndex(0)
// List.removebyIndex(5)
List.removebyIndex(3)
// List.removeFromEnd()
List.print()
console.log(List.getSize());
console.log(List.sumofLL());












