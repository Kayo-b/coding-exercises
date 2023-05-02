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

var mergeTwoLists6 = (list1, list2) => {
    let dummy = new ListNode5()
    let current = dummy;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2
            list2 = list2.next;
        }
        current = current.next
    }
    if(list1) {
        current.next = list1;
    } else {
        current.next = list2;
    }
    return dummy.next;

}
console.log(mergeTwoLists6(list1, list2))