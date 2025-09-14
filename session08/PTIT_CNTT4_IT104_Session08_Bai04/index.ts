function combineObject<T, U>(obj1: T, obj2: U){
    return {...obj1, ...obj2};
}
console.log(combineObject({name: "duy", age: 18}, {job: "student", gender: "male"}));
