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

    remove(value) {
        if (!this.root) return false;
        let parent = null;
        let current = this.root;
        while (current) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else if (value === current.value) {
                if (current.right) {
                    // the hard part - not done
                    current = current.right;
                    return false;
                }
                if (current.left) {
                    current = current.left;
                    if (value < parent.value) parent.left = current;
                    if (value > parent.value) parent.right = current;
                    return true;
                }
                if (value < parent.value) parent.left = null;
                if (value > parent.value) parent.right = null;
                return true;
            }
            return false;
        }
    }
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
