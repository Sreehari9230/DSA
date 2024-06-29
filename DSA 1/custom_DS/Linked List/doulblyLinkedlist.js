class Node{
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class doublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size == 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }
    
    append(value){
        let node = new Node(value)
        if(this.size ==0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }
    
    removeFrmFront(){
        if(this.size == 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    remove(index){
        if(index>this.size||index<0){
            return null
        }else if(index == 0){
            this.removeFrmFront()
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            if(prev.next){
                let rNode = prev.next
                prev.next = rNode.next
                rNode.next.prev = prev
            }
            this.size--
        }
    }

    removeFrmEnd(){
        if(this.size == 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log('the list os empty')
        }else{
            let curr = this.head
            let list = ''
            while(curr){
                list +=  `${curr.value} `
                curr = curr.next 
            }
            console.log(list);
        }
    }

    printInReverse(){
        if (this.isEmpty()) {
            console.log('the list is empty')
        }else{
            let curr = this.tail
            let list = ''
            while(curr){
                list += `${curr.value} `
                curr = curr.prev
            }
            // console.log(list)
            return list
            // console.log(list.join(' '));

        }
    }
    isCircluar(){
        if(this.isEmpty()){
            console.log('liat is empty')
        }else{
            let slow = this.head
            let fast = this.head
            while(fast !=null && fast.next != null){
                slow = slow.next
                fast = fast.next.next
                if(slow == fast){
                    return true
                }
            }
            return false
        }
    }
    insert(value,index){
        const node = new Node(value)
        if(index>=this.size || index<0){
            return null
        }else if(index == 0){
            this.prepend(value)
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            let next = prev.next
            prev.next = node
            node.prev = prev
            node.next = next
            if(next){
                next.prev = node
            }
            this.size++
        }
    }
}


const list = new doublyLinkedList()


// console.log('is this list empty :', list.isEmpty());
// console.log('What is the size of this list :', list.getSize());
// list.prepend(10)
// list.print()
// console.log('What is the size of this list :', list.getSize());
// list.prepend(0)
// list.append(20)
// console.log('What is the size of this list :', list.getSize());
// console.log(list.print())
// console.log(list.printInReverse())
// console.log(list.isCircuar())

list.append(1)
list.append(2)
list.append(4)
// list.print()
list.insert(3,2)
list.remove(0)
list.print()
// console.log(list.isCircular());






