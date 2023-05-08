/*
Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Example 1:

Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]

Example 2:

Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

*/



// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
};
/*
Overview: to resolve this exercise, we'll use a breadth first search to get all levels from left to right in order.
To acomplish this we'll be using the FIFO(First in First Out) Queue algo. 
*/
var levelOrder = function(root) {
    if (!root) return [];
    let result = [];
    let queue = [root];//insert root into the queue
    while (queue.length > 0) {//run untill queue is empty
        let level = [];//this will store each level in a separate array that will be added into the result array
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();//take the first value from the array and attribute it to node
            level.push(node.val);//add only the value from the node into the level array
            for (let child of node.children) {
                queue.push(child);//push all child nodes from left to right into the queue so that the process is repeated with them
            }
        }
        result.push(level);
    }
    return result;
};

/* 
Step-By-Step Guide for Memory fixation:
1.create result array to receive level array
2.create queue array with root as its initial value
3.start while loop while queue.length > 0 
4.create level array that will receive values in the next loop
5.create second for loop if i < queue.length
6.inside for loop create node = queue.shift() so it receives the first queue value;
7.save the node.val inside level by level.push(node.val)
9.create last loop for child of node.children;
10. inside for loop take each child and add into queue.push(child)
11.outside the second loop add the level value to the result array
12 return result
}
*/

var levelOrder2 = (root) => {
    if(!root) return []//return empty if root is empty
    //create the resulting array that will hold all levels
    let result = [];
    //create queue with root at its start
    let queue = [root];
    //while loop that will iterate while there are any nodes inside the queue
    while(queue.length > 0) {
        //save the val from the node into level
        let level = []
        for(let i = 0; i < queue.length; i++) {/*create loop to push all curent node.val into level array
                                                 and to to push each child from each node into the end of the queue*/
            let node = queue.shift();//detach the first node from the queue
            level.push(node.val);
            for(let child of node.children) {//take each child from the first node from the queue and add them into the queue
                queue.push(child)
                
    
            }
        }

        result.push(level)
    }
    return result
}

var levelOrder3 = (root) => {
    let result = []
    let queue = [root]
    while(queue.length > 0) {
        let level = []
        let size = queue.length;//set side outside for loop so that it ends at the correct moment
        for(let i = 0; i < size; i++) {
            let node = queue.shift()
            level.push(node.val)
            for(let child of node.children) {
                queue.push(child)
            }
        }
        result.push(level)
    }
    return result
}
/*
create the queue array, create the result array, add root into the queue array
while the queue length > 0: s
*/
var lvlOrder4 = (root) => {
    let result = []
    let queue = [root]
    while(queue.length > 0) {
        let level = [];
        let size = queue.length
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            for(let child of node.children) {
                queue.push(child);
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
        for(let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);
            for(let child of node.children) {
                queue.push(child)
            } 
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
        for(let i = 0; i < size;i++) {
            let node = queue.shift();
            level.push(node.val);
            for(let child of node.children) {
                queue.push(child)
            }
        }
        result.push(level);
    }
    return result;

}

var lvlOrder7 = (root) => {
    //use queue for first in and first out algo
    //each level will be pushed inside its own array (so level array will be created inside the first loop)
    //levels will be pushed inside the result array after the end of each loop
    //node parameter will be created inside second loop so it passes the node.val into the level array
    //inside the third loop is where the node child will be traversed and passed to the queue for next iteration
    let queue = [root]
    let result = []
    while(queue.length > 0) {
        let level = []
        let size = queue.length
        for(let i = 0; i < size; i++) {
            let node = queue.shift()
            level.push(node.val)
            for(let child of node.children) {
                queue.push(child)
            }
        }
        result.push(level)
    } 
    return result
}

var lvlOrder8 = (root) => {
    let queue = [root];
    let result = [];
    while(queue.length > 0) {
        let level = [];
        let size = queue.length;
        for(let i = 0; i < size;i++) {
            let node = queue.shift();
            level.push(node.val);
            for(let child of node.children) {
                queue.push(child)
            }
        }
        result.push(level)
    }
    return result
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

// Test the function
console.log(root)
console.log(lvlOrder5(root)); // [[1],[3,2,4],[5,6]]
//Wrong answer
// var levelOrder = function(root) {
//     //add the first value, transverse the array
//     //create new temp array
//     //push values inside if not null, if null push temp array to original array and reset temp
//     let newArr = []
//     let temp = []
//     let nullCount = 0;
//     let nullCount2 = 0;
//     for(let i = 1; i < root.length; i++) {
//         if(i===1)newArr.push([root[i-1]])
//         if(root[i] === null) {
//             nullCount++
//             while(nullCount > 1) {
//                 i++
//                 if(root[i] !== null){
//                     nullCount2--;
//                     temp.push(root[i])
//                 } else {
//                     i++;
//                     nullCount2++;
//                     console.log(temp)
//                     if(nullCount2 === 2) {
//                         nullCount = 0
                        
//                     }
//                 }
//             }
//             if(temp.length > 0) {
//                 newArr.push(temp);
//                 temp = []
//             };
//         } else {
//             temp.push(root[i])
//             nullCount = 0
//         }    
//     }
//     newArr.push(temp);
    
//     return newArr
// };


//console.log(levelOrder([1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]))
// console.log(levelOrder([1,null,3,2,4,null,5,6]))

