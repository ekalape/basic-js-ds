const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    first = null;
    cur = null;

    getUnderlyingList() {
        return this.first;
    }

    enqueue(value) {
        let node = new ListNode(value);
        if (this.first === null) {
            this.first = node;
            this.cur = node;
        } else {
            this.cur.next = node;
            this.cur = node;
        }
    }

    dequeue() {
        if (this.first === null) return this.value;
        else {
            let node = this.first;
            this.first = this.first.next;
            return node.value;
        }
    }
}

module.exports = {
    Queue,
};