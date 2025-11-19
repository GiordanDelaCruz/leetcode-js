/**
 * Problem: 
 *      Keep Multiplying Found Values by Two (LeetCode #2154)
 * 
 * Description:
 *     You are given an array of integers nums. You are also given an integer original which is the first number that needs to be searched for in nums.
 *    
 *     You then do the following steps:
 *          1. If original is found in nums, multiply it by two (i.e., set original = 2 * original).
 *          2. Otherwise, stop the process.
 *          3. Repeat this process with the new number as long as you keep finding the number. 
 *     
 *     Return the final value of original.
 * 
 * Approach: 
 *      Loop through all the elements in the array and check if the the original value is inside the array. If true,
 *      then update the original and reset your current_index back to the start (0). This will ensure that we do not 
 *      miss any values in the array. 
 * 
 * @author Giordan Andrew
 * @date November 18, 2025
 */


/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    
    // Loop through the elements 
    let currIdx = 0
    while( currIdx <= nums.length - 1){
        console.log(nums[currIdx])
        // Update original if it is found in the list
        if( nums[currIdx] === original ){
            original *= 2;
            // Reset idx
            currIdx = 0;
        }else{
            currIdx++;
        }
        
    }
    return original;
};