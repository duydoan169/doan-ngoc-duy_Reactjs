function filterByType<T>(arr: T[], type: string[]){
    let result=[];
    for (let element of arr) {
        if(type.includes(typeof(element))){
            result.push(element);
        }
    }
    if(result.length==0){
        return "khong co du lieu phu hop"
    }else{
        return result;
    }
}
const mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
console.log(filterByType(mixedArray, ["number", "string"]));
