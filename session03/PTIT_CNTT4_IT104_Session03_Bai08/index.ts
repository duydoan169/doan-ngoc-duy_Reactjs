let addNum=(num1: number|string, num2: number|string) => {
    num1=+num1;
    num2=+num2;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    return num1+num2;
}
let subtractNum=(num1: number|string, num2: number|string) => {
    num1=+num1;
    num2=+num2;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    return num1-num2;
}
let multiplyNum=(num1: number|string, num2: number|string) => {
    num1=+num1;
    num2=+num2;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    return num1*num2;
}
let divideNum=(num1: number|string, num2: number|string) => {
    num1=+num1;
    num2=+num2;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    return num1/num2;
}
console.log(addNum(1, 2));
console.log(addNum("12", 2));
console.log("abc", 1);