/*
Given an array of integers nums which is sorted in ascending order, and an integer target, 
write a function to search target in nums. If target exists, then return its index. 
Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

*/

//O(n2) solve
// var search = function(nums, target) {
//     for(let num of nums) {
//         if(num === target) return nums.indexOf(num)
//     }
//     return -1
// };

var search2 = function(nums, target) {
    //separate left and right sides
    //find out mid index
    //check to see if mid index position = target
    //if yes, return mid
    //if not, check to see if nums[mid] < target
    //if so, value is at the left side from target, so add + 1 to left and redo mid value calculation
    //if not, then target is at the right side from the target, so subtract - 1 from right and redo mid value calculation
    //the mid value will get closer and closer to the target value
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(target === nums[mid]) return mid;
        else if(nums[mid] < target) {
            left = mid + 1;

        } else {
            right = mid - 1;
        }
    }
    return -1
}


var search3 = (nums, target) => {
    let right = nums.length;
    let left = 0;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1
}

var search4 = (nums, target) => {
    let left = 0;
    let right = nums.length -1;
    while(left <= right) {
        let mid = Math.floor((right + left) / 2);
        console.log(mid)
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) left = mid + 1
        else right = mid - 1;
    }
    return -1
}

var search5 = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        console.log(right, left)
        let mid = Math.floor((right + left) / 2);
        console.log(mid)
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
let nums = [-1,0,3,5,9,12]
console.log(search5(nums, 0))