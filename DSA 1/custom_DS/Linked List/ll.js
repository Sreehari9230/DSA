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
        if (index < 0 || index > this.size) {
            return null
        }
        const node = new Node(value)
    
        if (index === 0) {
            node.next = this.head
            this.head = node
            this.size++
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
    
        }
    }
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value == value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.next && prev.next.value!=value){
                prev = prev.next
            }
            if(prev.next){
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
            }else{
                console.log('there is no element in list which is equal to value')
            }
        }
    }
    // prepend()
    print() {
        let curr = this.head
        let list = []
        while (curr) {
            list.push(curr.value)
            curr = curr.next
        }
        return list
    }

    printRev(){
        let curr = this.head
        let prev = null
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    // Convert array to singly linked list


}

const List = new LinkedList()

List.insert(10, 0)
List.insert(20, 1)
List.insert(30, 2)
console.log(List.print())

console.log(List.getSize());

List.removeValue(10)
console.log(List.print())
console.log(List.getSize());
List.printRev()

