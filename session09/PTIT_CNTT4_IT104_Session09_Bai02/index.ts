function wrapInArray<T>(input: T){
    return [input];
}
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray({ a: 1 }));