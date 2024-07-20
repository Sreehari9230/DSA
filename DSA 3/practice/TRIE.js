class TrieNode {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode()
    }

    insert(word) {
        let curr = this.root
        for (const char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode()
            }
            curr = curr.children[char]
        }
        curr.isEndOfWord = true
    }

    search(word) {
        let curr = this.root
        for (const char of word) {
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return curr.isEndOfWord
    }

    startsWith(prefix) {
        let curr = this.root
        for (const char of prefix) {
            if (!curr.children[char]) {
                return false
            }
            curr = curr.children[char]
        }
        return true
    }

    print(node = this.root, currentword = '', result = []) {
        if (node.isEndOfWord) {
            result.push(currentword)
        }

        for (const char in node.children) {
            this.print(node.children[char], currentword + char, result)
        }
        return result
    }

    autoComplete(word) {
        return this.getAllwordwithPrefix(word)
    }

    getAllwordwithPrefix(prefix) {
        let node = this.root
        let words = []

        for (let char of prefix) {
            if (!node.children[char]) {
                return words
            }
            node = node.children[char]
        }

        const collectWords = (node, currentword) => {
            if(node.isEndOfWord){
                words.push(currentword)
            }

            for(let char in node.children){
                collectWords(node.children[char],currentword+char)
            }
        }

        collectWords(node,prefix)
        return words
    }

}

const trie = new Trie()

trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("bat");
trie.insert("ball");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("appricot")); // false
console.log(trie.startsWith("ap")); // true
console.log(trie.startsWith("bat")); // true
console.log(trie.startsWith("bats")); // false



// console.log(trie.print()); // ["apple", "app", "apricot", "bat", "ball"]
console.log(trie.autoComplete('a'))
