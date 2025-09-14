function findElement(arr, searchValue) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (element == searchValue) {
            return element;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], 3));
