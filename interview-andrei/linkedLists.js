class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = this.tail = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index === 0) return this.prepend(value);
        if (index >= this.length) return this.append(value);
        const newNode = new Node(value);
        const currentNode = this.traverseTo(index - 1);
        const nextNode = currentNode.next;
        newNode.next = nextNode;
        currentNode.next = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
    }

    remove(index) {
        if (index >= this.length) return;
        if (index === 0) {
            this.head = this.head.next;
        } else {
            const previousNode = this.traverseTo(index - 1);
            previousNode.next = previousNode.next.next;
            if (previousNode.next === null) this.tail = previousNode;
        }
        this.length--;
        return this;
    }

    reverse() {
        if (this.length < 2) return this;
        let first = this.head;
        let second = first.next;
        while (second) {
            let third = second.next;
            second.next = first;
            first = second;
            second = third;
        }
        this.head.next = null;
        this.tail = this.head;
        this.head = first;
        return this;
    }

    traverseTo(index) {
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5).append(16).prepend(1).insert(2, 3).remove(3);
myLinkedList.printList();
console.log(myLinkedList);
