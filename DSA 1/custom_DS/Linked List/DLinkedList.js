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

    }
    removebyIndex(index) {
        
    }
    removebyValue(value) {
        if(this.isEmpty()){
            return null
        }else if(value === this.head.value){
            this.head = this.head.next
            this.size--
        }else{
            let prev = this.head
            while(prev.head && prev.next.value!=value){
                prev = prev.next
            }
            if(prev.next){
                let rNode = prev.next
                prev.next = rNode.next
                this.size--
                return rNode
            }
        }
    }
    append(value) {
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    prepend(value) {
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    print() {
        if(this.isEmpty()){
            return null
        }else{
            let curr = this.head
            let list = []
            while(curr){
                list.push(curr.value)
                curr = curr.next
            }
            console.log(list)
        }
    }
    
    LLreverese() {
        if(this.isEmpty()){
            console.log('list is empty');
            return null
        }else{
            let curr = this.head
            let prev = null
            this.tail = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                curr.prev = next
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    removeFromend(){

    }
    removeFromFront(){
        
    }
}


let List = new DLinkedList()

List.append(1)
List.prepend(2)
List.append(3)
List.prepend(4)
List.append(5)
List.prepend(6)
List.print()
List.LLreverese()
List.print()
console.log(List.getSize());

