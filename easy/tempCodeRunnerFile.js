var mergeTwoLists = function(list1, list2) {
    let newArr = []

    for(let i = 0; i < list1.length; i++) {
        if(list1[i] <= list2[i]) {
            newArr.push(list1[i]);
            newArr.push(list2[i]);
        } else {
            newArr.push([list2[i]])
            newArr.push([list1[i]])
        }

    }
    return newArr

};

let list1 = [1, 3];
let list2 = [2, 4, 6];

console.log(mergeTwoLists(list1, list2))