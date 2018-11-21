const R = require('ramda');

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    increaseLen() {
        this.len += 1;
    }

    decreaseLen() {
        this.len -= 1;
    }

    addToHead(value) {
        const prevNode = null;
        const newNode = new Node(value, this.head, prevNode);

        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.increaseLen();
        this.head = newNode;
    }

    removeFromHead() {
        if (!this.head) {
            return null;
        }

        const headValue = this.head.value;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        this.decreaseLen();

        return headValue;
    }

    addToTail(value) {
        const nextNode = null;
        const newNode = new Node(value, nextNode, this.tail);

        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.increaseLen();
        this.tail = newNode;
    }

    removeFromTail() {
        if (!this.tail) {
            return null;
        }

        const tailValue = this.tail.value;
        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        this.decreaseLen();

        return tailValue;
    }

    find(value) {
        let node = this.head;

        while (node) {
            if (R.equals(value, node.value)) {
                return node.value;
            }

            node = node.next;
        }

        return node;
    }

    indexOf(value) {
        const notFoundIndex = -1;
        let node = this.head;
        let currentIndex = 0;

        while (node) {
            if (R.equals(value, node.value)) {
                return currentIndex;
            }

            currentIndex += 1;
            node = node.next;
        }

        return notFoundIndex;
    }
}

module.exports = LinkedList;
