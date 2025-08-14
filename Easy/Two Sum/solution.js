/**
 * Problem: 
 *      Two Sum (LeetCode #1)
 * 
 * Description:
 *      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Approach: 
 *      Create a hashmap that will keep track of all the numbers seen so far; key = number and value = index. 
 *      Then, calculate the complement (other number that will create a sum of the target) and see if it has been 
 *      found previously. If so, return the 2 indices of both numbers. 
 * 
 * @author Giordan Andrew
 * @date August 13, 2024
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // Loop through values
    let seen = new Map();
    for( let i = 0; i < nums.length; i++){
        // Calculate the complement
        let complement = target - nums[i]

        // Check if complement has been seen before
        if( seen.has(complement) ){
            // Return indices
            return [ seen.get(complement), i ];
        }
        // Add seen number and its index
        seen.set(nums[i], i);
    }
};