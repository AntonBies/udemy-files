class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const cur = new Node(value);
        if (this.isEmpty()) this.first = cur;
        if (this.last) this.last.next = cur;
        this.last = cur;
        this.length++;
        return this;
    }

    dequeue() {
        if (this.isEmpty()) return null;
        if (this.first === this.last) this.last = null;
        const cur = this.first;
        this.first = this.first.next;
        this.length--;
        return cur;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const queue = new Queue();
queue.enqueue("shiny gold");
queue.enqueue("faded blue");
queue.enqueue("bright white");
console.log(queue);
