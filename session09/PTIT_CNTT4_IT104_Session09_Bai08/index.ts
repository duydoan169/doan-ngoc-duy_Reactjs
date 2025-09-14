function createObject<K extends string, V>(keys: K[], values:V[]){
    let obj={} as Record<K, V>;
    for(let i=0; i<keys.length; i++){
        obj[keys[i]]=values[i];
    }
    return obj;
}
const keys = ['name', 'age', 'email'];
const values = ['Alice', 25, 'alice@example.com'];
console.log(createObject(keys, values));