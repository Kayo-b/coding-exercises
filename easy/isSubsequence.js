/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original
 string by deleting some (can be none) of the characters without disturbing the relative
  positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 */


var isSubsequence2 = function(s,t) {
    //compare each letter of s with t concurently using a while loop
    //if s[i] === t[j] i++ j++ else only j++ so that s[i] runs through t until it finds an equal letter
    // when i || j reach length == to s || t, break while loop and return i === s.length 
    let i = 0;
    let j = 0;
    while(i < s.length && j < t.length) {
        if(s[i] === t[j]) {
            i++
        }
        j++
    }
    return i === s.length //this works because if i = s.length is true, that means that all the characters in i have been found in the same order inside t

}

var isSubsequence = function(s, t) {
    //compare each string, one letter at a time, if the letters match, proceed to the next letter on both words
    //if it doesn't match, proceed only to the next letter of the 't' word until all letters have been covered

    let j = 0;
    let k = 0;
    while(j < s.length && k < t.length) {
        if(s[j] === t[k]) {
            j++
        }
        k++
    }
    return j === s.length

};

console.log(isSubsequence("abc","abcq"))

