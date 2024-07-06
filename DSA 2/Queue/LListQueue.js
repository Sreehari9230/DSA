class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const dequeuedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        return dequeuedValue;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }
}

// Queue example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.front());  // Output: 1
console.log(queue.dequeue());  // Output: 1
console.log(queue.isEmpty());  // Output: false