class Node {
    constructor(value) {
        this.next = null
        this.value = value
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
    print() {
        if (this.isEmpty()) {
            return null
        } else {
            let curr = this.head
            let list = ''
            while (curr) {
                list += `${curr.value} `
                curr = curr.next
            }
            console.log(list)
        }
    }
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            this.head = node
            node.next = curr
        }
    }
    insert(value, index) {
        if (index > this.size + 1 || index < 0) {
            return null
        } else {
            if (index == 0) {
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
    }
    removebyValue(value) {
        if (this.isEmpty()) {
            return null
        } else if (this.head.value == value) {
            this.head = this.head.next
            this.size--
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
            } else {
                console.log('this value dosnt exist in list');
            }
        }
    }
    removebyIndex(index) {
        if (index > this.size || index < 0 || this.isEmpty()) {
            return null
        }else if(index == 0){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let rNode = prev.next
            prev.next = rNode.next
            this.size++
        }
    }
    
}

const list = new LinkedList()

list.append(1)
list.append(1)
list.prepend(0)
list.insert(10, 3)
list.print()
list.removebyIndex(3)
list.print()