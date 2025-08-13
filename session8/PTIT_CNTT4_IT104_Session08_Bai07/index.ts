function flatten<T>(arr: T[]): T[]{
    let result: T[]=[];
    for (const ar of arr) {
        if(Array.isArray(ar)){
            result.push(...ar);
        }else{
            result.push(ar);
        }
    }
    return result;
}
console.log(flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]));
