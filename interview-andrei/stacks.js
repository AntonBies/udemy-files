class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const cur = new Node(value);
        if (this.isEmpty()) this.bottom = cur;
        const next = this.top;
        this.top = cur;
        cur.next = next;
        this.length++;
        return this;
    }

    pop() {
        if (this.isEmpty()) return null;
        if (this.top === this.bottom) this.bottom = null;
        const cur = this.top;
        const next = this.top.next;
        this.top = next;
        this.length--;
        return cur;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push("google").push("udemy").push("adventofcode");
myStack.pop();

console.log(myStack);

class ArrayStack extends Array {
    push(value) {
        Array.prototype.push.call(this, value);
        return this;
    }

    peek() {
        return this.at(-1);
    }

    isEmpty() {
        return this.length === 0;
    }
}

const newStack = new ArrayStack();
newStack.push("google").push("udemy").push("adventofcode");
newStack.pop();
