class Queue {
    constructor() {
        this.queue = [];
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
        return this.queue.unshift(task);
    }

    remove() {
        this.decreaseLen();
        return this.queue.pop();
    }
}

module.exports = Queue;
