const removeFromArray = function(arr, ...items) {
    let newArr = [];
    let noMatch = true;
    for (let i = 0; i < (arr.length + 1); i++) {
        noMatch = true;
        for (let j = 0; j < (items.length + 1); j++) {
            if (arr[i] === items[j]) {
                noMatch = false;
                continue;
            }
        }
        if (noMatch) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
