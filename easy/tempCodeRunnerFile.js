var mergeTwoLists7 = (list1, list2) => {
    let node = new ListNode6();
    let dummy = node;
    while(list1 && list2) {
        if(list1.val < list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next
    }
    if(list1) {
        dummy.next = list1;
    }
    if(list2) {
        dummy.next = list2;
    }
    return node.next

}


console.log(mergeTwoLists7(list1, list2))