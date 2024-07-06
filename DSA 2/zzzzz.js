class Stack {
    constructor() {
        this.stack = []
    }

    isEmpty() {
        return this.stack.length == 0
    }
    getSize() {
        return this.stack.length
    }
    push(ele) {
        this.stack.push(ele)
    }
    pop() {
        return this.stack.pop()
    }
    print() {
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i])
        }
    }
}

function search(ele) {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    for (let i = 0; i < stack.getSize()-1; i++) {
        let compare = stack.pop()
        if (compare === ele) {
            return true
        }
    }
    return false

}

console.log(search(1));