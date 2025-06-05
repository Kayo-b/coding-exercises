/**
Given array nums and integer val, remove all instances of val in-place and return the new length.
Example:
	Input: nums = [3,2,2,3], val = 3 → Output: 2, nums = [2,2,...] 
*/
// 
let array = [1,1,1,1,4,1,3,1,3,3];
let val = 1;

function removeElement(arr, val) {
	let i = 0;
	for(let j = 0; j < arr.length; j++) {
		if(arr[j] !== val){
			console.log(arr[i])
			arr[i] = arr[j]
			i++
		}
		console.log('continue')
	}
		console.log('break', arr)
console.log(i)
}
removeElement(array, val)

