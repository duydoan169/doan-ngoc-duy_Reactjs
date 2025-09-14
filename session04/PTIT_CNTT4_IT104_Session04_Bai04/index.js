function handleUnionType(input) {
    if (typeof (input) === "string") {
        console.log("".concat(input.length, " ky tu"));
    }
    else {
        if (input % 2 == 0) {
            console.log("day la so chan");
        }
        else {
            console.log("day la so le");
        }
    }
}
handleUnionType(10);
handleUnionType("demo123");
