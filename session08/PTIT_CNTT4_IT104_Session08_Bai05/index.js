function findEven(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (Number(element) % 2 == 0) {
            return Number(element);
        }
    }
    return undefined;
}
console.log("phan tu dau tien co the chia het cho 2: " + findEven(["aa", "ad", "ddsafa", "6", "asd", "2"]));
