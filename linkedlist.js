class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head;
        this.size = (head == null ? 0 : 1);
    }
    size(){
        return this.size;
    }
    clear(){
        this.head = null;
    }
    add(data){
        let node = new ListNode(data);
        if(this.head == null){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    getLast(){
        let lastNode = this.head;
        while(lastNode){
            lastNode = lastNode.next;
        }
        return lastNode;
    }
    getFirst(){
        return this.head;
    }
    insertAt(data, index){
        if(index < 0 || index > this.size){
            console.log("Please enter a valid index.");
        } else {
            let node = new ListNode(data);
            let current = this.head;
            let previous;
            if(index == 0){
                node.next = this.head;
                this.head = node;
            } else {
                let pos = 0;
                while(pos < index){
                    pos++;
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index){
        if(index < 0 || index > this.size){
            console.log("Please enter a valid index.");
        } else {
            let current = this.head;
            let previous = current;
            let pos = 0;
            if(index == 0){
                this.head = current.next;
            } else {
                while(pos < index){
                    pos++;
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
        }
        this.size--;
    }
    remove(data){
        let current = this.head;
        let previous = null;
        while(current){
            if(current.data === data){
                if(previous == null){
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return this.size;
            }
            previous = current;
            current = current.next;
        }
    }
    indexOf(data){
        let count = 0;
        let current = this.head;
        while(current){
            if(current.data === data){
                return count;
            }
            count++;
            current = current.next;
        }
        return -1;
    }
    isEmpty(){
        return this.size == 0;
    }
    printList(){
        let current = this.head;
        let str = "";
        while(current){
            str += current.data + " ";
            current = current.next;
        }
        console.log(str.trim());
    }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list1 = new LinkedList(node1);
list1.printList();
console.log(list1.head.next.data);
console.log(reverseList(list1.head));

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