/*
Given the root of a binary tree, 
return the level order traversal of its nodes' values. 
(i.e., from left to right, level by level).

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []
 */

var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let result = [];
    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            if(!node) break
                level.push(node.val);

                if(node.left) {
                    queue.push(node.left)
    
                }
                if(node.right) {
                    queue.push(node.right)
                }           
        }
        console.log(level)
        result.push(level)
        
    }
    return result
};

var levelOrder2 = function(root) {
    let queue = [root];
    let result = [];
    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val)
            if(node.left) {
                queue.push(node.left)
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        result.push(level)

    }
    return result

}

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

console.log(levelOrder(root));
