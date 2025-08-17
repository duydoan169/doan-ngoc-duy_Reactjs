function withDefault(input) {
    if (input == undefined) {
        return "default";
    }
    else {
        return input;
    }
}
console.log(withDefault());
