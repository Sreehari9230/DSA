class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.head = null;
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedValue = this.head.value;
        this.head = this.head.next;
        return poppedValue;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }
}


// Stack example
const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.peek());  // Output: 2
console.log(stack.pop());   // Output: 2
console.log(stack.isEmpty());  // Output: false