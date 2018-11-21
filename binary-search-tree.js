class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value = null) {
        this.root = value ? new Node(value) : null;
        this.len = value ? 1 : 0;
    }

    increaseLen() {
        this.len += 1;
    }

    decreaseLen() {
        this.len -= 1;
    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            this.increaseLen();

            return;
        }

        const newNode = new Node(value);
        let currentNode = this.root;

        while (currentNode) {
            if (value <= currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = newNode;
                    this.increaseLen();

                    break;
                }
            } else if (value > currentNode.value) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = newNode;
                    this.increaseLen();

                    break;
                }
            } else {
                throw new Error(`Cannot insert this value '${value}'.`);
            }
        }
    }

    contains(value) {
        let contains = false;
        let currentNode = this.root;

        while (currentNode) {
            if (value === currentNode.value) {
                contains = true;
                break;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return contains;
    }

    depthFirstTraversal(iteratorFunc, order = 'in-order', node = this.root) {
        if (order === 'pre-order') {
            iteratorFunc(node.value);
        }

        if (node.left) {
            this.depthFirstTraversal(iteratorFunc, order, node.left);
        }

        if (order === 'in-order') {
            iteratorFunc(node.value);
        }

        if (node.right) {
            this.depthFirstTraversal(iteratorFunc, order, node.right);
        }

        if (order === 'post-order') {
            iteratorFunc(node.value);
        }
    }

    breadthFirstTraversal(iteratorFunc) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            iteratorFunc(node.value);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    getMinVal(node = this.root) {
        if (node.left) {
            return this.getMinVal(node.left);
        }

        return node.value;
    }

    getMaxVal(node = this.root) {
        if (node.right) {
            return this.getMinVal(node.right);
        }

        return node.value;
    }
}

module.exports = BinarySearchTree;
