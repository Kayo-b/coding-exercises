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
var /*explained*/ levelOrder3 = function(root) {
    if(!root) return [];
    //use first in first out queue
    //save values to level array and push them to result array
    let queue = [root];//receives first value from root to be handled
    let result = [];
    while(queue.length > 0) {
        let level = []//create level array in the fist loop layer so that it is reseted after each while loop
        //next: create for loop based on the size of the queue length
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            //create node by removing first value from queue
            let node = queue.shift()
            //push node.val into level
            level.push(node.val);
            if(!node) break;
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        result.push(level)
    }
    return result
};

var lvlOrder4 = (root) => {
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift()
            level.push(node.val);
            console.log(node.left.val)
            console.log(node.right)
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
        }
        result.push(level)
    }
    return result
}

var lvlOrder5 = (root) => {
    let queue = [root];
    let result = [];
    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size;i++) {
            let node = queue.shift();
            level.push(node.val);
            if(!node) break;
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        result.push(level)
    }
    return result;
}

var lvlOrder6 = (root) => {
    let queue = [root];
    let result = [];
    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val)
            if(!node.left || !node.right) break;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        result.push(level)
    }
    return result;
}

var lvlOrder7 = (root) => {
    let queue = [root];
    let result = [];
    while(queue.lenght > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            if(!node.left || !node.right) break;
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right)
            }
        }
        result.push(level)
    }
    return result;
}

function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(1);
let child1 = new Node(2);
let child2 = new Node(3);
root.left = child1;
root.right = child2;
let grandChild1 = new Node(4);
let grandChild2 = new Node(5);
child2.left = grandChild1;
child2.right = grandChild2;

console.log(lvlOrder4(root));
