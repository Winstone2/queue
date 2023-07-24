class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(item) {
        this.queue.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}
const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log(myQueue.peek()); // Output: 10
console.log(myQueue.dequeue()); // Output: 10
console.log(myQueue.size()); // Output: 2
