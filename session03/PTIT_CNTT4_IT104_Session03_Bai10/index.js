function checkLongest(str) {
    var strArr = str.split(" ");
    var maxLength = strArr[0].length;
    var maxString = strArr[0];
    for (var _i = 0, strArr_1 = strArr; _i < strArr_1.length; _i++) {
        var string = strArr_1[_i];
        var arr = [];
        for (var _a = 0, string_1 = string; _a < string_1.length; _a++) {
            var char = string_1[_a];
            if (!arr.includes(char)) {
                arr.push(char);
            }
        }
        if (arr.length > maxLength) {
            maxLength = arr.length;
            maxString = string;
        }
    }
    console.log(maxString);
}
checkLongest("hello world apple banana orange pumpkin cucumber");
