/********************************
 * NOTES ON SLIDING WINDOW      *
 ********************************/

// What is Sliding Window technique?

// -> This pattern involves creating a window which can either be an array or number from one position to another.
// -> Depending on a certain condition, the window either increases or closes (and a new window is created).
// -> Very usefull for keeping track of a subset of data in an Array/String etc.

// MaxSubArraySum - Brute Force Approach.

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

//// MaxSubArraySum - Sliding Window Approach:

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
