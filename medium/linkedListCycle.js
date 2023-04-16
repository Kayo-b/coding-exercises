/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
 */
/* 

Here is a solution to the problem in JavaScript:
This solution uses the Floyd’s Tortoise and Hare algorithm to detect a cycle in the linked list.
 The algorithm uses two pointers, slow and fast, that move at different speeds. 
 The slow pointer moves one node at a time while the fast pointer moves two nodes at a time. 
 If there is a cycle in the list, the two pointers will eventually meet at some point.

Once a cycle is detected, we reset the slow pointer to the head of the list and move both pointers
 one node at a time until they meet again. The node where they meet is the start of the cycle.

In the first example you provided, the slow and fast pointers will meet at node 0. We then reset
 the slow pointer to the head of the list and move both pointers one node at a time until they meet again at node 2, which is the start of the cycle.

In the second example, the slow and fast pointers will meet at node 2. We then reset the slow pointer
 to the head of the list and move both pointers one node at a time until they meet again at node 1,
 which is the start of the cycle.

In the third example, there is no cycle in the list so the function returns null.*/

var detectCycle = function(head) {
    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    if (slow !== fast) return null;
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};


//find if there is actually a loop in the list using slow and fast iterations
//find where the loop starts by reseting the slow back to the head and continuing to iterate one node at a time
//for both fast and slow, they will meet at the start of the loop, because the length from the first meeting point to the start of
//the loop will always have the same length than the start of the list to the start of the loop.
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            break;
        }
    }
    if(fast !== slow) return null;
    slow = head;
    while(fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
};

let list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }


console.log()



