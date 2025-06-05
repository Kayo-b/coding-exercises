/**
 * Given an array nums, move all 0's to the end while maintaining the order of non-zero elements.
   Example:
     Input: [0,1,0,3,12] → Output: [1,3,12,0,0]
*/


function moveZeroes(array) {
    let i = 0;
    for(let j = 0; j < array.length; j++) {
        if(array[j] !== 0) {
            [array[i], array[j]] = [array[j] ,array[i]];
            i++;
        }
    }
    return array;
}

console.log(moveZeroes([1,0,2, 1,3,0,0,1,0,1,1,1,1,1,1,1,1,0]));