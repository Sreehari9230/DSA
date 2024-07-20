class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left == null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right == null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left,value)
            }else {
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    heightOfTree(root) {
        if (root == null) {
            return 0;
        } else {
            // Recursively calculate the height of left and right subtrees
            let leftHeight = this.heightOfTree(root.left);
            let rightHeight = this.heightOfTree(root.right);
            
            // Return the greater height of the two subtrees and add 1 for the current node
            return Math.max(leftHeight, rightHeight) + 1;
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value<root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        } else {
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    checkIdentical(root1, root2) {
        if(!root1 && !root2) {
            return true;
        }
        if(!root1 || !root2) {
            return false;
        }
        if(root1.value !== root2.value) {
            return false;
        }
    
        return (
            this.checkIdentical(root1.left, root2.left) && 
            this.checkIdentical(root1.right, root2.right)
        );
    }

        // Function to validate the BST
        isValidBST(root, min = null, max = null) {
            if (root === null) {
                return true;
            }
            if (min !== null && root.value <= min) {
                return false;
            }
            if (max !== null && root.value >= max) {
                return false;
            }
            return (
                this.isValidBST(root.left, min, root.value) &&
                this.isValidBST(root.right, root.value, max)
            );
        }


    findClosestValue(target) {
        if (this.root === null) {
            return null;
        }

        let closestValue = this.root.value;
        let currentNode = this.root;

        while (currentNode !== null) {
            if (Math.abs(currentNode.value - target) < Math.abs(closestValue - target)) {
                closestValue = currentNode.value;
            }

            if (target < currentNode.value) {
                currentNode = currentNode.left;
            } else if (target > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                break; // found exact match
            }
        }

        return closestValue;
    }

}

const bst = new BinarySearchTree()
const bst2 = new BinarySearchTree()
// console.log(bst.isEmpty())

// bst.insert(10)
// bst.insert(5)
// bst.insert(15)
// bst.insert(3)
// bst.insert(7)
// bst2.insert(10)
// bst2.insert(5)
// bst2.insert(15)
// bst2.insert(22)
// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,20))
// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,20))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()
// console.log("min",bst.min(bst.root));
// console.log("max",bst.max(bst.root));

// bst.levelOrder()
// bst.delete(10)
// bst.levelOrder()
// console.log('haha',bst.heightOfTree(bst.root));
// console.log(bst.checkIdentical(bst.root,bst2.root))



// console.log(bst.isValidBST(bst.root)); // Should return true

// // Example with an invalid BST
// const invalidBST = new BinarySearchTree();
// invalidBST.root = new Node(10);
// invalidBST.root.left = new Node(5);
// invalidBST.root.right = new Node(20);
// invalidBST.root.left.left = new Node(3);
// invalidBST.root.left.right = new Node(12);

// console.log(invalidBST.isValidBST(invalidBST.root)); // Should return false


bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log(bst.findClosestValue(13)); // Output: 12
console.log(bst.findClosestValue(6));  // Output: 7
console.log(bst.findClosestValue(4));  // Output: 5
console.log(bst.findClosestValue(8));  // Output: 7