// // reverse order of words
// //input: "the sky os blue"           output:"blur is sky the"
// // input : "      hello world    "   output:"world hello"

// function reverseWord(str) {
//     const splitArr = str.split(' ')
//     const stack = []
//     for (let i of splitArr) {
//         stack.push(i)
//     }

//     let output = ''

//     while (stack.length != 0) {
//         let curr = stack.pop()
//         if (curr) {
//             output += " " + curr
//         }
//     }
//     return output.trim()

// }

// console.log(reverseWord("the sky is blue"));



// // /valid paranthesis also





class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function reverseStringUsingStack(inputString) {
    const stack = new Stack();
    const n = inputString.length;

    // Push all characters of the string onto the stack
    for (let i = 0; i < n; i++) {
        stack.push(inputString[i]);
    }

    // Pop all characters from the stack and form the reversed string
    let reversedString = '';
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// Usage
const inputString = "hello";
const reversedString = reverseStringUsingStack(inputString);
console.log("Original String:", inputString);
console.log("Reversed String:", reversedString);
