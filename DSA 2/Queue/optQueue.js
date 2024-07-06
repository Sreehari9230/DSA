class Queue{
    constructor() {
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front == 0
    }

    getSize(){
        return this.rear - this.front
    }

    peek(){
        return this.items[this.front]
    }
    
    print(){
        
        console.log(Object.values(this.items));
    }
}

const queue = new Queue

console.log(queue.getSize());
console.log(queue.isEmpty());
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(422)
console.log(queue.getSize());
console.log(queue.peek());
queue.dequeue()
console.log(queue.isEmpty());
console.log(queue.getSize());
console.log(queue.peek());
queue.print()
