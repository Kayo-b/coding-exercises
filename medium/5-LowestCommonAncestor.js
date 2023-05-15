/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia:
“The lowest common ancestor is defined between two nodes p and q as the lowest 
node in T that has both p and q as descendants (where we allow a node to be a 
descendant of itself).”

 

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Example 3:

Input: root = [2,1], p = 2, q = 1
Output: 2

*/

function lowestCommonAncestor(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
}

var lowestCommonAncestor = (root, p, q) => {
    //check if p and q are lower than root.val, if so, 
    //call function recursively with root.left, 
    //do the same for higher values and call function with root.right
    //when neither cases are true, that is, when left and right are lower or higher than root
    //that means that root is the common anscestor.
    if(root.val > p.val && root.val > q.val) {
        lowestCommonAncestor(root.left, p, q);
    } 
    else if(root.val < p.val && root.val < q.val) {
        lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
}

var lowestCommonAncestor2 = (root, p, q) => {
    //the approach is to see if p.val and q.val are bigger or smaller than the root.val
    //if they are both bigger, recurse through the function but to the right side
    //if they are smaller, recurse through the left side.
    //if one of them are smaller/bigger than root, that means they will bifurcate, so root is the common ancestor.
    if(p.val < root.val && q.val < root.val) {
        lowestCommonAncestor2(root.left, p, q);
    } else if(p.val > root.val && q.val > root.val) {
        lowestCommonAncestor2(root.right, p, q);
    } else {
        return root.val
    }
}

var lowestCommonAncestor3 = (root, p, q) => {
    if(p.val < root.val && q.val < root.val) {
        lowestCommonAncestor3(root.left, p, q)
    } else if(p > root.val && q > root.val) {
        lowestCommonAncestor3(root.right, p, q)
    } else {
        return root.val
    }
}