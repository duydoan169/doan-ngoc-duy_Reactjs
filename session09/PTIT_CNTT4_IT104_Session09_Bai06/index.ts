function firstMatch<T>(arr: T[], predicate: (item: T) => boolean ){
    for (let item of arr) {
        if(predicate(item)){
            return item;
        }
    }
    return undefined;
}
let result = firstMatch([1,2,4,6], (n) => n % 2 === 0);
if(result==undefined){
    console.log("khong co phan tu thoa man");
}else{
    console.log(result);
}