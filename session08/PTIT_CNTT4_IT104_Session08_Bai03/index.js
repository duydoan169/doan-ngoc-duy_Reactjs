function reverseArr(arr) {
    var i = 0;
    var j = arr.length - 1;
    while (i < j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    console.log(arr);
}
reverseArr(["a", "b", "c"]);
reverseArr([1, 2, 3]);
