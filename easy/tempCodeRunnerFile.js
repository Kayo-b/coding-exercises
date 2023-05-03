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
let nums = [-1,0,3,5,9,12]
console.log(search4(nums, 9))