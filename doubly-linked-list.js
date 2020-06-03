/***************************************
 *     NOTES ON DOUBLY LINKED LIST     *
 ***************************************/

// Almost identical to SLL, except every node has another pointer, to the previous node. (Bitraversal).
// More memory  === More Flexibility. It's almost always a tradeoff!

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.head === null || this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.previous = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (length === 0) return undefined;
        let oldHead = this.head;
        if (length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            this.oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        if (index <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            let current = this.tail;
            while (count != index) {
                current = current.previous;
                count--;
            }
        }
        return current;
    }
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(this.length - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index == this.length - 1) return this.pop();
        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}

// Push: Adding a node to the end of the DLL

// *** Pseudo Algo ***
// Create a new node with the value passed to the function
// If the head property is null set the head and tail to be the newly created node
// If not, set the next property on the tail to be that new node
// Set the previous property on the newly created node to be the tail
// Set the tail to be the newly created node
// Increment the length
// Return the DoublyLinkedList

// JS Solution: See implementation of DoublyLinkedList Class > push() method

// -----------------------------------------------------------------------------------------------

// Popping: Removing a node from the end of the DLL

// *** Pseudo Algo ***
// If there is no head, return undefined
// Store the current tail in a variable to return later
// Edge case: If the length is 1, set the head and tail to be null
// Update the tail to be the previous Node
// Set the newTail's next to null
// Decrement the length
// Return the value removed

// JS Solution: See implementation of DoublyLinkedList Class > pop() method

// -----------------------------------------------------------------------------------------------

// Shift: Removing a node from the beginning of the DLL

// *** Pseudo Algo ***
// If length is 0, return undefined
// Store the current head property in a variable (we'll call it old head)
// If the length is one
        // Set the head to be null
        // Set the tail to be null
// Update the head to be the next of the old head
// Set the head's prev property to null
// Set the old head's next to null
// Decrement the length
// Return old head

// JS Solution: See implementation of DoublyLinkedList Class > shift() method

// -----------------------------------------------------------------------------------------------

// Unshift: Adding a node to the beginning of the DLL

// *** Pseudo Algo ***
// Create a new node with the value passed to the function
// If the length is 0
        // Set the head to be the new node
        // Set the tail to be the new node
// Otherwise
        // Set the prev property on the head if the list to be the new node
        // Set the next property on the new node to be the head property
        // Update the head to be the new node
// Increment the length
// Return the list 

// JS Solution: See implementation of DoublyLinkedList Class > unshift() method

// -----------------------------------------------------------------------------------------------

// Get: Accessing a node in a DLL by its position

// *** Pseudo Algo ***
// If the index is less than 0 or greater or equal to the length, return null
// If the index is less than or equal to half the length of the list
        // Loop through the list starting from the head and loop towards the middle
        // Return the node once it is found
// If the index is greater than half the length of the list
        // Loop through the list starting from the tail and loop towards the middle
// Return the node once it is found

// JS Solution: See implementation of DoublyLinkedList Class > Get() method

// -----------------------------------------------------------------------------------------------

// Set: Replacing the value of a node in the DLL

// *** Pseudo Algo ***
// Create a variable which is the result of the get() method at the index passed to the function
        // If the get method returns a valid node, set the value of that node to be the value passed to the function
        // Return true

// JS Solution: See implementation of DoublyLinkedList Class > set() method

// -----------------------------------------------------------------------------------------------

// Insert: Adding a node in a DLL by a certain position

// *** Pseudo Algo ***
// If the index is less than zero or greater than or equal to the length return false
// If the index is 0, unshift
// If the index is the same as the length, push
// Otherwise use the get() method to access the index -1
// Set the next and prev properties on the correct nodes to link everything together
// Increment the length
// Return true

// JS Solution: See implementation of DoublyLinkedList Class > insert() method

// -----------------------------------------------------------------------------------------------


// Remove: Removing a node in a DLL by a certain position

// *** Pseudo Algo ***
// If the index is less than zero or greater than or equal to the length, return undefined
// If the inded is 0, shift
// If the index is the same as the length - 1, pop
// Use the get() method to retrieve the item to be removed
// Update the next and prev properties to remove the found node from the list
// Set next and prev to null on the found node
// Decrement the length
// Return the removed code

// JS Solution: See implementation of DoublyLinkedList Class > remove() method

// BIG O OF DLL

// - Insertion: O(1)
// - Removal: O(1)
// - Searching: O(N)
// - Access: O(N)

// Technically, searching is O(N / 2), but that's still O(N)
// DLL are almost identical to SLL except there is an additional pointer to previous nodes
// Better than SLL for finding nodes and can done in half the time!
// However, they do take up more memory considering the extra pointer