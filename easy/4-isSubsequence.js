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

var isSubsequence3 = function(s,t) {
    //verify if every character from s is contained in t
    //if true, verify if the order of the characters is the same
    //create two new variables set to 0, these will be the counters for each letter
    //create a while loop that will run while the new variables are < than the length of both words
    //the loop will compare each letter from s to t and see if it is the same, if it is, it add +1 to
    // both counters and continue to the next letter comparison
    //if it isn't the same, the +1 will be added only on the 
    let i = 0;
    let k = 0;
    while(i < s.length && k < t.length) {
        if(s[i] === t[i]) {
            i++
        }
        k++

    }
    return i === s.length
}


var isSubsequence4 = function(s,t) {
    /*
    compare all indexes of s with all of the indexes of t, from left to right
    if index doesnt match t, compare to next index, if it matches, check next index
    until all have been verified
    */
    let i = 0;
    let j = 0;
    while(i < s.length && j < t.length) {
        if(s[i] === t[j]) {
            i++
            
        } 
        j++
      
    }

    return i === s.length
}
console.log(isSubsequence4("abc","azcq"))


var isSubSeq = (s,t) => {
    let k = 0;
    let j = 0;
    //Compare each letter from s to each letter from t
    while(k < s.length && j < t.length) {
        console.log(k)
        console.log(j)
        if(s[k] === t[j]) {
            k++
        } 
        j++
    }
    return k === s.length
}

var isSubSeq2 = (s,t) => {
    /* create two index parameters to keep track of string transposing 
        compare every letter with another
        if letters match add to new array
        return new array === s 
    */
   let j = 0;
   let k = 0;

   while(k < t.length) {
    if(s[j] === t[k]) {
        
        j++
    }
    k++
   }

   return j === s.length

}

    console.log(isSubSeq2("abc","azcq"))