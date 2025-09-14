var addNum = function () {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    console.log(num1 + num2);
};
var subtractNum = function () {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    console.log(num1 - num2);
};
var multiplyNum = function () {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    console.log(num1 * num2);
};
var divideNum = function () {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    if (isNaN(num1) || isNaN(num2) || num2 === 0) {
        console.log("khong hop le");
        return;
    }
    console.log(num1 / num2);
};
var power = function () {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("khong hop le");
        return;
    }
    console.log(Math.pow(num1, num2));
};
var sqrt = function () {
    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    if (isNaN(num1) || isNaN(num2) || num1 < 0 || num2 == 0) {
        console.log("khong hop le");
        return;
    }
    console.log(Math.pow(num1, (1 / num2)));
};
var factorial = function () {
    var num1 = +document.getElementById("num1").value;
    if (isNaN(num1) || num1 < 0) {
        console.log("khong hop le");
        return;
    }
    var result = 1;
    while (num1 > 0) {
        result = result * num1;
        num1--;
    }
    console.log(result);
};
