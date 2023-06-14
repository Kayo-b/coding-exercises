var longestPalindrome4 = (s) => {
    let map = {};
    for(let letter of s) {
        if(!map.letter) {
            map.letter = 1
        } else if(map.letter) {
            map.letter += 1;
        }
    }
    console.log(map)
}
console.log(longestPalindrome3("abbbbddcc"))