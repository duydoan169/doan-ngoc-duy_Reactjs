function identity<T>(input: T){
    return input;
}
console.log(identity(5));
console.log(identity("hello"));
console.log(identity({ a: 1 }));