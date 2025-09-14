function filterByType(arr, type) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (type.includes(typeof (element))) {
            result.push(element);
        }
    }
    if (result.length == 0) {
        return "khong co du lieu phu hop";
    }
    else {
        return result;
    }
}
var mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
console.log(filterByType(mixedArray, ["number", "string"]));
