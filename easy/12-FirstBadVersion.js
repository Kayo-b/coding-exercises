/*

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

 

Example 1:

Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:

Input: n = 1, bad = 1
Output: 1

*/
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let right = n;
        let left = 1;
        while( left < right ) {
            let mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion) right = mid;
            else left = mid + 1;
        }
        return left;
    };
};

/*

Explanation:
When the algorithm finds a bad version, it sets the right boundary to the position of that version and
continues to search for the first bad version within the range defined by the new left and right boundaries. 
The left boundary is updated by setting it to mid + 1 until it reaches the same position as the right boundary. 
At this point, the first bad version has been found and the algorithm returns its position.

---

*The reason for using this expression instead of simply (left + right) / 2 is to avoid integer overflow. 
If left and right are very large numbers, their sum could exceed the maximum value that can be represented
by an integer, causing an overflow. By subtracting left from right before dividing by 2, we ensure that the
intermediate result is always within the range of an integer, avoiding overflow.
*/


var solution = function(isBadVersion) {

    return function(n) {
        let right = n;
        let left = 1;
        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion(mid)) right = mid
            else left = mid + 1
        }
    }
}

var solution = function(isBadVersion) {
    return function(n) {1
        let left = 1;
        let right = n;
        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left
    }
}

var solution = function(isBadVersion) {
    return function(n) {
        let right = n;
        let left = 1;
        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2); //*
            if(isBadVersion(mid)) right = mid;//that means that the starting bad value can be the current mid or some value before it, so set right boudary at mid.
            else left = mid + 1;
        }
    }
}

var solution = (isBadVersion) => {
    return function(n) {
        let left = 1;
        let right = n;
        while(right > left) {
            let mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left;
    }
    
}

var solution2 = (isBadVersion) => {
    //run two pointers left and right(two extreams of the array), right will store the value where isBadVersion returns true, when mid value stops being true(its not a bad value anymore) left will then start to add +1 value at a time to mid until it reaches the right value, which means that the left value will have reached the first bad value

    return function(n) {
        let left = 1;
        let right = n;
        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left
    }

}

var solution3 = (isBadVersion) => {
    return function(n) {
        let left = 1;
        let right = n;
        while(left < right) {
            mid = Math.floor(left + (right - left) / 2);
            if(isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}