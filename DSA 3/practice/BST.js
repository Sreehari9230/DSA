class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class Btree {
    constructor() {
        this.root = null
        this.size = 0
    }

    noNode() {
        return this.size
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
            this.size++
        } else {
            this.insertNode(this.root, newNode)
            this.size++
        }
    }

    insertNode(root, newNode) {
        if (newNode.value > root.value) {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        } else {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value == value) {
                return true
            } else if (root.value < value) {
                this.search(root.left, value)
            } else {
                this.search(root.right, value)
            }
        }
    }

    // DFS
    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);

        }
    }
    // BFS
    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    heightOfTree(root) {
        if (root == null) {
            return -1
        } else {
            let leftHeight = this.heightOfTree(root.left)
            let rightHeight = this.heightOfTree(root.right)

            return Math.max(leftHeight, rightHeight) + 1
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root == null) {
            return root
        }
        if (root.value > value) {
            root.left = this.deleteNode(root.left, value)
        }
        else if (root.value < value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            // if value is not found
            if (!root.left && !root.right) {
                return null
            }

            // if the deleteing node has 1 or no children
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root

    }

    checkIdentical(root1, root2) {
        if (!root1 && !root2) {
            return true
        }
        if (!root1 || !root2) {
            return false
        }
        if (root1.value != root2.value) {
            return false
        }
        return (
            this.checkIdentical(root1.right, root2.right) &&
            this.checkIdentical(root1.left, root2.left)

        )
    }

    validateBST(root, min, max) {
        if (root == null) {
            return true
        }
        if (max != null && root.value >= max) {
            return false
        }
        if (min != null && root.value <= min) {
            return false
        }

        return (
            this.validateBST(root.left , min,root.value) &&
            this.validateBST(root.right,root.value,max)
        )
    }

}


const bst = new Btree()
const bst2 = new Btree()
bst.insert(10)
bst.insert(99)
bst.insert(88)
bst.insert(1)
bst.insert(145)
// bst2.insert(1111)
// bst2.insert(99)
// bst2.insert(88)
// bst2.insert(1)
// bst2.insert(145)
// console.log(bst.checkIdentical(bst.root, bst2.root));
// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
// console.log(bst.heightOfTree(bst.root));
// bst.delete(99)
// console.log(bst.noNode())
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()
console.log(bst.validateBST(bst.root));

// // Example with an invalid BST
const invalidBST = new Btree();
invalidBST.root = new Node(10);
invalidBST.root.left = new Node(5);
invalidBST.root.right = new Node(20);
invalidBST.root.left.left = new Node(3);
invalidBST.root.left.right = new Node(12);

console.log(invalidBST.validateBST(invalidBST.root)); // Should return false