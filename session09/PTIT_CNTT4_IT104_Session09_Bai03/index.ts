function mergeObject<T, U>(obj1: object, obj2 : object){
    return {...obj1, ...obj2};
}
console.log(mergeObject({ name: "Join" }, { role: "Developer" }));
