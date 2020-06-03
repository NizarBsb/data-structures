/********************************
 * NOTES ON BINARY SEARCH TREES *
 ********************************/

// Breadth First Search:
// --------------------

// *** Pseudo Code ***

// Create a queue (this can be an array) and a variable to store the values of nodes visited.
// Place the root node in the queue.
// Loop as long as there is anything in the queue:
//      Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
//      If there is a left property on the node dequeued - add it to the queue.
//      If there is a right property on the node dequeued - add it to the queue.
// Return the variable that stores the values.

// JS Iterative Solution:

function bfs() {
    let node = this.root;
    let visited = [];
    let queue = [];
    queue.push(node);

    while (queue.length) {
        node = queue.shift();
        visited.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return visited;
}

// Depth First Search - PRE-ORDER (We visit the node first and then we visit left and right branches)
// ------------------------------

// *** Pseudo Code ***
// Create a variable to store the values of nodes visited.
// Store the root of the BST in a variable called current.
// Write a helper function which accepts a node.
//      Push the value of the node to the variable that stores the values.
//      If the node has a left property - call the helper function with the left property on the node.
//      If the node has a right property - call the helper function with the right property on the node.
// Invoke the helper function with the current variable.
// Return the variable that stores the values.

// JS Recursive Solution:

function DfsPreOrder() {
    let visited = [];
    function traverse(node) {
        visited.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
}

// Depth First Search - POST-ORDER: (We visit left and right branches first and then we visit the node)
// -------------------------------

// *** Pseudo Algo ***

// Create a variable to store the values of nodes visited.
// Store the root of the BST in a variable called current.
// Write a helper function which accepts a node.
//      If the node has a left property - call the helper function with the left property on the node.
//      If the node has a right property - call the helper function with the right property on the node.
//      Push the value of the node to the variable that stores the values.
// Invoke the helper function woth the current variable.
// Return the variable that stores the values.

// JS Recursive Solution:

function DfsPostOrder() {
    let visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.value);
    }
    traverse(this.root);
    return visited;
}

// Depth First Search - IN-ORDER: (We visit the entire left side, then visit the node, then visit the entire right side)
// -----------------------------

// *** Pseudo Code ***

// Create a variable to store the values of nodes visited
// Write a helper function which accepts a node
//      If the node has a left property - call the helper function with the left property on the node
//      Push the value of the node to the variable that stores the values
//      If the node has a right property - call the helper function with the right property on the node
// Invoke the helper function woth the current variable
// Return the variable that stores the values

// JS Recursive Solution:

function DfsInOrder() {
    let visited = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
}

// BFS vs DFS
// ----------

// -> The time complexity between BFS and DFS does not matter because we are visiting the node only once
// -> But in BFS, since we are exploring the node horizontally, our Queue will have to keep track of a lot of nodes
//    More the tree is wider and bigger and more it get crazy inside that Queue. We're talking about Space complexity
// -> In DFS, there is fewer nodes to keep track of. It really depends of the structure of the Tree, there is no which is the best question here

// Binary Search Tree Class: (Basic Class)
// ------------------------

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        let newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if (this.root === null) return false;
        let current = this.root;
        let found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);

// BST Insert Function
// -------------------

// *** Pseudo Code ***
// Starting at the root
        // Check if there is a root, if not - the roor now becomes that new node
        // If there is a root, check if the value of the new node is greater than or less than the value of the root
                // If it is greater
                        // Check to see if there is a node to the right
                                // If there is, move to that node and repeast these steps
                                // If there is not, add that node as the right property
                // If it is less
                        // Check to see if there is a node to the left 
                                // If there is, move to that node and repeast these steps
                                // If there is not, add thart node as the left property
// Return entire tree

// JS Solution: See the BinarySearchTree Class Implementation > insert() method.
// -------------------------------------------------------------------------------------------

// On duplicate node value, we get an infinite loop, maybe something you want to handle. 

// BST Find Function
// -------------------

// *** Pseudo Code ***
// Starting at the root
        // Check if there is a root, if not - we're done searching
        // If there is a root, check if the value of the new node is equal to the value we are looking for
            // If we found it, we're done
        // If not, check to see if the value is greater than or less than the value of the root
        // If it is greater
                // Check to see if there is a node to the right
                    // If there is, move to that node and repeat these steps
                    // If there is not, we're done searching
        // If it is less
                // Check to see if there is a node to the left
                        // If there is, move to that node and repeat these steps
                        // If there is not, we're done searching

// JS Solution: See the BinarySearchTree Class Implementation > contains/find() method.
// -------------------------------------------------------------------------------------------

// BIG O OF BST
// ------------

// Insertion - O(Log n)
// Searching - O(Log n)
// If we double the number of nodes, you only increase the number of steps to insert/find by 1.