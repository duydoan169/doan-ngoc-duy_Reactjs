// console.log(Number.isNaN(+("123abc")));
// console.log(Number.isNaN(+("123")));
// console.log(Number.isNaN(+("abc")));
function isPrime(num) {
    if (num < 2 || !Number.isInteger(+num)) {
        return false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
function processInput(input) {
    if (typeof (input) === "string") {
        if (/^[0-9]+$/.test(input)) {
            console.log(Math.pow((+input), 2));
            return;
        }
        else {
            var count = 0;
            for (var _i = 0, _a = input.split(""); _i < _a.length; _i++) {
                var char = _a[_i];
                if (/[a-zA-Z]/.test(char)) {
                    count++;
                }
            }
            console.log("".concat(count, " ky tu chu cai"));
        }
    }
    else if (typeof (input) === "number") {
        if (isPrime(input)) {
            console.log("la so nguyen to");
        }
        else {
            console.log("khong phai la so nguyen to");
        }
    }
    else {
        if (input) {
            console.log("gia tri la true - tien hanh xu li");
        }
        else {
            console.log("gia tri la false - dung xu li");
        }
    }
}
processInput(9);
processInput("123abc");
processInput(false);
