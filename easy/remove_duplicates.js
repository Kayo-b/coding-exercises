
/**
 * @param {number[]} nums
 * @return {number}
 */
// compare previous value with current value
// if same, remove current value
// var removeDuplicates = function(nums) {
//     let prevVal = null;
//     let newLength;
//     const numsLength = nums.length;
//     for(let i = 0; i < numsLength; i++) {
//         while(prevVal === nums[i]) {
//             nums.splice(i,1)
//             if(newLength === nums.length) {
//                 break;
//             }
//             newLength = nums.length
//         }
//         prevVal = nums[i];
//     }
// };


//better return count

var removeDuplicates = function (nums) {

    let k = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]
            console.log(nums)
            k++
        }

    }
    console.log(k) 
    return k
};


removeDuplicates([1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,3,3,3])
