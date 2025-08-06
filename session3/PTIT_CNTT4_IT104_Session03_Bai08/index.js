var addNum = function (num1, num2) {
    num1 = +num1;
    num2 = +num2;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    return num1 + num2;
};
var subtractNum = function (num1, num2) {
    num1 = +num1;
    num2 = +num2;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    return num1 - num2;
};
var multiplyNum = function (num1, num2) {
    num1 = +num1;
    num2 = +num2;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    return num1 * num2;
};
var divideNum = function (num1, num2) {
    num1 = +num1;
    num2 = +num2;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    return num1 / num2;
};
console.log(addNum(1, 2));
console.log(addNum("12", 2));
console.log("abc", 1);