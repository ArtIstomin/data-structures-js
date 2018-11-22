class Stack {
    constructor() {
        this.stack = [];
        this.len = 0;
    }

    increaseLen() {
        this.len += 1;
    }

    decreaseLen() {
        this.len -= 1;
    }

    add(task) {
        this.increaseLen();
        return this.stack.push(task);
    }

    remove() {
        this.decreaseLen();
        return this.stack.pop();
    }
}

module.exports = Stack;
