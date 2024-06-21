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
    //O(1)
    prepend(value) {
        const node = new Node(value)
        //if the list is empty
        if (this.isEmpty()) {
            this.head = node
        }//if the list is not empty
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    //O(n)
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

    

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return null
        } else if (index == 0) {
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

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
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

    removeValue(value) {
        if (list.isEmpty()) {
            return null
        }
        //removing head node is always O(1)
        if (this.head.value === value) {
            // this.head.value === value
            this.head = this.head.next
            this.size--
            return value
            //removing a  ode in general have  O(1)  
        } else {
            let prev = this.head
            while (prev.next && prev.next.value != value) {
                prev = prev.next
            }
            if (prev.next) {
                const removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
            return null

        }
    }

    search(value) {
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
           if(curr.value === value){
            return i
           } 
           curr = curr.next
           i++
        }
        return -1
    }
    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
          let next = curr.next;
          curr.next = prev;
          prev = curr;
          curr = next;
        }
        this.head = prev;
      }


    print() {
        if (this.isEmpty()) {
            console.log("the list is empty")
        } else {
            let curr = this.head
            let listValues = []
            while (curr) {
                listValues.push(curr.value)
                curr = curr.next
            }
            console.log(listValues);
        }
    }
    isCircular() {
        if (this.isEmpty()) {
            return false; // An empty list is not circular
        }
    
        let slow = this.head;
        let fast = this.head;
    
        while (fast !== null && fast.next !== null) {
            slow = slow.next;       // Move slow pointer one step
            fast = fast.next.next;  // Move fast pointer two steps
    
            if (slow === fast) {
                return true; // Cycle detected
            }
        }
        return false; // No cycle
    }
    

    deleteMiddle() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.size === 1) {
            const value = this.head.value;
            this.head = null;
            this.size--;
            return value;
        }
        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast!=null && fast.next != null){
            fast = fast.next.next
            slow = slow.next
            prev = slow
        }

        let midEle = slow.value
        if(prev){
        prev.next = slow.next
        }else{
            this.head = this.head.next
        }
        this.removeValue(midEle)
        return midEle
    }

    SumofList(node = this.head){
        if(node == null){
            return 0
        }else{
            return node.value + this.SumofList(node.next)
        }
    }
}




const list = new LinkedList()
// console.log('list is empty?', list.isEmpty());
// console.log('list size', list.getSize());
// list.print()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.append(6)
list.append(7)
list.append(8)
list.append(9)
list.append(10)
list.append(11)
list.print()
console.log(list.SumofList());
// console.log('list size', list.getSize());

// console.log('deleted element',list.deleteMiddle())
// list.print()

// console.log('deleted element',list.deleteMiddle())
// list.print()

// console.log('deleted element',list.deleteMiddle())
// list.print()
// console.log(list.isCircular());








