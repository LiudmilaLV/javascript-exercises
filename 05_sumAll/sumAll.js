
function findSum(small, big) {
    let sum = 0;
        for (let i = small; i < (big + 1); i++) {
            sum += i;
        }
    return sum;
};

const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1)) || !(Number.isInteger(num2)) || (num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }
    let sum = 0;
    if (num1 < num2) {
        sum = findSum(num1, num2);
    } else {
        sum = findSum(num2, num1);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
