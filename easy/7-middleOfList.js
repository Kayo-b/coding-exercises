/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 */
//BAD WAY using recursion, but works:
var middleNode = function(head) {
    
    function getLength(current, count) {
        
        if(current.next !== null) {
            
            count++
            
            return getLength(current.next, count) 
            } else {
                
                return count
            }
    }

   let result = getLength(head, count = 1)
   let middleLength = result % 2
   console.log(middleLength)
   if(middleLength === 0) {
    let current = head;
    
    let middleLeft = (result / 2) 
        while(middleLeft > 0) {
            middleLeft--
            current = current.next
        }
        console.log(current)
        return current
   } else {
    let current = head;
    
    let middleLeft = (result - 1) / 2
   
        while(middleLeft > 0) {
            middleLeft--
            current = current.next
        }
        return current

   }
    
};

//Better way suggested by AI
var middleNode2 = function(head) {
    let fast = head;
    let slow = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
};

var middleNode3 = function(head) {
    //run 2 variables through the head
    //one 2x faster than the other
    //when the faster reaches the end, the slower will be at the middle\
    let slow = head
    let fast = head
    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
let list1 = { val: 1, next: { val: 2, next: { val: 4, next: {val:6, next: {val: 9, next: null}} } } }
console.log(middleNode3(list1))

