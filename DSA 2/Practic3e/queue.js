class Queue{
    constructor() {
        this.items = []
    }

    enqueue(ele){
        this.items.push(ele)
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length == 0
    }
    getSize(){
        return this.items.length
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[0]
    }
    print(){
        if(this.isEmpty()){
            return null
        }
        console.log(this.items)
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());
