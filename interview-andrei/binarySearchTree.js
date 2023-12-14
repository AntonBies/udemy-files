class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const current = new Node(value);
        if (!this.root) {
            this.root = current;
            return this;
        }
        let grandParent = null;
        let parent = this.root;
        while (parent) {
            grandParent = parent;
            parent = value < parent.value ? parent.left : parent.right;
        }
        if (value < grandParent.value) grandParent.left = current;
        if (value > grandParent.value) grandParent.right = current;
        return this;
    }

    lookup(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) return current;
            if (value < current.value) current = current.left;
            if (value > current.value) current = current.right;
        }
        return false;
    }

    getSmallest(node) {
        if (node.left === null) return node;
        return this.getSmallest(node.left);
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    removeNode(node, value) {
        if (node === null) return null;
        if (node.value === value) {
            if (node.left === null && node.right === null) return null;
            if (node.left === null) return node.right;
            if (node.right === null) return node.left;

            const newNode = getSmallest(node.right);
            node.value = newNode.value;
            node.right = this.removeNode(node.right, newNode.value);
            return node;
        } else if (node.value > value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else {
            node.right = this.removeNode(node.right, value);
            return node;
        }
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        const list = [];
        const queue = [];
        queue.push(currentNode);

        while (queue.length) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right);
        }
    }

    breadthFirstSearchR(queue = [this.root], list = []) {
        if (!queue.length) return list;

        const currentNode = queue.shift();
        list.push(currentNode.value);
        currentNode.left && queue.push(currentNode.left);
        currentNode.right && queue.push(currentNode.right);
        return this.breadthFirstSearchR(queue, list);
    }

    DFSinOrder() {
        return traverseInOrder(this.root, []);
    }

    DFSpreOrder() {
        return traversePreOrder(this.root, []);
    }

    DFSpostOrder() {
        return traversePostOrder(this.root, []);
    }
}

function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return (
        isValidBST(root.left, min, root.value) &&
        isValidBST(root.right, root.value, max)
    );
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(30);
tree.insert(26);
tree.insert(34);
tree;
