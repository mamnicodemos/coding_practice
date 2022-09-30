class BinaryTree {
    constructor(val){
        this.val = val;
        this.leftChild = null;
        this.rightChild = null;
    }
    insertLeft(val){
        if(this.leftChild){
            let newNode = new BinaryTree(val);
            newNode.leftChild = this.leftChild;
            this.leftChild = newNode;
        } else {
            this.leftChild = new BinaryTree(val);
        }
    }
    insertRight(val){
        if(this.rightChild){
            let newNode = new BinaryTree(val);
            newNode.rightChild = this.rightChild;
            this.rightChild = newNode;
        } else {
            this.rightChild = new BinaryTree(val);
        }
    }
    DFSPreOrder(){
        console.log(this.val);
        if(this.leftChild){
            this.leftChild.DFSPreOrder();
        }
        if(this.rightChild){
            this.rightChild.DFSPreOrder();
        }
    }
    DFSInOrder(){
        if(this.leftChild){
            this.leftChild.DFSInOrder();
        }
        console.log(this.val);
        if(this.rightChild){
            this.rightChild.DFSInOrder();
        }
    }
    DFSPostOrder(){
        if(this.leftChild){
            this.leftChild.DFSPostOrder();
        }
        if(this.rightChild){
            this.rightChild.DFSPostOrder();
        }
        console.log(this.val);
    }
    BFS(){
        let queue = [];
        queue.push(this);
        while(queue.length > 0){
            let currentNode = queue.shift();
            console.log(currentNode.val);
            if(currentNode.leftChild){
                queue.push(currentNode.leftChild);
            }
            if(currentNode.rightChild){
                queue.push(currentNode.rightChild);
            }
        }
    }
}

let aNode = new BinaryTree('a');
aNode.insertLeft('b');
aNode.insertRight('c');

let bNode = aNode.leftChild;
bNode.insertRight('d');

let cNode = aNode.rightChild;
cNode.insertLeft('e');
cNode.insertRight('f');

let dNode = bNode.rightChild;
let eNode = cNode.leftChild;
let fNode = cNode.rightChild;

console.log(aNode.val);
console.log(bNode.val);
console.log(cNode.val);
console.log(dNode.val);
console.log(eNode.val);
console.log(fNode.val);
console.log(aNode.DFSPreOrder());
console.log(aNode.DFSInOrder());
console.log(aNode.DFSPostOrder());
console.log(aNode.BFS());