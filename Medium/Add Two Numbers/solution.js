/**
 * Problem: 
 *      Add Two Numbers (LeetCode #2)
 * 
 * Description: 
 *      You are given two non-empty linked lists representing two non-negative integers. The digits are stored 
 *      in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum 
 *      as a linked list.
 *      
 *      You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Approach:
 *      Loop through linked list 1 and 2 until the last node is reached. Add up each digit from both list; if there
 *      is no value, give it a value of 0 and add it. However, beware of the digit_sum and the carry, as you need both
 *      to properly add up both numbers. 
 * 
 *      Afterwards, return the pointer of the dummyHead.
 *      
 * 
 * @author Giordan Andrew
 * @date August 13, 2024
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    // Loop through each list until the max digit is reached
    let carry = 0;
    let dummyHead = new ListNode(); // Dummy head used so we can return its pointer later
    let prevNode = dummyHead;
    while (l1 != null || l2 != null || carry != 0) {
        let num1 = l1 ? l1.val : 0;
        let num2 = l2 ? l2.val : 0;

        // Calculate the sum of each digit
        let sum = num1 + num2 + carry;

        // Keep track of carry and digit sum
        carry = Math.floor(sum / 10);
        let digitSum = sum % 10;

        // Update sum linked list
        let newNode = new ListNode(digitSum, null);
        prevNode.next = newNode; // Link previous node with current node
        prevNode = newNode; // Update previous node

        // Update nodes
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummyHead.next;
};