class hashtable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hashFn(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(key[i])
        }
        return total % this.size
    }

    get(key) {
        let index = this.hashFn(key)
        return this.table[index]
    }

    set(key, value) {
        let index = this.hashFn(key)
        this.table[index] = value
    }

    remove(key) {
        let index = this.hashFn(key)
        this.table[index] = undefined
    }

    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }

        }
    }
}

const htab = new hashtable(100)
// htab.set('name', 'arshad')
// console.log(htab.get('name'));