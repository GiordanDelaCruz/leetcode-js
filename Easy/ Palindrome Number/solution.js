/**
 * Problem: 
 *      Palindrome Number (LeetCode #9)
 * 
 * Description: 
 *      Given an integer x, return true if x is a palindrome, and false otherwise.
 * 
 * Approach: 
 *      First, check if the number is positive. If true, then convert the number into a string and then use the sliding window
 *      technique to compare left and right values. If all letters match, you have a palindrome.
 * 
 * @author Giordan Andrew
 * @date August 13, 2024
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // Check if number is negative
    if (x < 0) return false;

    // Loop through number as a string with Sliding Window technique
    let strNum = String(x);
    let right = strNum.length - 1;
    for (let left = 0; left < right; left++) {
        // Check if characters match
        if (strNum[left] != strNum[right]) {
            return false;
        }
        // Update window
        right -= 1;
    }

    return true;
};