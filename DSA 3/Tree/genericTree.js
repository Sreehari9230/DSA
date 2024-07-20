class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }

    removeChild(node) {
        this.children = this.children.filter(child => child !== node);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Insert a node into the tree
    insert(parentValue, value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            const parent = this.findBFS(parentValue);
            if (parent) {
                parent.addChild(newNode);
            } else {
                console.log(`Parent node with value ${parentValue} not found.`);
            }
        }
    }

    // Breadth-First Search to find a node by value
    findBFS(value) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            if (node.value === value) {
                return node;
            }
            for (const child of node.children) {
                queue.push(child);
            }
        }
        return null;
    }

    // Depth-First Search (pre-order) traversal
    traverseDFS(node, callback) {
        if (node) {
            callback(node);
            for (const child of node.children) {
                this.traverseDFS(child, callback);
            }
        }
    }

    // Breadth-First Search traversal
    traverseBFS(callback) {
        const queue = [this.root];
        while (queue.length) {
            const node = queue.shift();
            callback(node);
            for (const child of node.children) {
                queue.push(child);
            }
        }
    }

    // Print the tree
    print() {
        if (!this.root) {
            console.log("The tree is empty.");
            return;
        }

        const newline = new TreeNode("|");
        const queue = [this.root, newline];
        let result = "";

        while (queue.length) {
            const node = queue.shift();
            result += node.value + " ";
            if (node === newline && queue.length) {
                queue.push(newline);
            }
            for (const child of node.children) {
                queue.push(child);
            }
        }

        console.log(result.trim());
    }
}

// Example usage:
const tree = new Tree();
tree.insert(null, "A");  // root node
tree.insert("A", "B");
tree.insert("A", "C");
tree.insert("A", "D");
tree.insert("B", "E");
tree.insert("B", "F");
tree.insert("C", "G");
tree.insert("D", "H");
tree.insert("D", "I");

console.log("Tree structure:");
tree.print();  // Output: A B C D E F G H I

console.log("DFS traversal:");
tree.traverseDFS(tree.root, node => console.log(node.value));  // Output: A B E F C G D H I

console.log("BFS traversal:");
tree.traverseBFS(node => console.log(node.value));  // Output: A B C D E F G H I
