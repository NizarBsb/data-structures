/********************************
 *     NOTES ON BINARY HEAPS    *
 ********************************/

// What is Binary Heaps?
// ---------------------

// -> Very similar yo a binary search tree, but with some different rules
// -> In a MaxBinaryHeaps, parent nodes are always larger than child nodes
// -> In a MinBinaryHeaps, parent nodes are always smaller than child nodes
// -> Binary Heaps are commonly used to implement Priority Queues

// Storing Binary Heaps
// --------------------

// -> We can symply use an Array or List Data Structure
// -> Find the child of a Parent is easy, there is a simple Mathematical relationship
// -> For any index of an array (n)
// -> The left child is stored at (2n + 1)
// -> The right child is at (2n + 2)
//----------------------------------------------------------------------------------------
// -> Find the parent node of a child is easy, there is a simple Mathematical relationship
// -> For any child node at index (n)
// -> It's parent is at index Math.Floor((n - 1) / 2)


// Basic implementation of a Binary Heap Class
// -------------------------------------------

// -> Add to the end of the Array left first then right branch.
// -> Find the new parent 
// -> Bubble up the value by comparing to its parent and swap if larger.

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    bubbleUp() {
        let idx = this.values.lenght - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    extractMax() {
        const max = this.valiues[0];
        const end = this.values.pop();
        if (this.values.lenght > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

let heap = new MaxBinaryHeap();

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    bubbleUp() {
        let idx = this.values.lenght - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.lenght > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val) {
        this.val = val;
        this.priority = priority;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);

ER.dequeue();

// Insert to a MaxBinaryHeap

// *** Pseudo Algo ***
// Push the value into the values property on the heap
// Bubble Up
    // Create a variable called index which is the length of the value proerty - 1
    // Create a variable called parentIndex which is the floor of (index - 1) / 2
    // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
        // Swap the value of the values element at the parentIndex with the value of the element property at the child index
        // Set the index to be the parentIndex, and start over!


// JS Solution: See the MaxBinaryHeap Class Implementation > insert()/bubbleUp() methods.


// Removing from a Heap (Also called ExtractM(ax/in) using Sinking Down method

// *** Pseudo Algo ***
// Swap the first value in the values property with the last one
// Pop from the values property, so you can return the value at the end
// Have the new root "sink down" to the correct sport
    // Your parent index starts at the o (the root)
    // Find the index of the child: 2 * index + 1 (make sure its not out of bounds)
    // Find the index of the right child: 2 * index + 2 (make sure its not out of bounds)
    // If the left or right chils is greater than the element...swap. If both left and right children are larger, swap with the largest child
    // The child index you swapped to now becomes the new parent index
    // Keep looping and swapping until neither child is larger than the element
    // Return the old root (The one we just removed)

// JS Solution: See the MaxBinaryHeap Class Implementation > remove()/extractMax() method.


// Building a priority Queue (What is a priority Queue)

// -> A data structure where each element had a priority
// -> Elements with higher priorities are served before elements with lower priorities
// -> Priority Queue are separate from Heap, they are abstract DS

// *** Pseudo Algo ***
// Write a MinBinaryHeap - lower number means higher priority
// Each node has a val and a priority. Use the priority to build the heap
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right sport based of its priority
// Dequeue method removes root element, return it, and rearranges heap using priority

// BIG O OF BINARY HEAPS
// ---------------------

// - Insertion: O(Log N)
// - Removal: O(Log N)
// - Search: O(N)