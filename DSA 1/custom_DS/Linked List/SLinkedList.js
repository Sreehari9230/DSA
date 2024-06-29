class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null
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
        } else {
            let node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    removeValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            // return null
        }
    }
    removeIndex(index) {
        if (index >= this.size || index < 0) {
            return null
        }
        let removeNode
        if (index == 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            i++
            curr = curr.next
        }
        return -1
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
    prepend(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    reversing() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    // reverse(){
    //     if(this.isEmpty()){
    //         null
    //     }else{
    //         let prev = null
    //         let curr = this.head
    //         while(curr){
    //             let next = curr.next
    //             curr.next = prev
    //             prev = curr
    //             curr = next
    //         }
    //         this.head = prev
    //     }
    // }

    // reverse123(){
    //     let prev = null
    //     let curr  =this.head
    //     while(curr){
    //         let next = curr.next
    //         curr.next = prev
    //         prev = curr
    //         curr = next
    //     }
    //     this.head = prev

    // }
    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head
            let list = []
            while (curr) {
                list.push(curr.value)
                curr = curr.next
            }
            console.log(list);
        }
    }

    isCirular() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let slow = this.head
            let fast = this.head
            while (fast != null && fast.next != null) {
                slow = slow.next
                fast = fast.next.next
                if (slow === fast) {
                    return true
                }
            }
            return false

        }
    }
}

const Llist = new LinkedList()

console.log(Llist.getSize())
console.log(Llist.isEmpty())
Llist.append(10)
Llist.prepend(20)
Llist.append(30)
Llist.prepend(40)
Llist.print()
Llist.reversing()
Llist.print()
Llist.removeValue(10)
Llist.print()
Llist.insert(100, 2)
Llist.insert(100, 0)
Llist.removeIndex(0)
Llist.removeValue(100)
Llist.print()
console.log(Llist.getSize())
console.log(Llist.isEmpty())
console.log(Llist.search(40))
console.log(Llist.isCirular())


