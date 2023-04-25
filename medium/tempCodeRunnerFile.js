function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
root.left = child1
root.right = child2
let grandChild1 = new Node(4);
let grandChild2 = new Node(5);
child2.left = grandChild1;
child2.right = grandChild2;
console.log(root);