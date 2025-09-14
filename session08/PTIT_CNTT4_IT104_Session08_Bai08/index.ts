function partialUpdate<T>(obj: T, updates: Partial<T>){
    return {...obj, ...updates};
}
console.log(partialUpdate({ name: 'Alice', age: 30, job: 'Developer' },{ age: 31 }));
