
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

console.log(isSubSeq("abc","azcq"))