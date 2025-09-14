function firstMatch(arr, predicate) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        if (predicate(item)) {
            return item;
        }
    }
    return undefined;
}
var result = firstMatch([1, 2, 4, 6], function (n) { return n % 2 === 0; });
if (result == undefined) {
    console.log("khong co phan tu thoa man");
}
else {
    console.log(result);
}
