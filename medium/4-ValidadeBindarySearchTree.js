/*

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

    The left
    subtree
    of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.

 

Example 1:

Input: root = [2,1,3]
Output: true

Example 2:

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

*/
/*
ELI5

Create a helper function that will receive three parameters: 
	1. node(node.left or node.right);
	2. lower(to represent the values that should be lower than the next val,
         this goes to the right because a valid BST right side always will be
          higher than the previous nodes);
	3. upper(to represent the values that should be higher in value than the next val,
         this goes to the left side because the left side always needs to have a lower value
          than the previous nodes);
	
    If node === null, returns true because an empty subtree is considered to be a valid binary search tree (BST) by definition.      
	Lower and upper will start as null because there are no ancestors during the first recursive call.
	The recursion will run and try to look for any incorrect value comparisons(returns false) 
    by comparing the ancestors(upper and lower) with the current node value. 
    If nothing incorrect is found, the function will return true at the end of all recursions.

*/


var isValidBST = function(root) {
    function helper(node, upper, lower) {
        if(!node) return true;
        if(upper && node.val >= upper) return false;//compares previous value with current
        if(lower && node.val <= lower) return false;//compares previous value with current
        if(!helper(node.right, node.val, upper)) return false;
        if(!helper(node.left, lower, node.val)) return false;
        return true;
    }
    return helper(root, null, null)
};

var isValidBST = (root) => {
    let helper = (node, upper, downer) => {
        if(!node) return true;
        if(upper && node.val >= upper) return false;
        if(downer && node.val <= downer) return false;
        if((!helper(node.right, node.val, upper))) return false;
        if((!helper(node.left, downer, node.val))) return false;
        return true
    }
    return helper(root, null, null)
}

var isValidBST = (root) => {
    function helper(node, lower, upper) {
        if (node === null) return true;
        if (lower !== null && node.val <= lower) return false;
        if (upper !== null && node.val >= upper) return false;
        if (!helper(node.right, node.val, upper)) return false;//checks out if every current right node is higher than the previous node
        if (!helper(node.left, lower, node.val)) return false;//checks out if every current left node is lower than the previous node 
        return true;
    }
    return helper(root, null, null);
}

var isValidBST = (root) => {
    function helper(node, higher, lower) {
        if(node === null) return true;
        if(higher !== null && node.val >= higher) return false;// see if current value is >= than previous(left side check)
        if(lower !== null && node.val <= lower) return false;// see if current value is <= than previous(right side check)
        if(!helper(node.right, higher, node.val)) return false;
        if(!helper(node.left, node.val, lower)) return false;
        return true;
    }
    return helper(root, null, null)
}

var isValidBST2 = (root) => {
   //compare previous node with left and right
   //if right is bigger not bigger and left is not smaller, return false
   //use recursive function
   let helper = (node, higher, lower) => {
        if(node === null) return true;
        if(higher !== null && node.val >= higher) return false;
        if(lower !== null && node.val <= lower) return false;
        if(!helper(node.left, node.val, lower)) return false;
        if(!helper(node.right, higher, node.val)) return false;
        return true;
   }                
   return helper(root, null, null);                                                    
}

var isValidBST3 = (root) => {
    let helper = (node, higher, lower) => {

        if(higher !== null && node.val >= higher) return false;
        if(lower !== null && node.val <= lower) return false;
        if(!helper(node.right, higher, node.val)) return false;
        if(!helper(node.left, node.val, lower)) return false;
        return true;
    }
    return helper(root, null, null)
}