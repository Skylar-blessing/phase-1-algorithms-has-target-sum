
function hasTargetSum(array, target) {
  const complements = {};
  for (const num of array) {
    if (complements[num]) {
      return true;
    }
    const complement = target - num;
    complements[complement] = true;
  }
  return false;
}


/* 
  O(n)
*/

/* 
  1. Define a function named "hasTargetSum" that accepts two parameters, "array" and "target".
2. Define an empty object named "complements".
3. For each element in the array:
   a. If the complement of the element exists in the "complements" object, return true.
   b. Otherwise, add the element to the "complements" object with a value of true.
4. Return false.

*/

/*
  Write a function that takes an array of integers and a target integer as arguments. The function should return true if any two numbers in the array add up to the target integer, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  node index.js
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
