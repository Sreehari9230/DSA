class MaxHeap {
    constructor() {
        this.items = new Array()
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    insert(value) {
        // insert the element at available slot
        this.items[this.size] = value
        this.size++

        // bubbleUp
        let index = this.size - 1
        while (index > 0 && this.items[index] > this.getParent(index)) { //for minHeap just make it less than parent
            // swap
            this.swapElewithIndex(index, this.getParentIndex(index))
            index = this.getParentIndex(index)
        }
    }

    remove() {
        let rItem = this.items[0]
        this.items[0] = this.items[this.size - 1]
        this.size--

        // bubble down
        let index = 0
        while (index < this.size && !this.validParent(index)) {
            let indexOfLargestChild = this.getLargestChildIndex(index)
            this.swapElewithIndex(index, indexOfLargestChild)
            index = indexOfLargestChild
        }

        return rItem
    }


    getParentIndex(index) {
        return Math.floor((index - 1) / 2)
    }
    getParent(index) {
        return this.items[this.getParentIndex(index)]
    }
    validParent(index) {
        if (!this.hasLeftChild(index) && !this.hasRightChild(index)) {
            return true
        }
        if (!this.hasLeftChild(index)) {
            return false
        }
        if (!this.getRightChild(index)) {
            return this.items[index] > this.getLeftChild(index)
        }
        return this.items[index] > this.getLeftChild(index) && this.items[index] > this.getRightChild(index)
    }
    swapElewithIndex(index1, index2) {
        let temp = this.items[index1]
        this.items[index1] = this.items[index2]
        this.items[index2] = temp
    }
    getLeftChildIndex(index) {
        return (index * 2) + 1
    }
    getLeftChild(index) {
        return this.items[this.getLeftChildIndex(index)]
    }
    getRightChildIndex(index) {
        return (index * 2) + 2
    }
    getRightChild(index) {
        return this.items[this.getRightChildIndex(index)]
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) <= this.size
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) <= this.size
    }
    getLargestChildIndex(index) {
        if (!this.hasLeftChild(index)) {
            return index
        }
        if (!this.hasRightChild(index)) {
            return this.getLeftChildIndex(index)
        }
        if (this.getLeftChild(index) > this.getRightChild(index)) {
            return this.getLeftChildIndex(index)
        }
        return this.getRightChildIndex(index)
    }
}

const maxHeap = new MaxHeap()

let nums = [3, 10, 2, 4, 16, 8, 90]
for (ele of nums) {
    maxHeap.insert(ele)
}


// // Heap Sort
while (!maxHeap.isEmpty()) {
    console.log(maxHeap.remove());
}

// console.log(maxHeap.items);