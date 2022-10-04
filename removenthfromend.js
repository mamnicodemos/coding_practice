function removeNthFromEnd(head, n){
    let tempHead = new ListNode(0);
    tempHead.next = head;
    
    let slow = tempHead;
    let fast = tempHead;
    
    for(let i = 1; i <= n + 1; i++){
        fast = fast.next;
    }
    
    while(fast != null){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    return tempHead.next;
}