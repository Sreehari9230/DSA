class Queue {
    constructor() {
        this.items = []

    }

    enqueue(element) {
        //O(n)
        this.items.push(element)
    }
    dequeue() {
        //O(n)
        return this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
    peek() {
        //O(1)
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue()

console.log(queue.isEmpty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
queue.print()
console.log(queue.peek());
