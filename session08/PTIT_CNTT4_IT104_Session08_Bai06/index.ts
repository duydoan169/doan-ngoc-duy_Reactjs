function findElement<T>(arr: T[], searchValue: T): T | undefined{
    for (const element of arr) {
        if(element==searchValue){
            return element;
        }
    }
    return undefined;
}
console.log(findElement([1, 2, 3, 4], 3));
