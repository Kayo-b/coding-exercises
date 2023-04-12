/*

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. 
No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true

*/

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let s2t = {};
    let t2s = {};
    for(let i = 0; i < s.length; i++) {
        if(!s2t[s[i]] && !t2s[t[i]]) {
            s2t[s[i]] = t[i]
            t2s[t[i]] = s[i]
        } else if(s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) {
            return false
        }
    }
    return true
 

};

console.log(isIsomorphic("as", "de"))


var isIsomorphic2 = function(s, t) {
    //create 2 objects and map every letter from both words
    // if the letter mapped repeats itself, dont add into the obj
    //that is, the letters(keys) in the object must be unique
    //if there are repeated letters, verify if they have the same equivalent in the other word
    //to do this, use a while loop that compares each letter from each word at the same time
    if(t.length !== s.length) {
        return false
    }
    let s2t = {};
    let t2s = {};
    for(let i = 0; i < s.length; i++) {
        if(!s2t[s[i]] && !t2s[t[i]]) {
            s2t[s[i]] = t[i];
            t2s[t[i]] = s[i];

            console.log(t2s)

            
        } else if(s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) {
            return false
        }
    }
    return true 

    
    
}

console.log(isIsomorphic2("as", "de"))

var isIsomorphic3 = function(s, t) {
    
}