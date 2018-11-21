class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashTable {
    constructor(size) {
        this.buckets = new Array(size);
        this.numBuckets = size;
    }

    hash(key) {
        const total = key.split('').reduce((total, _, index) => total + key.charCodeAt(index), 0);
        return total % this.numBuckets;
    }

    insert(key, value) {
        const hash = this.hash(key);
        const newNode = new Node(key, value);
        if (!this.buckets[hash]) {
            return this.buckets[hash] = newNode;
        } else if (this.buckets[hash].key === key) {
            return this.buckets[hash].value = value;
        }

        let currentNode = this.buckets[hash];
        while (currentNode.next) {
            if (currentNode.next.key === key) {
                return currentNode.next.value = value;
            }

            currentNode = currentNode.next;
        }

        currentNode.next = newNode;

        return;
    }

    get(key) {
        const hash = this.hash(key);

        if (!this.buckets[hash]) {
            return null;
        }

        let currentNode = this.buckets[hash];

        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }

            currentNode = currentNode.next;
        }

        return null;
    }
}

module.exports = HashTable;
