/**
 * Remove all instances of a given value in-place and return the new length.
    Example: nums = [3,2,2,3], val = 3 → Output: 2, nums = [2,2,_,_]
 */


function removeAllInstances(array, remove) {
    let i = 0;
    for( let j = 0; j < array.length;j++) {
        if(array[j] !== 3) {
            array[i] = array[j];
            i++
        }
    } 
    return {array, i};
}
const remove = 3;
const nums = [3,2,2,3,3,1,1,3,3,3,4,5,3,3,3];
// let result = removeAllInstances(nums)
// console.log(result)


/**
 * Remove duplicates in-place from a sorted array, return new length.
    Example: [1,1,2] → Output: 2, nums = [1,2,_]
 */

function removeDupli(array) {
    let i = 0;
    for(let j = 1; j < array.length;j++) {

            console.log(array[i], array[j])
        if(array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    i++;
    return {array, i}
}


// const result = removeDupli([1,1,2])
// console.log(result)

/**
 * Move all negative numbers to the front while maintaining relative order.
    Example: [1, -2, 3, -4, 5] → [-2, -4, 1, 3, 5]
 */

function moveNegativeNumToFront(array) {
    let i = 0;
    for(let j = 0; j < array.length; j++) {
        if(array[j] < 0) {
                [array[i], array[j]] = [array[j],array[i]]
                i++
            if(array[i]>array[j]) {
                [array[i], array[j]] = [array[j],array[i]]
            }
        } 

    }
    return array
}

let result = moveNegativeNumToFront([1, -2, 3, -4, 5])
console.log(result)