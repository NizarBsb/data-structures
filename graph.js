/******************
 * NOTES ON GRAPH *
 ******************/

// What is a Graph?

// -> A graph is a collection of nodes, and connection between those nodes.
// -> Used in social networks, location mapping, routing algorithm, visual hierarchy
// -> File system optimization, recommandation system, everywhere!

// Terminology
// -----------
// - Vertex: A node
// - Edge: Connection between the nodes
// - Weighted/Unweighted: Values assigned to distances between vertices
// - Directed/Undirected: Directions assigned to distance between vertices.

// -> In undirected graph there is no direction/polarity to the edges, they are two way connection. A->B || B->A
// -> In directed graph there is only one direction/polarity assigned to the edge E->F
// -> Weighted graph is when we assign a value to the edges. There is an info about the connection itself.
// -> Unweighted graph does not have values assigned to the edges.

// How to store a graph?
// ---------------------

// (1) Adjacency Matrix:
// ---------------------
// -> Use a 2D matrix where A -> B = 1 because there is an edge but B x C = 0 with no connection.

// (2) Adjacency List:
// --------------------

// -> Use an Array or list to stores the edges connections of the graph.
let adjacencyArr = [
    [1, 5], // Vertice at index 0 of value 3, have connection with vertices 1 and 5.
    [0, 2],
    [1, 3]
]

// Use HashMap for letters
let adjacencyArr = {
    A: ["B", "F"],
    B: ["A", "C"]
}

// Adjacency Matrix VS List
// -> Roughtly, if there is a lot of sparse Data, Matrix won't be the best
// -> Because or each new vertice/edges, we will have to create a new row/column in the 2D Matrix.

// Adjacency List:
// + Can take up less space (in sparse graphs)
// + Faster to iterate over all edges
// - Can be slower to lookup specific edge

// Adjacency Matrix:
// - Takes up more space (in sparce graphs)
// - Slower to iterate over all edges
// + Faster to lookup specific edge

// Basic implementation of a Graph Class
// -------------------------------------

// (1) Adding a vertex
// -------------------
// Write a method called addVertex, which accepts a name of a vertex
// I should add a key to the adjacency list with the name of the vertex and set the value to be an empty array

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex1].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);
        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (start.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

// (2) Adding an edge
// ------------------
// This function should accept two vertices, we can call them vertex1 and vertex2
// The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
// The function should find in the adjacency list the key of vertex2 and push vertex1 to the array

// See JS implementation: addEdge() method

// (3) Removing an edge
// --------------------
// This function should accept two vertices, we'll call them v1 and v2
// The function should reassign the key of vertex1 to be an array that does not contain vertex2
// The function should reassign the key of vertex2 to be an array that does not contain vertex1

// See JS implementation: removeEdge() method

// (4) Removing a vertex
// ---------------------
// The function should accept a vertex to remove
// The function should loop as long as there are any other vertices in the adjacency list for that vertex
// Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
// Delete the key in the adjacency list for that vertex

// See JS implementation: removeVertex() method

// (5) Depth First Graph Traversal
// -------------------------------

// -> Explore as far as possible down one branch before "backtracking"

// DFS Recursive Solution

// *** Pseudo Code For Recursive ***
// The function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
        // The helper function should return early if the vertex is empty
        // The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
        // Loop over all of the values in the adjacencyList for that vertex
        // If any of those values have not been visited, recursively invoke the helper function with that vertex
// Invoke the helper function with the starting vertex
// Return the result array

// See Recursive implementation above.


// *** Pseudo Code For Iterative ***
// The function should accept a starting node
// Create a stack to help keep track of vertices (use list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it
        // Pop the next vertex from the stack
        // If that vertex hasn't been visited yet
                // Mark it as visited
                // Add it to the result list
                // Push all of its neighbors into the stack
// Return the result array

// See Iterative implementation above.

// (6) Breadth First Search

// This function should accept a starting vertex
// Create a queue (you can use an Array) and place the starting vertex in it
// Create an Array to store the nodes visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the Array that stores nodes visited
// Loop over each vertex in the adjacency list for the vertex you are visiting
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
// Once you have finished looping, return the Array of visited nodes