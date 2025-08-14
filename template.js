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