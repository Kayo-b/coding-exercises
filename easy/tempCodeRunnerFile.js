

var middleNode4 = function(head) {
    let fast = head
    let slow = head;
    while(fast) {
        fast = fast.next.next;
        slow = fast.next;
    }
    return slow
}


let list1 = { val: 1, next: { val: 2, next: { val: 4, next: {val:6, next: {val: 9, next: null}} } } }
console.log(middleNode4(list1))
