
var preorder = function(root) {
    let result = [];
    var tranverse = function(node) {
        if(!node) return;//if node null, return and continue to next node
        result.push(node.val);
        for(let child of node.children) {
            tranverse(child);
        
        }
    }
    tranverse(root);
    return result;

};


var preorder2 = function(root) {
    //recusive function that goes depth first and returns when node is null
    let result = [];
    var traverse = function(node) {
        if(!node) return;
        result.push(node.val)
        for(let child of node.children) {
            traverse(child)
        }
    }
    traverse(root)
    return result
}
function Node(val, children) {
    this.val = val;
    this.children = children;
};

var preorder3 = (root) => {
    let result = [];
    let traverse = (node) => {
        if(!node) return;
        result.push(node.val);
        for(let child of node.children) {
            traverse(child)
        }
        
    }
    traverse(root)
    return result
}


var preorder4 = (root) => {
    let result = [];
    let helper = (node) => {
        if(!node) return;
        result.push(node.val);
        for(let child of node.children) {
            helper(child)
        }
        return result
    }
    return helper(root)
}

var preorder5 = (root) => {
    let result = [];
    let helper = (node) => {
        if(!node.children) return;
        result.push(node.val)
        for(let nodes of node.children) {
            
            helper(nodes)
        }
        return result
    }
    return helper(root)
    
}

var preorder6 = (root) => {
    let result = [];
    let helper = (node) => {
        if(!node.children) return;
        result.push(node.val)
        for(let child of node.children) {
            helper(child)
        }
        return result
    }
    return helper(root)
}
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

console.log(preorder6(root))