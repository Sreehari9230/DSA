class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char];
        }
        curr.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let curr = this.root;
        for (let char of word) {
            if (!curr.children[char]) {
                return false;
            }
            curr = curr.children[char];
        }
        return curr.isEndOfWord;
    }

    // Check if any word starts with a prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    // Get all words with a given prefix
    getAllWordsWithPrefix(prefix) {
        let node = this.root;
        let words = [];

        // Traverse to the node representing the prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return words;
            }
            node = node.children[char];
        }

        // Recursively collect all words from this node
        const collectWords = (node, currentWord) => {
            if (node.isEndOfWord) {
                words.push(currentWord);
            }
            for (let char in node.children) {
                collectWords(node.children[char], currentWord + char);
            }
        };

        collectWords(node, prefix);
        return words;
    }

    // Autocomplete function to get all words that start with the given word
    autoComplete(word) {
        return this.getAllWordsWithPrefix(word);
    }

    // Print all words in the Trie starting from a given node
    printWords(node = this.root, currentWord = "", result = []) {
        if (node.isEndOfWord) {
            result.push(currentWord);
        }

        for (let char in node.children) {
            this.printWords(node.children[char], currentWord + char, result);
        }
        return result;
    }
}

// Example usage
let trie = new Trie();
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

console.log(trie.autoComplete("ap")); // ["apple", "app", "apricot"]
console.log(trie.autoComplete("ba")); // ["bat", "ball"]

console.log(trie.printWords()); // ["apple", "app", "apricot", "bat", "ball"]
