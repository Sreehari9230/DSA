class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail - null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value) {
        const node = new Node(value)
        if(list.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if(list.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node  
            this.tail = node
        }
        this.size++
    }

    removeFirst() {
        if(list.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
        
    }

    removeLast() {
        if(list.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size == 1){
            this.tail = null
            this.head = null
        }else{
            let prev = this.head
            while(prev.next!==this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value

    }

    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }
}

const list = new LinkedList()
console.log('list is empty?', list.isEmpty());
console.log('list size', list.getSize());
list.print()

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)

list.print()
console.log('list size', list.getSize());

console.log(list.removeFirst())
list.print()
console.log('list size', list.getSize());

console.log(list.removeLast())
list.print()
console.log('list size', list.getSize());



