/********************************
 *   NOTES ON STACKS & QUEUES   *
 ********************************/

// What is Stacks?
// ---------------

// A LIFO data structure. The last element added to the stack will be the first element removed from the stack.
// Think about a stack of plates, as you pile it up, the last thing (or top most thing) is what gets removed first.
// A good example is the call stack in programming, it add called methods and then remove them when return is called.
// Or Undo/Redo functionnality in most of editing Softwares.

// Create a Stack with an Array
// ----------------------------

// -> Use a simple JS Array.

let stack = [];

// Adding to the Stack
stack.push('google');
stack.push('instagram');

// Removing from the end of the Stack
stack.pop()

// Add to the beginning of the Stack.
stack.unshift('create new file');
stack.unshift('resized image');

// Removing from the beginning of the Stack.
stack.shift();

// What is the most efficient, adding/removing from the beginning or from the end?
// -> Adding/Removing from the beginning is not really good because, you'll have to re-index the Stack everytime.
// -> While Adding at the end of the Stack, we are just creating a new spot, a new Index and the indices are unshifted.
// -> Push()/Pop() are O(1), meaning constant time.

// Create a Stack with a LL
// ------------------------

// Basic Stack Class implementation

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.length++;
        return this.size;
    }
    pop() {
        if (!first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

// BIG O OF STACKS:
// ---------------
// - Insertion: O(1)
// - Removal: O(1)
// - Searching: O(N)
// - Access: O(N)

// What is Queues?
// ---------------

// -> Similar to Stack but in FIFO data structure. Think of a queue of people waiting for getting into an Airplane for example.

// Create a Queue with an Array
// ----------------------------
let q = [];

q.push("FIRST");
q.push("SECOND");
q.push("THIRD");

// Remove from the beginning of the Queue. Every single items will have to be re-indexed!
q.shift();

// Add to the beginning
q.unshift("FIRST");
q.unshift("SECOND");
q.unshift("THIRD");

//Remove from the end of the Queue.
q.pop();

// Basic Queue Class implementation

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size
    }
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

// Enqueue: Add a new node a the end of the Queue.

// *** Pseudo Algo ***
// This function accepts some value
// Create a new node using that value passed to the function
// If there are no nodes in the queue, set this node to be the first and last property of the queue
// Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
// Increment the size of the Queue by one and return size.

// JS Solution: See implementation of Queue Class > enqueue() method

// Dequeue: Remove from the beginning of the Queue.

// *** Pseudo Algo ***
// If there is no first property, just return null
// Store the first property in a variable
// See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
// If there is more than 1 node, set the first property to be the next property of first
// Decrement the size by 1
// Return the value of the node dequeued

// BIG O OF QUEUES
// ---------------

// - Insertion: O(1)
// - Removal: O(1)
// - Searching: O(N)
// - Access: O(N)