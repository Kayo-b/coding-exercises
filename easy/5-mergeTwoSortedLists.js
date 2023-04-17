/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/

/* Steps:
        1. Create a dummy constructor that will serve as the node where the linked lists will be appended to;
          1.1. The constructor val wuill be initialized with 0 if val is undefinded else receive the val from the paramenters
          1.2. The next value from the contructor will be null by default  
        2. Create new ListNode  called `dummy` and make a copy of it called `current` that will serve to iterate through the lists
        3. Create a while loop that runs while both list1 and list2 !== null;
          3.1 Inside the loop, create if statements that will check if list1.val < list2.val. \
          3.1.1 If positive, current.next = list1 ELSE current.next = list2 
          3.1.2 In both cases the current value from list1/2 will be set with the next value like so: list1 = list1.next
        4. Set current to be equal to current.next so it can iterate throught the next list nodes
        5. Catch any remaining values from list1 or list2 by checking if they are null and append their values to the end of current
        by setting current.next = list1/2 
        6. return `dummy.next`, he will be holding the object + the appended iterations made by `current`
        
REVISED BY AI:
    1.Create a constructor function ListNode that will serve as the blueprint for creating new nodes in the linked list:
    1.1. The constructor function should take two parameters: val and next, which default to 0 and null, respectively, if not provided.
    1.2. The function should set this.val = val and this.next = next.
    2.Create a new ListNode called dummy with default values for val and next.
    3.Create a new ListNode called current and set it to dummy. This will serve to iterate through the lists and append new nodes to dummy.
    4.Create a while loop that runs while list1 and list2 are not null:
    4.1 Inside the loop, use an if statement to check if list1.val < list2.val.
    4.1.1 If the condition is true, set current.next = list1 and update list1 = list1.next.
    4.1.2 If the condition is false, set current.next = list2 and update list2 = list2.next.
    4.1.3 Finally, set current = current.next to move to the next node in the merged list.
    5.After the while loop, check if either list1 or list2 is not null and append the remaining nodes to the end of the merged list by setting current.next = list1 || list2.
    6.Return dummy.next, which will be the head of the merged list.         
        */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;
/* `current` and `dummy` are pointing to the same object, and the `current` receives a next value
from the list and appends it to the same object where `dummy`is the header and then assigns itself to the next value.
In the end `current` will be pointing to the last node form the lists and 
*/
    while (list1 && list2) {
        
        if (list1.val < list2.val) {
            
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
 
        current = current.next;

    }
    if (list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};

let list1 = { val: 1, next: { val: 2, next: { val: 4, next: null } } }
let list2 = { val: 1, next: { val: 3, next: { val: 4, next: { val: 7, next: { val: 8, next: null } } } } }


// console.log(mergeTwoLists(list1, list2))

//----- Retry -----//
/*What needs to be done: merge two sorted lists and keep the order correct
How to do it: 
    1, Create a constructor that will be responsible for being the new head of the linked list.
     1.1. The constructor will receive two valus 'val' and 'next', which will be 0 and null resp.
    2. Create new NodeList called `dummy` and make a copy of it called `current`
    3. inside a for loop compare the val of list 1 with list 2 and add list 1 to `current` if it is smaller
     3.1. else, add list 2 to `current` 
    4. make current = current.next so it continues to add the next values in the list
    5. catch any possible extra values that remain and add them to the end of current
    6. return dummy.next
*/

function ListNode3(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;

}

var mergeTwoLists3 = function(list1, list2) {
    let dummy = new ListNode3();
    let current = dummy;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next
        }
        current = current.next;

    }
    if(list1) {
        current = list1
    } else {
        current = list2
    }
    return dummy.next
}

function ListNode4(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}

function mergeTwoLists4(list1, list2) {
    /*
    set a dummy node, copy it to current
    while both lists true, keep comparing current.val

    */
    let dummy = new ListNode4();
    let current = dummy;
 
    while(list1 && list2) {

        if(list1.val < list2.val) {

            current.next = list1 
            current = current.next
            list1 = list1.next;
   
        } else {

            current.next = list2
            current = current.next
            list2 = list2.next

        }
    }
    if(list1) {
        current.next = list1
    } else {
        current.next = list2
    }
    return dummy.next.next.next.next.next.next
}

function ListNode5(val, next){
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
}
var mergeTwoLists5 = (list1, list2) => {
    let dummy = new ListNode5();
    let current = dummy;

    //create a new header using current and  use it to set the next values depending on the size of each value
    while(list1 && list2) {
        if(list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
          
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
            if(list1) {
            current.next = list1;
        } else {
            current.next = list2;
        }

   return dummy.next.next.next.next.next

}
console.log(mergeTwoLists5(list1, list2))

