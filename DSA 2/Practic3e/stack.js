class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    getSize() {
        return this.stack.length;
    }

    push(ele) {
        this.stack.push(ele);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stack[this.getSize() - 1];
        }
    }

    print() {
        console.log(this.stack);
    }
}

function reverse(input) {
    const newStack = new Stack();
    let n = input.length;

    for (let i = 0; i < n; i++) {
        newStack.push(input[i]);
    }

    let reverseString = '';
    while (!newStack.isEmpty()) {
        reverseString += newStack.pop();
    }

    return reverseString;
}

console.log(reverse("sreehari"));
