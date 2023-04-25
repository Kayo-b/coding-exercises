
function Node(val, children) {
    this.val = val;
    this.children = children;
};

// Create an n-ary tree
let root = new Node(1, []);
let child1 = new Node(3, []);
let child2 = new Node(2, []);
let child3 = new Node(4, []);
root.children.push(child1);
root.children.push(child2);
root.children.push(child3);
let grandChild1 = new Node(5, []);
let grandChild2 = new Node(6, []);
child1.children.push(grandChild1);
child1.children.push(grandChild2);
console.log(root)