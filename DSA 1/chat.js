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

    append(value) {
        const node = new Node(value)
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
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            this.head = node
            node.next = prev
        }

    }

    insert(value, index) {
        if (index > this.size || index < 0) {
            console.log('Invalid Index')
        }
        else if (index == 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removefromFront() {

    }

    removefromEnd() {

    }

    removebyIndex(index) {

    }

    removebyValue(value) {

    }

    display() {
        if (this.isEmpty()) {
            console.log('The list is empty');
        } else {
            let curr = this.head
            let linkedlist = []
            while (curr) {
                linkedlist.push(curr.value)
                curr = curr.next
            }
            console.log(linkedlist)

        }
    }

    reverse() {

    }

    sumofList() {

    }

    search(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            return -1
        } else {
            let curr = this.head
            let i = 0
            while (curr) {
                if (curr.value === value) {
                    return i
                }
                i++
                curr = curr.next
            }
            return -1
        }
    }
}

const list = new LinkedList()

list.display()
list.append(10)
list.append(20)
list.append(40)
list.append(50)
list.prepend(0)
list.insert(30,3)
list.insert(-10,0)
list.display()
console.log(list.search(40))
