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
    if(s.length !== t.length) {
        return false;
    }
    let k = {};
    let j = {};
    for(let i = 0; i < s.length;i++) {
        if(!k[s[i]] && !j[t[i]]) {
            k[s[i]] = t[i];
            j[t[i]] = s[i];
        } else if(k[s[i]] !== t[i] || t2s[t[i]] !== s[i] ) {
            return false
        }
    }
    return true
}

console.log(isIsomorphic3("paper", "title"))

var isIso = (s,t) => {
    if(s.length !== t.length) {
        return false;
    }
    let s2t = {};
    let t2s = {};
    for(let i = 0; i < s.length; i++) {
        //create an object for each string, where each letter will be maped to the opposing letter
        //if the key letter isnt in the obj yet, add it and assign its value. do that for both objects
        //if value was already assigned, that means that it is a repeated letter, so we'll check if this
        //repeated letter has a different value than the one previously attributed in the object.
        if(!s2t[s[i]] && !t2s[t[i]]) {
            s2t[s[i]] = t[i];
            t2s[t[i]] = s[i]
        } else if(s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) {
            return false
        }
    }
    return true
 
}


var isIso2 = (s,t) => {
    if(s.length !== t.length) return false;
    //map each letter and their frequency in the string between both words
    //if repeated letters in one word are different than the ones mapped, return false, else return true.
    let s2t = {};
    let t2s = {};
    for(let i = 0; i < s.length;i++) {
        if(!s2t[s[i]] && !t2s[t[i]]) {
            s2t[s[i]] = t[i];
            t2s[t[i]] = s[i];
        } else {
            if(s2t[s[i]] !== t[i] || t2s[t[i]] !== s[i]) {
                return false
            }
        }
    }
    return true
        

}

var isIso3 = (s,t) => {
    if(s.length !== t.length) return false
    let s2t = {};
    let t2s = {};
    for(let i = 0;i < s.length; i++) {
        if(!s2t[s[i]] && !t2s[t[i]]) {
            s2t[s[i]] = t[i]
            t2s[t[i]] = s[i]
        } else {
            if(s2t[s[i]] !== t[i]) return false
        }

        //if(s[i] !== t2s[t[i]] || t[i] !== s2t[s[i]]) return false

    }
    return true
}
console.log(isIso3("egg", "add"))