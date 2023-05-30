
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }

// let dummy = new ListNode()
// let current = dummy

var reverseList = function(head) {
    //create three pointers: current, next, prev;
    //run a loop while current != null
    //pass through all head values by asigning values:
    //save next node: next = current.next
    //pass prev to the end of the list: current.next = prev(null at first)
    //asign current to prev for the next loop: prev = current
    let current = head;
    let prev = null;
    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};


var reverseList2 = function(head) {
    //create three pointers: prev, current, next
    //run them through a while loop untill null is reached
    //prev starts as null
    //next value will be current.next
    //prev value will be passed to the current.next
    //prev will receive current value;
    //current will get value from next

    let current = head;
    let prev = null;
    while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev
    
}
let list1 = { val: 1, next: { val: 2, next: { val: 4, next: {val:6, next: {val: 9, next: null}} } } }


var reverseList3 = (head) => {
    let prev = null;
    let current = head;
    while(current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }
    return prev
}

var reverseList4 = (head) => {
    let prev = null;
    let current = head;
    while(current) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;

    }
    return prev
}

console.log(reverseList4(list1))