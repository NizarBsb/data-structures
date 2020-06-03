/********************************
 *     NOTES ON LINKED LIST     *
 ********************************/

// What is a Singly Linked List?
// -> A data structure that contains a head, tail and length property.
// -> Linked Lists consist of nodes, and each node has a value and a pointer to another node or NULL.
// -> Compared to Arrays, SLL does not use indices and do not need re-order of the data.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    traverse() {
        let current = this.head;
        while (current) {
            current = current.next;
        }
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift() {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) {
            this.push(val);
            return true;
        }
        if (index === 0) {
            this.unshift(val);
            return true;
        }
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next();
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return !!this.shift();
        if (index === this.length - 1) return !!this.pop();
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next = null;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}

let first = new Node("Hi");
first.next = new Node("there");

let list = new SinglyLinkedList();
list.push("hello");
list.push("goodbye");

// Pushing to the list: Adding a new node to the end of the SLL

// *** Pseudo Code ***
// This function should accept a value
// Create a new Node using the value passed to the function
// If there is no head property on the list, set the head and the tail to be the newly created node
// Otherwise set the next property on the list to be the newly created node
// Increment the length by one
// Return the SLL

// JS Solution: See implementation of SinglyLinkedList Class > push() method

// POP(): Removing a node from the end of the SLL

// *** Pseudo Code ***
// If there are no nodes in the list, return undefined
// Loop through the list until you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the removed node
// * Special case: If there is one item, there is a problem when we pop

// SHIFT(): Removing a Node from the beginning of the SLL

// *** Pseudo Code ***
// If there are no nodes, return undefined
// Store the current head property in a variable
// Set the head property to be the current head's next property
// Decrement the length by 1
// Return the value of the removed node

// JS Solution: See implementation of SinglyLinkedList Class > shift() method


// UNSHIFT(): Adding a new node to the beginning of the SLL

// *** Pseudo Code ***
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and the tail to be the newly created node
// Otherwise set the newly created node's next property to be the current head property on the list
// Set the head property on the list to be that newly created node
// Increment the length of the list by 1
// Return the linked list

// GET(): Retrieving a node by it's position in the SLL.
     // There is no indices we need to use a counter starting from zero to get the item.

// *** Pseudo Code ***
// This function should accept an index
// If the index is less than zero or greater than or equal to the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index

// JS Solution: See implementation of SinglyLinkedList Class > get() method

// SET(): Changing the value of a node based on it's position in the SLL

// *** Pseudo Code ***

// This function should accept an index and the value
// Use your get function to find the specific node
// If the node is not found, return false
// If the node is found, set the value of that node to be the value passed to the function and return true

// JS Solution: See implementation of SinglyLinkedList Class > set() method

// INSERT(): Adding a node to the SLL at a specific position

// *** Pseudo Code ***
// If the index is less than zero or greater than the length, return false
// If the index is the same as the length, push a new node to the end of the list
// If the index is 0, unshift the new node to the start of the list
// Otherwise, using the get method, access the node at the index - 1
// Set the next property on that node to be the new node
// Set the next property on the new node to be the previous next
// Increment the length
// Return true

// JS Solution: See implementation of SinglyLinkedList Class > insert() method

// REMOVE(): Removing a node from the SLL at a specific position

// *** Pseudo Code ***
// If the index is less than zero or greater than the length, return undefined
// If the index is the same as the length - 1, pop it
// If the index is 0, shift
// Otherwise, using the get method, access the node at the index -1
// Set the next property on that node to be the next of the next node
// Decrement then length
// Return the value of the node removed

// JS Solution: See implementation of SinglyLinkedList Class > remove() method

// REVERSE(): Reversing the SLL in place
//            We can't go to the tail in a SLL
//            So just start from the head and rebuild the SLL backward.

// *** Pseudo Code ***
// Swap the head and tail
// Create a variable called next
// Create a variable called prev
// Create a variable called node and initialize it to the head property
// Loop through the list
        // Set next to be the next property on whatever current node is
        // Set the next property on the node to be whatever prev is
        // Set prev to be the value of the node variable
        // Set the node variable to be the value of the next variable

// JS Solution: See implementation of SinglyLinkedList Class > reverse() method

// BIG O OF SLL
// ------------
// - Insertion: O(1)
// - Removal: it depends...O(1) || O(N)
// - Searching: O(N)
// - Access: O(N)