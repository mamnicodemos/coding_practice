function reverseList(head){
    let previous = null;
    while(head){
        let nextNode = head.next;
        head.next = previous;
        previous = head;
        head = nextNode;
    }
    return previous;
}