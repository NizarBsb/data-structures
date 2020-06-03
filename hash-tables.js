/********************************
 *     NOTES ON HASH TABLES     *
 ********************************/

// What is Hash Tables/Hash Map?

// -> Hash tables are used to store key-value pairs
// -> They are like arrays, but the keys are not ordered
// -> Unlike arrays, hash tables are fast for  all of the following operation: finding values, adding new values, and removing values
// -> Python has Dictionnaries (dic), JS has Objects and Maps, Java, go and Scala have Maps, Ruby has Hashes
// -> We need a way to convert keys into valid array indices, Hash help to do that.

// Write a hash function (without using Objects or Maps but instead using an Array)
// -> Hash function must fast (O(1) - constant time)
// -> Doesn't cluster outputs at specific indices, but distributes uniformly
// -> Deterministic (same input yields same output)

"a".charCodeAt(0) - 96 // Give the position of the letter in the alphabet.

function hash(key, arrayLen) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

// Hashing Revisited (adding more randomness to decrease number of collision)
function hash(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

// Handling Hash Collision

// (1) Separate Chaining
// ----------------------
// -> With separate chaining, at each index in our array we store values using a more sophisticated data structure (e.g array or linked list).
// -> We just thing together and loop though the array until we find the right key and return the value

// (2) Linear Probing
// ------------------
// -> With linear probing, when we find a collision, we search through the array to find the nexr empty slot

// Set:


