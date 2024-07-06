class Stack {
    constructor() {
        this.stack = []
    }

    push(ele) {
        this.stack.push(ele)
    }

    pop() {
        if (this.isEmpty()) {
            return 'stack is empty'
        } else {
            this.stack.pop()
        }
    }

    isEmpty() {
        return this.getSize() === 0
    }

    peek() {
        if (this.isEmpty()) {
            return 'stack is empty'
        } else {
            return this.stack[this.getSize() - 1]
        }
    }

    getSize(){
        return this.stack.length
    }

    print(){
        console.log(this.stack)
    }
}

const stack = new Stack()


console.log(stack.isEmpty())
console.log(stack.getSize())
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack.peek())
stack.print()
console.log(stack.isEmpty())
console.log(stack.getSize())
stack.pop()
stack.pop()
stack.pop()
stack.print()
console.log(stack.isEmpty())
console.log(stack.getSize())