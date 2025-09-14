let addNum=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    let num2=+(document.getElementById("num2") as HTMLInputElement).value;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    console.log(num1+num2);
}
let subtractNum=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    let num2=+(document.getElementById("num2") as HTMLInputElement).value;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    console.log(num1-num2);
}
let multiplyNum=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    let num2=+(document.getElementById("num2") as HTMLInputElement).value;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    console.log(num1*num2);
}
let divideNum=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    let num2=+(document.getElementById("num2") as HTMLInputElement).value;
    if(isNaN(num1) || isNaN(num2) || num2===0){
        console.log("khong hop le");
        return;
    }
    console.log(num1/num2);
}
let power=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    let num2=+(document.getElementById("num2") as HTMLInputElement).value;
    if(isNaN(num1) || isNaN(num2)){
        console.log("khong hop le");
        return;
    }
    console.log(num1**num2);
}
let sqrt=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    let num2=+(document.getElementById("num2") as HTMLInputElement).value;
    if(isNaN(num1) || isNaN(num2) || num1<0 || num2==0){
        console.log("khong hop le");
        return;
    }
    console.log(num1**(1/num2));
}
let factorial=() => {
    let num1=+(document.getElementById("num1") as HTMLInputElement).value;
    if(isNaN(num1) || num1<0){
        console.log("khong hop le");
        return;
    }
    let result=1;
    while(num1>0){
        result=result*num1;
        num1--;
    }
    console.log(result);
}