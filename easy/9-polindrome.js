/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

*/
var longestPalindrome = function(s) {
    let obj = {};
    for(let i = 0; i < s.length; i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }

    let count = 0;
    let hasOdd = false;
    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            count += obj[key];
        } else {
            count += obj[key] - 1;
            hasOdd = true;
        }
    }
    
    if (hasOdd) count++;
    
    return count;
};


var longestPalindrome2 = (s) => {
    //create an object and populate it keys that represent every letter from the string;
    //check for even numbers, and add them to a count parameter, also add the odd numbers to it but subtract 1 to even it out.
    let obj = {};
    for(let i = 0; i < s.length;i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = 1;

        } else {
            obj[s[i]] += 1;
        }
    }
    let count = 0;
    let hasOdd = false;
    for(let key in obj) {
        if(obj[key] % 2 === 0) {
            count += obj[key];
        } else {
            count += obj[key] - 1;
            hasOdd = true;
        }
    }
    if(hasOdd) count++
    return count;
    
}
    console.log(longestPalindrome2("abbbbddcc"))

var longestPalindrome3 = (s) => {
    let obj = {};
    //map every letter and its frequency in the object
    //create count value for the length of the palindrome
    //add all even numbers to the count.
    //add all odd numbers -1 to the count.
    //if there were odd numbers present, add + 1 to the count after all the values have been added(this +1 will be the odd number at the center of the word)
    //return count
    let count = 0 ;
    for(let i = 0; i < s.length;i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    let isOdd = false;
    for(let key in obj) {
        
        if(obj[key] % 2 === 0) {
            
            count += obj[key];
        } else {
            count += obj[key] - 1;
            isOdd = true;
        }

    }
    if(isOdd) count++
    return count;
}

var longestPalindrome4 = (s) => {
    let map = {};
    let total = 0;
    let hasOdd = false;
    for(let i = 0; i < s.length;i++) {
        if(!map[s[i]]) {
            map[s[i]] = 1
        } else if(map[s[i]]) {
            map[s[i]] += 1;
        }
    }
    for(let val in map) {
        if(map[val] % 2 === 0)  total += map[val];
        else if(map[val] % 2 === 1) hasOdd = true;
    }
    if(hasOdd === true) total++
    return total
}
console.log(longestPalindrome4("abbbbddcc"))