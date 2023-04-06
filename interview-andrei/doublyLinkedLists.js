class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.previous = this.tail;
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
        newNode.previous = currentNode;
        newNode.next = nextNode;
        currentNode.next = newNode;
        nextNode.previous = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.previous = newNode;
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
            this.head.previous = null;
        } else {
            const previousNode = this.traverseTo(index - 1);
            previousNode.next = previousNode.next.next;
            if (previousNode.next === null) {
                this.tail = previousNode;
            } else {
                previousNode.next.previous = previousNode;
            }
        }
        this.length--;
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

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5).append(16).prepend(1).insert(2, 3).remove(3);
myLinkedList.printList();
console.log(myLinkedList);
