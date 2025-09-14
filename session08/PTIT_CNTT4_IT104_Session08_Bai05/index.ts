function findEven<T>(arr: T[]): number| undefined{
    for (let element of arr) {
        if(Number(element) % 2 ==0){
            return Number(element);
        }
    }
    return undefined;
}

console.log("phan tu dau tien co the chia het cho 2: " + findEven(["aa", "ad", "ddsafa", "6", "asd", "2"]));